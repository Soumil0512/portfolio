import { Portfolio } from "@/types";
import Skill from "./Skill";

export default function Skills({ skills }: { skills: Portfolio["skills"] }) {
  return (
    <div
      id="skills"
      className="mb-10 flex w-full scroll-mt-[88px] flex-col items-center md:flex-row md:items-start"
    >
      {/* <p className="mb-3 text-3xl font-bold md:mb-0 md:grow"> */}
      <p className="duration-400 sticky top-[75px] w-full bg-primary px-4 pb-3 pt-[10px] text-2xl font-bold shadow-lg transition-[background-color] delay-150 md:mb-0 md:w-auto md:min-w-[30%] md:max-w-[50%] md:shadow-none">
        Skills
      </p>
      <div className="mt-3 grid w-full md:min-w-[70%] md:max-w-[50%] grid-cols-2 justify-items-center gap-3 px-4">
        {skills.map((skill, idx) => (
          <Skill key={idx} skill={skill} />
        ))}
      </div>
    </div>
  );
}
