import { Portfolio } from "@/types";
import Skill from "./Skill";

export default function Skills({ skills }: { skills: Portfolio["skills"] }) {
  return (
    <div
      id="skills"
      className="mb-10 flex w-full scroll-mt-[88px] flex-col items-center"
    >
      <p className="mb-3 text-3xl font-bold">Skills</p>
      <div className="grid w-full grid-cols-2 gap-3 pt-2">
        {skills.map((skill, idx) => (
          <Skill key={idx} skill={skill} />
        ))}
      </div>
    </div>
  );
}
