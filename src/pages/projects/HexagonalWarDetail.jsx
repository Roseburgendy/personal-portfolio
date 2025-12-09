import { BaseProjectDetail } from "./BaseProjectDetail";
import { RevealOnScroll } from "../../components/RevealOnScroll";
import { gameProjects } from "../../data/projects";

/**
 * Customized Project Detail Page for Hexagonal War: Chemical Crisis
 * This demonstrates how to create a unique, customized page while using the base structure
 */
export const HexagonalWarDetail = () => {
  const project = gameProjects.find(p => p.slug === "hexagonal-war");

  // Custom sections for this specific project
  const customSections = (
    <>
      {/* Custom Design Philosophy Section */}
      <RevealOnScroll>
        <div className="card-glass rounded-3xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Design Philosophy
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            Hexagonal War: Chemical Crisis reimagines the classic Bomberman formula by introducing
            hexagonal tiles, which creates new strategic possibilities and movement patterns. The
            chemical theme adds a unique visual identity and allows for creative power-up designs.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            Our goal was to maintain the fast-paced, competitive nature of the original while
            adding depth through environmental interactions and team-based gameplay mechanics.
          </p>
        </div>
      </RevealOnScroll>

      {/* Two-Column: Challenges + Solutions */}
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card-glass rounded-3xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
              Technical Challenges
            </h2>
            <ul className="space-y-3 text-sm" style={{ color: "var(--muted)" }}>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "var(--accent-600)" }}>•</span>
                <span>Implementing hexagonal grid pathfinding and collision detection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "var(--accent-600)" }}>•</span>
                <span>Synchronizing multiplayer state across 4 players in Lua</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "var(--accent-600)" }}>•</span>
                <span>Balancing explosion patterns on hexagonal grids</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "var(--accent-600)" }}>•</span>
                <span>Optimizing performance with multiple bomb explosions</span>
              </li>
            </ul>
          </div>

          <div className="card-glass rounded-3xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
              Key Features
            </h2>
            <ul className="space-y-3 text-sm" style={{ color: "var(--muted)" }}>
              {project?.features?.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2" style={{ color: "var(--accent-600)" }}>•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealOnScroll>

      {/* Full Width: Development Process */}
      <RevealOnScroll>
        <div className="card-glass rounded-3xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--accent-600)" }}>
                Phase 1: Prototyping
              </h3>
              <p style={{ color: "var(--muted)" }}>
                Created core mechanics, tested hexagonal movement, and established the basic game loop.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--accent-600)" }}>
                Phase 2: Core Features
              </h3>
              <p style={{ color: "var(--muted)" }}>
                Implemented bomb mechanics, power-ups, destructible environments, and multiplayer support.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--accent-600)" }}>
                Phase 3: Polish
              </h3>
              <p style={{ color: "var(--muted)" }}>
                Added visual effects, sound design, UI improvements, and extensive playtesting for balance.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* My Contributions */}
      {project?.responsibilities && project.responsibilities.length > 0 && (
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

      {/* Gallery */}
      {project?.gallery && project.gallery.length > 0 && (
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

      {/* Links */}
      {project?.links && project.links.length > 0 && (
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
  );

  return <BaseProjectDetail project={project} customSections={customSections} />;
};
