import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI in .env file");
}

// Define the interface for our global cache
interface MongooseCache {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

// Extend the global object with our custom property
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

// Use the global cache to store the connection
const cached: MongooseCache = globalThis.mongooseCache || { conn: null, promise: null };

export default async function connectToDB(): Promise<Connection> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((mongoose) => {
        console.log("Connected to MongoDB");
        return mongoose.connection;
      })
      .catch((err) => {
        console.error("MongoDB connection error:", err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  globalThis.mongooseCache = cached; // Store it globally

  return cached.conn;
}

export async function closeDB() {
  if (cached.conn) {
    await cached.conn.close();
    console.log("MongoDB connection closed.");
    cached.conn = null;
    cached.promise = null;
  }
}

process.on("SIGINT", async () => {
  await closeDB();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await closeDB();
  process.exit(0);
});