export default function Bio({ bio, role }: { bio: string[]; role: string }) {
  return (
    <div
      id="bio"
      className="mb-5 flex h-full w-full scroll-mt-[88px] flex-col items-start justify-start"
    >
      <div className="flex h-full w-full flex-col items-start justify-start">
        {bio.map((paragraph, idx) => (
          <p key={idx} className="mb-5 text-lg">
            {paragraph}
          </p>
        ))}
        <p className="text-lg">My current role is {role}</p>
      </div>
    </div>
  );
}
