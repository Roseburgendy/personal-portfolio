// Reusable Project Card Component
export const ProjectCard = ({ project, categoryPrefix = "" }) => {
  const projectLink = `#project/${categoryPrefix}${project.id}`;

  return (
    <a
      href={projectLink}
      className="group rounded-3xl bg-[#F5EDE3] hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
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
              <span className="px-4 py-2 bg-[#E8D5C4] text-[#5C4033] text-xs font-semibold rounded-full uppercase tracking-wider">
                {project.tech}
              </span>
              <span className="px-4 py-2 bg-[#E8D5C4] text-[#5C4033] text-xs font-semibold rounded-full uppercase tracking-wider">
                {project.role.split(',')[0].trim()}
              </span>
            </div>

            {/* Arrow button at bottom right */}
            <div className="absolute bottom-6 right-6">
              <div className="w-14 h-14 bg-[var(--accent-600)] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
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
        <div className="text-[var(--accent-600)] text-sm font-bold tracking-wider">
          {project.year || "2025"}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-[#5C4033] leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed flex-1">
          {project.description}
        </p>
      </div>
    </a>
  );
};
