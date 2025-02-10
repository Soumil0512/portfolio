import { PortfolioProps } from "@/types";
import Brand from "./Brand";
import Navbar from "./Navbar";

export default function Header({ portfolio }: PortfolioProps) {
  return (
    <header className="bg-secondary text-primary flex justify-between p-3">
      <Brand name={portfolio.name} />
      <Navbar />
    </header>
  );
}
