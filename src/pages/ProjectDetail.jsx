import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { gameProjects, artProjects, otherProjects, featuredProjects } from "../data/projects";

export const ProjectDetail = ({ projectId }) => {
  // Find the project across all categories
  const allProjects = [
    ...gameProjects,
    ...artProjects,
    ...otherProjects,
    ...featuredProjects
  ];

  const project = allProjects.find(p => p.id === parseInt(projectId));

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage="portfolio" />

      <section className="section section-pad pt-32">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-4">
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

              {/* Project Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>

              {/* Project Metadata */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="font-semibold">Team Size:</span> {project.teamSize}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Duration:</span> {project.duration}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Tech:</span> {project.tech}
                </div>
              </div>

              {/* Role Badge */}
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-8">
                {project.role}
              </div>
            </div>

            {/* Main Image */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Project Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Project</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Additional sections can be added here */}
              {project.fullDescription && (
                <div className="mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Responsibilities */}
              {project.responsibilities && project.responsibilities.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">My Responsibilities</h3>
                  <ul className="space-y-3">
                    {project.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="rounded-xl overflow-hidden border border-gray-200">
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* External Links */}
              {project.links && project.links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-4">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary inline-flex items-center gap-2"
                    >
                      {link.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </div>
  );
};
