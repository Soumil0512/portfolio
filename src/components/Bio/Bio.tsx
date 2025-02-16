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
      // h-[calc(100vh-90px)]
      className="mb-5 flex h-full w-full scroll-mt-[88px] flex-col items-start"
    >
      <p className="mb-3 text-2xl font-bold">About me</p>
      <div className="flex h-full flex-col items-start justify-evenly">
        {/* <div className="flex w-full flex-col items-start justify-evenly"> */}
        {bio.map((paragraph, idx) => (
          <p key={idx} className="mb-3 text-lg">
            {paragraph}
          </p>
        ))}
        <p className="mb-3 text-lg">My current role is {role}.</p>
        {/* </div> */}
      </div>
    </div>
  );
}
