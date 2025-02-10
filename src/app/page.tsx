import Header from "@/components/Header/Header";
import { Portfolio } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`, {
    method: "GET",
  });

  const { portfolio }: { portfolio: Portfolio | null } = await res.json();

  if (!portfolio) throw new Error("Portfolio content missing!!!");

  return (
    <div className="w-100 bg-primary text-secondary duration-400 h-screen transition-colors delay-150">
      <Header portfolio={portfolio} />
    </div>
  );
}
