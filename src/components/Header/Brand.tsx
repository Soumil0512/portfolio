import { OnClickEventProps } from "@/types";
import Link from "next/link";

export default function Brand({
  name,
  handleCloseToggle,
}: {
  name: string;
  handleToggle: (e: OnClickEventProps) => void;
  handleCloseToggle: (e: OnClickEventProps) => void;
}) {
  return (
    <Link
      href="/"
      onClick={(e) => {
        handleCloseToggle(e);
      }}
      className="flex items-center rounded p-2 text-3xl hover:bg-accent hover:text-accent2 md:text-2xl"
    >
      {name}
    </Link>
  );
}
