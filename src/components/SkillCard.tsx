// components/SkillCard.tsx
import React from "react";

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  children: string;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-card-icon">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="skill-card-title">{title}</h3>
      <p className="skill-card-description">{children}</p>
    </div>
  );
}

export default SkillCard;
