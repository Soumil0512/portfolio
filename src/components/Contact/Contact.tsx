export default function Contact({ email }: { email: string }) {
  return (
    <div
      id="contact"
      className="mb-5 flex h-full w-full scroll-mt-[88px] flex-col items-start justify-start"
    >
      <div className="flex h-full w-full flex-col items-start justify-start md:flex-row md:items-center md:gap-2">
        <p className="text-lg">Reach me at </p>
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
