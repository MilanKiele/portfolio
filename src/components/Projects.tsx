import ProjectCard from "@/components/ProjectCard";
import DescriptionSection from "./DescriptionSection";
import { ProjectsData } from "@/constants/projectsData";

export function Projects() {
  return (
    <section className="container-x py-12 px-8">
      <DescriptionSection
        title="Products"
        subtitle="Projects"
        description="Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality."
      />
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {ProjectsData.map((project, idx) => (
          <div key={idx} className="relative">
            <ProjectCard {...project}></ProjectCard>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
