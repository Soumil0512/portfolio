import { Portfolio } from "@/types";
import Navbar from "./Navbar";

export default function Header({ name }: { name: Portfolio["name"] }) {
  return (
    <>
      <header className="sticky top-0 flex justify-between gap-4 bg-secondary p-3 text-primary">
        <Navbar name={name} />
      </header>
      <div id="nav-toggle-wrapper"></div>
    </>
  );
}
