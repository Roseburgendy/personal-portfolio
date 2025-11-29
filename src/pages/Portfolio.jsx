import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RevealOnScroll } from "../components/RevealOnScroll";

export const Portfolio = () => {
  const categories = [
    {
      title: "Game Projects",
      description: "Interactive game development projects showcasing gameplay programming and design",
      link: "#portfolio/games",
      icon: "🎮",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Art Projects",
      description: "Creative artworks and visual design projects",
      link: "#portfolio/art",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Other Projects",
      description: "Additional projects including web development, tools, and experiments",
      link: "#portfolio/other",
      icon: "💡",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage="portfolio" />

      <section className="section section-pad pt-32">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Portfolio
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore my work across different categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={category.link}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl mb-6`}>
                      {category.icon}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {category.title}
                    </h2>

                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>

                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      View Projects
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </div>
  );
};
