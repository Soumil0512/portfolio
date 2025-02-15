import { Portfolio } from "@/types";

export default function Contact({ email }: { email: Portfolio["email"] }) {
  return (
    <div
      id="contact"
      className="mb-3 flex w-full scroll-mt-[88px] flex-col items-start justify-start"
    >
      <div className="flex h-full w-full flex-col items-start justify-start md:flex-row md:items-center md:gap-2">
        <p className="text-lg font-bold">Reach me at </p>
        <a
          href={`mailto:${email}`}
          className="rounded bg-accent p-2 text-accent2"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
