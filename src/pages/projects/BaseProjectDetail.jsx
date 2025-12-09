import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { RevealOnScroll } from "../../components/RevealOnScroll";

/**
 * Base Project Detail Component
 * This component provides a flexible base for creating customized project detail pages
 * while maintaining a consistent hero card structure.
 */
export const BaseProjectDetail = ({
  project,
  customSections = null,
  heroLayout = "default"
}) => {
  if (!project) {
    return (
      <div className="min-h-screen" style={{ background: "var(--bg)" }}>
        <Navbar currentPage="portfolio" />
        <section className="section section-pad pt-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--text)" }}>
              Project Not Found
            </h1>
            <a href="#home" className="btn btn-primary">Back to Home</a>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar currentPage="portfolio" />

      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <a
              href="#home"
              className="inline-flex items-center group text-sm"
              style={{ color: "var(--muted)" }}
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>

          {/* Bento Box Layout */}
          <div className="space-y-4">
            {/* Row 1: Hero Image + Title Card */}
            <RevealOnScroll>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[500px] md:h-[600px]">
                {/* Hero Image - 2/3 width */}
                <div className="lg:col-span-2 card-glass rounded-3xl overflow-hidden h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title & Meta Card - 1/3 width */}
                <div className="card-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--text)" }}>
                      {project.title}
                    </h1>
                    <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: "var(--text)" }}>Role</h3>
                      <p style={{ color: "var(--muted)" }}>{project.role}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: "var(--text)" }}>Duration</h3>
                      <p style={{ color: "var(--muted)" }}>{project.duration}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: "var(--text)" }}>Technology</h3>
                      <p style={{ color: "var(--muted)" }}>{project.tech}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: "var(--text)" }}>Team Size</h3>
                      <p style={{ color: "var(--muted)" }}>{project.teamSize} people</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Custom Sections OR Default Sections */}
            {customSections ? customSections : (
              <>
                {/* Row 2: Overview + Features */}
                {project.fullDescription && (
                  <RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Overview Card */}
                      <div className="card-glass rounded-3xl p-6 md:p-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
                          The Opportunity
                        </h2>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                          {project.fullDescription}
                        </p>
                      </div>

                      {/* Features Card */}
                      {project.features && project.features.length > 0 && (
                        <div className="card-glass rounded-3xl p-6 md:p-8">
                          <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
                            Key Features
                          </h2>
                          <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="mr-2" style={{ color: "var(--accent-600)" }}>•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </RevealOnScroll>
                )}

                {/* Row 3: Responsibilities */}
                {project.responsibilities && project.responsibilities.length > 0 && (
                  <RevealOnScroll>
                    <div className="card-glass rounded-3xl p-6 md:p-8">
                      <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
                        My Contributions
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                        {project.responsibilities.map((responsibility, index) => (
                          <div key={index} className="flex items-start text-sm">
                            <span className="mr-2" style={{ color: "var(--accent-600)" }}>•</span>
                            <span style={{ color: "var(--muted)" }}>{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                )}

                {/* Row 4: Gallery (if available) */}
                {project.gallery && project.gallery.length > 0 && (
                  <RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.gallery.map((image, index) => (
                        <div key={index} className="card-glass rounded-3xl overflow-hidden aspect-video">
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </RevealOnScroll>
                )}

                {/* Row 5: Links */}
                {project.links && project.links.length > 0 && (
                  <RevealOnScroll>
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl font-semibold transition-all text-sm"
                          style={{
                            background: "var(--accent)",
                            color: "white",
                          }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </RevealOnScroll>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
