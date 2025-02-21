import { Portfolio } from "@/types";
import Navbar from "./Navbar";

export default function Header({ name }: { name: Portfolio["name"] }) {
  return (
    <>
      <header className="sticky top-[0px] z-[15] w-full bg-secondary text-primary shadow-2xl">
        <Navbar name={name} />
      </header>
      <div id="nav-toggle-wrapper"></div>
    </>
  );
}
