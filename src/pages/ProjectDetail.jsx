import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { gameProjects, artProjects, otherProjects, featuredProjects } from "../data/projects";
import { getProjectDetailComponent } from "./projects";
import { DynamicProjectDetail } from "./projects/DynamicProjectDetail";

export const ProjectDetail = ({ projectSlug }) => {
  // Find the project across all categories
  const allProjects = [
    ...gameProjects,
    ...artProjects,
    ...otherProjects,
    ...featuredProjects
  ];

  const project = allProjects.find(p => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar currentPage="portfolio" />
        <section className="section section-pad pt-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <a href="#home" className="btn btn-primary">Back to Home</a>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Check if there's a custom component for this project
  const CustomComponent = getProjectDetailComponent(project.slug);

  if (CustomComponent) {
    // Render custom component
    return <CustomComponent />;
  } else {
    // Render dynamic component based on project data
    return <DynamicProjectDetail project={project} />;
  }
};
