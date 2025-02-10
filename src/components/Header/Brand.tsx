import Link from "next/link";

export default function Brand({ name }: { name: string }) {
  return <Link href="/" className="p-2">
    {name}
  </Link>;
}
