"use client";

import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import DescriptionSection from "./DescriptionSection";

const PROJECTS = [
  {
    img: "/image/yt.webp",
    title: "YouTube Channel",
    desc: "A channel dedicated to sharing valuable content and tutorials for digital enthusiasts.",
    link: "https://www.youtube.com/", // Link provided
  },
  {
    img: "/image/blog2.svg",
    title: "Websites Like This One",
    desc: "Creating modern, responsive, and functional websites tailored to user needs and experience.",
    link: "", // No link provided
  },
  {
    img: "/image/blog3.svg",
    title: "Blockchain Contract Development on Solana",
    desc: "Building decentralized applications and smart contracts on the Solana blockchain.",
    link: "", // No link provided
  },
  {
    img: "/image/blog4.svg",
    title: "SaaS Platform",
    desc: "Developing a software as a service platform to streamline business operations and processes.",
    link: "", // No link provided
  },
  {
    img: "/image/blog-1.svg",
    title: "MaiaLabs Company Founding",
    desc: "Founding MaiaLabs, a company focused on innovation in tech, web development, and AI.",
    link: "http://maialabs.net/", // Link provided
  },
  {
    img: "/image/blog2.svg",
    title: "Audio AI - Separating Multiple Speakers",
    desc: "Building an AI-based system for separating multiple speakers in audio recordings.",
    link: "", // No link provided
  },
];

export function Projects() {
  return (
    <section className="py-12 px-8">
      <DescriptionSection
        title="Products"
        subtitle="Projects"
        description="Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality."
      />
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="relative">
            <ProjectCard {...project}></ProjectCard>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
