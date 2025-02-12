import { PortfolioProps } from "@/types";
import Brand from "./Brand";
import Navbar from "./Navbar";

export default function Header({ portfolio }: PortfolioProps) {
  return (
    <header className="sticky top-0 bg-secondary text-primary flex gap-4 justify-between p-3">
      <Brand name={portfolio.name} />
      <Navbar />
    </header>
  );
}
