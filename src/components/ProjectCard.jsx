// Reusable Project Card Component
export const ProjectCard = ({ project }) => {
  return (
    <article
      className="rounded-3xl h-full flex flex-col md:flex-row"
      style={{ backgroundColor: "var(--brand-scale-3-light)" }}
    >
      {/* Image - with padding for margin effect */}
      <div className="p-6 pb-0 md:pb-6 md:pr-0 md:w-2/5 md:flex-shrink-0">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 pt-4 md:pt-6 space-y-3 flex-1 flex flex-col">
        {/* Year and type */}
        <div
          className="text-sm font-bold tracking-wider"
          style={{ color: "var(--accent-600)" }}
        >
          {project.year || "2025"} · {project.type}
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-bold leading-tight"
          style={{ color: "var(--brand-scale-12-light)" }}
        >
          {project.title}
        </h3>

        {/* Role */}
        <p
          className="text-sm font-semibold"
          style={{ color: "var(--brand-scale-12-light)" }}
        >
          {project.role}
        </p>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "var(--neutral-scale-11-light)" }}
        >
          {project.description}
        </p>

        {/* Tools */}
        <p
          className="text-xs"
          style={{ color: "var(--neutral-scale-11-light)" }}
        >
          {project.tech}
        </p>
      </div>
    </article>
  );
};
