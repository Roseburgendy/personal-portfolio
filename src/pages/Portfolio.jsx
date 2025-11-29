import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { ProjectCard } from "../components/ProjectCard";
import { gameProjects, artProjects, otherProjects } from "../data/projects";

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("games");

  const categories = [
    {
      id: "games",
      title: "Games",
      icon: "🎮",
      color: "from-purple-500 to-pink-500",
      projects: gameProjects,
      description: "Interactive game development projects"
    },
    {
      id: "art",
      title: "Art",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      projects: artProjects,
      description: "Creative artworks and visual design"
    },
    {
      id: "other",
      title: "Other",
      icon: "💡",
      color: "from-green-500 to-emerald-500",
      projects: otherProjects,
      description: "Web development, tools, and experiments"
    }
  ];

  const activeCategory = categories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage="portfolio" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>

        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <RevealOnScroll>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore my creative journey through games, art, and innovative projects
            </p>

            {/* Category pills preview */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200"
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className="font-semibold text-gray-700">{category.title}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="section section-pad pb-20">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4">

            {/* Mobile Tab Switcher - Horizontal */}
            <div className="flex md:hidden justify-center mb-16">
              <div className="relative inline-flex bg-white rounded-full p-2 shadow-lg border border-gray-200">
                {/* Animated background indicator */}
                <motion.div
                  className="absolute top-2 bottom-2 rounded-full"
                  layoutId="activeTabMobile"
                  initial={false}
                  animate={{
                    left: activeTab === "games" ? "0.5rem" :
                          activeTab === "art" ? "calc(33.333% + 0.25rem)" :
                          "calc(66.666% + 0rem)",
                    width: "calc(33.333% - 0.5rem)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    background: `linear-gradient(to right, ${
                      activeCategory.color.includes("purple") ? "#a855f7, #ec4899" :
                      activeCategory.color.includes("blue") ? "#3b82f6, #06b6d4" :
                      "#22c55e, #10b981"
                    })`
                  }}
                />

                {/* Tab buttons */}
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`relative z-10 px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                      activeTab === category.id
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xl">{category.icon}</span>
                      <span className="text-sm">{category.title}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Layout - Vertical Tabs on Left */}
            <div className="hidden md:flex gap-8">
              {/* Vertical Tab Switcher - Desktop */}
              <div className="flex-shrink-0">
                <div className="sticky top-32">
                  <div className="relative flex flex-col bg-white rounded-full p-2 shadow-lg border border-gray-200">
                    {/* Animated background indicator */}
                    <motion.div
                      className="absolute left-2 right-2 rounded-full"
                      layoutId="activeTabDesktop"
                      initial={false}
                      animate={{
                        top: activeTab === "games" ? "0.5rem" :
                              activeTab === "art" ? "calc(33.333% + 0.25rem)" :
                              "calc(66.666% + 0rem)",
                        height: "calc(33.333% - 0.5rem)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{
                        background: `linear-gradient(to bottom, ${
                          activeCategory.color.includes("purple") ? "#a855f7, #ec4899" :
                          activeCategory.color.includes("blue") ? "#3b82f6, #06b6d4" :
                          "#22c55e, #10b981"
                        })`
                      }}
                    />

                    {/* Tab buttons */}
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`relative z-10 px-6 py-4 rounded-full font-semibold transition-colors duration-200 ${
                          activeTab === category.id
                            ? "text-white"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <span className="flex flex-col items-center gap-1">
                          <span className="text-2xl">{category.icon}</span>
                          <span className="text-sm whitespace-nowrap">{category.title}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects Content */}
              <div className="flex-1">
                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeCategory.projects.length > 0 ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {activeCategory.projects.map((project, index) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <ProjectCard project={project} categoryPrefix="" />
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-20">
                        <div className="text-6xl mb-4">{activeCategory.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Coming Soon
                        </h3>
                        <p className="text-gray-600">
                          {activeCategory.title} projects will be added here soon.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Projects Display */}
            <div className="md:hidden">
              {/* Category Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-center mb-12"
                >
                  <p className="text-lg text-gray-600">
                    {activeCategory.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Projects Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeCategory.projects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8">
                      {activeCategory.projects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <ProjectCard project={project} categoryPrefix="" />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20">
                      <div className="text-6xl mb-4">{activeCategory.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Coming Soon
                      </h3>
                      <p className="text-gray-600">
                        {activeCategory.title} projects will be added here soon.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </div>
  );
};
