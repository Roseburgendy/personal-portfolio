import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "../ProjectCard";
import { featuredProjects } from "../../data/projects";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="section section-pad bg-gray-50"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title-black">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} categoryPrefix="" />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
