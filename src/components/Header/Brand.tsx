import Link from "next/link";
import { MouseEvent } from "react";

export default function Brand({ name, handleToggle }: { name: string, handleToggle: (e: MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <Link
      href="/"
      onClick={(e) => handleToggle(e)}
      className="flex items-center rounded p-2 text-3xl hover:bg-accent hover:text-accent2 md:text-2xl"
    >
      {name}
    </Link>
  );
}
