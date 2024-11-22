"use client";

import React from "react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import SkillCard from "@/components/SkillCard";
import DescriptionSection from "./DescriptionSection";

// Sample skill data
const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Video Creation (YouTube)",
    children:
      "I create engaging and informative video content for YouTube, blending creativity with technical expertise to deliver compelling visuals and narratives.",
  },
  {
    icon: FingerPrintIcon,
    title: "3D Animation using Blender",
    children:
      "With Blender, I craft stunning 3D animations, bringing ideas to life with stylized modeling, realistic lighting, and captivating motion.",
  },
  {
    icon: SwatchIcon,
    title: "PWA Development",
    children:
      "I build Progressive Web Apps (PWAs) that provide a native app experience directly in the browser, delivering fast, reliable, and engaging web applications.",
  },
  {
    icon: HashtagIcon,
    title: "Game Development",
    children:
      "From concept to execution, I design and develop interactive games, ensuring a fun and immersive experience through rich gameplay mechanics and stunning visuals using Unity.",
  },
  {
    icon: EyeIcon,
    title: "Blockchain Development",
    children:
      "I specialize in blockchain technology, developing decentralized applications (dApps) and smart contracts to revolutionize the way we interact with digital assets using Avalanche or Solana.",
  },
  {
    icon: DocumentTextIcon,
    title: "AI Training and Integration",
    children:
      "I train AI models and integrate them into applications, enabling intelligent automation and improving user experiences through machine learning and AI-powered features.",
  },
];

export function Skills() {
  return (
    <section className="py-6 px-6">
      <DescriptionSection
        title="What I do"
        subtitle="Skills"
        description="Just your average idiot trying to make things work on the internet—with some success and a surprising amount of quality. Worst entertainer ever, though."
      />

      <div className="skills-list">
        {SKILLS.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} title={skill.title}>
            {skill.children}
          </SkillCard>
        ))}
      </div>
    </section>
  );
}

export default Skills;
