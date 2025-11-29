// Reusable Project Card Component
export const ProjectCard = ({ project, categoryPrefix = "" }) => {
  const projectLink = `#project/${categoryPrefix}${project.id}`;

  return (
    <a
      href={projectLink}
      className="group block"
    >
      <div className="space-y-4">
        {/* Image Card with overlay badges */}
        <div className="bg-white rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border border-gray-200">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay badges */}
            <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center gap-2 text-white text-xs">
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>{project.teamSize}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>{project.tech}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content outside the card */}
        <div>
          {/* Title */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-2xl font-bold text-gray-900 leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Role */}
          <p className="text-gray-600 text-base mb-3">
            {project.role}
          </p>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
};
