import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { ProjectCard } from "../components/ProjectCard";
import { gameProjects } from "../data/projects";

export const GameProjects = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage="portfolio" />

      <section className="section section-pad pt-32">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4">
            {/* Header with back button */}
            <div className="mb-12">
              <a
                href="#home"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </a>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Game Projects 🎮
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Interactive game development projects showcasing gameplay programming, mechanics design, and creative problem-solving.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gameProjects.map((project) => (
                <ProjectCard key={project.id} project={project} categoryPrefix="" />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </div>
  );
};
