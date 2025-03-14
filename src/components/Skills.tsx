import React from "react";
import SkillCard from "@/components/SkillCard";
import DescriptionSection from "./DescriptionSection";
import { SkillsData } from "@/constants/skillsData";

export function Skills() {
  return (
    <section className="flex items-center justify-center">
      <div className="container-x py-6 px-6">

        <DescriptionSection
          title="What I do"
          subtitle="Skills"
          description="Just your average idiot trying to make things work on the internet—with some success and a surprising amount of quality. Worst entertainer ever, though."
        />

        <div className="skills-list">
          {SkillsData.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} title={skill.title}>
              {skill.children}
            </SkillCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
