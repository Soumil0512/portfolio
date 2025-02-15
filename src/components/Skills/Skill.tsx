import { Skill as SkillType } from "@/types";
import Image from "next/image";

export default function Skill(skill: SkillType) {
  return (
    <div className="group flex cursor-pointer items-center justify-center rounded hover:bg-secondary">
      <Image
        className="intrinsic transition-opacity duration-300 group-hover:opacity-20"
        src={skill.icon}
        alt={skill.name}
        width={100}
        height={100}
      />
      <div className="duration-300 absolute text-xl text-primary opacity-0 transition-opacity group-hover:opacity-100">
        {skill.name}
      </div>
    </div>
  );
}
