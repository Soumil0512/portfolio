import { Portfolio } from "@/types";

export default function Bio({
  bio,
  role,
}: {
  bio: Portfolio["bio"];
  role: Portfolio["role"];
}) {
  return (
    <div
      id="bio"
      className="mb-5 flex h-full w-full scroll-mt-[88px] flex-col items-start md:flex-row"
    >
      <p className="duration-400 sticky top-[76px] w-full bg-primary px-4 pb-3 pt-[10px] text-2xl font-bold shadow-lg transition-[background-color] delay-150 md:mb-0 md:min-w-[30%] md:max-w-[50%] md:shadow-none">
        About me
      </p>
      <div className="my-2 flex h-full w-full flex-col items-start justify-evenly px-4 pt-2 md:min-w-[70%] md:max-w-[50%]">
        {bio.map((paragraph, idx) => (
          <p key={idx} className="mb-3 text-lg">
            {paragraph}
          </p>
        ))}
        <p className="mb-3 text-lg">
          My current role is <span className="font-semibold">{role}</span>.
        </p>
      </div>
    </div>
  );
}
