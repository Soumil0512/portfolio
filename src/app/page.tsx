import { Portfolio } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`, {
    method: "GET",
  });

  const { portfolio }: { portfolio: Portfolio | null } = await res.json();

  if (!portfolio) throw new Error("Portfolio content missing!!!");

  return <div>Name: {portfolio.name}</div>;
}
