import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RevealOnScroll } from "../components/RevealOnScroll";

export const About = () => {
  const skills = [
    { name: "React", category: "Frontend" },
    { name: "Unity", category: "Game Dev" },
    { name: "C#", category: "Programming" },
    { name: "TypeScript", category: "Programming" },
    { name: "TailwindCSS", category: "Frontend" },
    { name: "Figma", category: "Design" },
    { name: "Git", category: "Tools" },
    { name: "Lua", category: "Game Dev" },
  ];

  const interests = [
    { icon: "🎮", label: "Game Design" },
    { icon: "🎨", label: "Digital Art" },
    { icon: "💻", label: "Programming" },
    { icon: "🎵", label: "Music" },
    { icon: "📚", label: "Learning" },
    { icon: "🌟", label: "Innovation" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage="about" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
              >
                About Me
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Multi-disciplinary creator passionate about games, art, and innovative solutions
              </motion.p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Bento Box Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">

              {/* Large Card - Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 lg:row-span-2 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-3xl">
                    👋
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Hello, I'm [Your Name]
                    </h2>
                    <p className="text-gray-600">Game Designer & Developer</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I am a multi-disciplinary passionate learner with a focus on game design and programming. I am enthusiastic about creating creative solutions and bringing joy to people and the world around us.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Currently, I am a year 3 student at Xiamen University Malaysia, pursuing a bachelor's degree in Digital Media Technology.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-shadow">
                    Get in Touch
                  </a>
                  <a href="/resume.pdf" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
                    View Resume
                  </a>
                </div>
              </motion.div>

              {/* Skills Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow text-white"
              >
                <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">🏫</span>
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Bachelor of Digital Media Technology</h4>
                    <p className="text-gray-600">Xiamen University Malaysia</p>
                    <p className="text-sm text-gray-500">Year 3 Student • Expected 2025</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      <strong>Relevant Coursework:</strong> Game Design, Programming, Digital Art, Interactive Media, 3D Modeling
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Interests Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Interests & Passions</h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-white rounded-2xl p-4 text-center hover:scale-105 transition-transform"
                    >
                      <div className="text-4xl mb-2">{interest.icon}</div>
                      <p className="font-semibold text-gray-700 text-sm">{interest.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-2 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow text-white"
              >
                <div className="text-6xl mb-4 opacity-50">"</div>
                <p className="text-xl font-medium leading-relaxed">
                  Creating joy through games and innovative solutions is what drives me every day.
                </p>
              </motion.div>

              {/* Contact Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-2xl">📍</span>
                  <p>Malaysia</p>
                </div>
              </motion.div>

              {/* Currently Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-green-400 to-emerald-400 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow text-white"
              >
                <h3 className="text-xl font-bold mb-4">Currently</h3>
                <div className="space-y-2 text-sm">
                  <p>✨ Learning new game mechanics</p>
                  <p>🎮 Working on personal projects</p>
                  <p>📚 Studying at university</p>
                </div>
              </motion.div>

              {/* Fun Fact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">💡</span>
                  <h3 className="text-2xl font-bold text-gray-900">Fun Fact</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  I love combining technical skills with creative thinking to solve problems in unique ways. Whether it's coding a game mechanic or designing a visual experience, I'm always looking for the intersection of art and technology.
                </p>
              </motion.div>

            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};
