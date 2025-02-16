import { Skill as SkillType } from "@/types";
import Image from "next/image";

export default function Skill({ skill }: { skill: SkillType }) {
  return (
    <div className="group flex items-center justify-center rounded hover:bg-accent">
      <Image
        className={`opacity-100 transition-opacity duration-[300ms] ${skill.name === "React.js" ? "group-hover:opacity-70" : "group-hover:opacity-20"}`}
        src={skill.icon}
        alt={skill.name}
        width={100}
        height={100}
      />
      <div className="w-100 h-100 absolute p-2 bg-secondary rounded text-xl text-primary opacity-0 transition-opacity duration-[300ms] group-hover:opacity-100">
        {skill.name}
      </div>
    </div>
  );
}
