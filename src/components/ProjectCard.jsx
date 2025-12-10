// Reusable Project Card Component
export const ProjectCard = ({ project, categoryPrefix = "" }) => {
  // Use slug if available, otherwise fall back to ID for backward compatibility
  const projectIdentifier = project.slug || project.id;
  const projectLink = `#project/${categoryPrefix}${projectIdentifier}`;

  return (
    <a
      href={projectLink}
      className="group rounded-3xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
      style={{ backgroundColor: "var(--brand-scale-3-light)" }}
    >
      {/* Image with hover overlay - with padding for margin effect */}
      <div className="p-6 pb-0">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Tags at bottom left */}
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
              <span
                className="px-4 py-2 text-xs font-semibold rounded-full uppercase tracking-wider"
                style={{
                  backgroundColor: "var(--brand-scale-4-light)",
                  color: "var(--brand-scale-12-light)"
                }}
              >
                {project.type}
              </span>
            </div>

            {/* Arrow button at bottom right */}
            <div className="absolute bottom-6 right-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                style={{ backgroundColor: "var(--accent-600)" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 pt-4 space-y-3 flex-1 flex flex-col">
        {/* Year tag */}
        <div
          className="text-sm font-bold tracking-wider"
          style={{ color: "var(--accent-600)" }}
        >
          {project.year || "2025"}
        </div>

        {/* Title */}
        <h3
          className="text-2xl md:text-3xl font-bold leading-tight"
          style={{ color: "var(--brand-scale-12-light)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "var(--neutral-scale-11-light)" }}
        >
          {project.description}
        </p>
      </div>
    </a>
  );
};
