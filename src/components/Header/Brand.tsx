import Link from "next/link";

export default function Brand({ name }: { name: string }) {
  return (
    <Link
      href="/"
      className="flex items-center rounded p-2 text-3xl hover:bg-accent hover:text-accent2 focus:bg-accent focus:text-accent2 md:text-2xl"
    >
      {name}
    </Link>
  );
}
