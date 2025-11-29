import { color, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import profile from "../../assets/profile.jpg";
import { featuredProjects } from "../../data/projects";
import Lottie from "lottie-react";

// 💡 put this OUTSIDE `export const Home = () => { ... }`
const envelopeAnimation = {
  v: "5.5.7",
  fr: 60,
  ip: 0,
  op: 90,
  w: 512,
  h: 512,
  nm: "Mail",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "envelope",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0] },
            { t: 30, s: [-5] },
            { t: 60, s: [5] },
            { t: 90, s: [0] }
          ]
        },
        p: {
          a: 1,
          k: [
            { t: 0, s: [256, 256, 0] },
            { t: 45, s: [256, 226, 0] },
            { t: 90, s: [256, 256, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100, 100] },
            { t: 20, s: [105, 105, 100] },
            { t: 40, s: [100, 100, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [140, 100] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 8 }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.871, 0.369, 0.106, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 3 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.988, 0.922, 0.894, 1] },
              o: { a: 0, k: 100 }
            },
            {
              // transform for the group (important for Lottie)
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
              sk: { a: 0, k: 0 },
              sa: { a: 0, k: 0 }
            }
          ],
          nm: "Envelope Body"
        }
      ],
      ip: 0,
      op: 90,
      st: 0
    }
  ]
};

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isContactHovered, setIsContactHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  const nextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const currentProject = featuredProjects[currentProjectIndex];


  return (
    <section id="home" className="min-h-screen py-32 relative overflow-hidden" style={{ background: "var(--bg)" }}>

      {/* Interactive Background Ball */}
      <motion.div
        className="pointer-events-none fixed w-96 h-96 rounded-full blur-3xl opacity-30 z-0"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <RevealOnScroll>
          {/* Main Layout: 2:1 ratio (Info Cards : Project Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* Left Section - Info Cards (2/3 width) */}
            <div className="lg:col-span-2 grid grid-cols-4 gap-4">

              {/* Row 1: Hero Card (3/4) : Profile Photo (1/4) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-4 md:col-span-3 rounded-3xl p-8 shadow-xl relative overflow-hidden backdrop-blur-md border flex flex-col justify-center min-h-[280px]"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  borderColor: "rgba(255, 255, 255, 0.85)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="text-6xl">✨</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--text)" }}>
                    Nice to meet you !
                  </h2>
                  <p className="text-lg" style={{ color: "var(--accent-600)" }}>
                    Game Programmer with a <strong>Creative</strong> Heart
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="col-span-4 md:col-span-1 rounded-3xl p-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden backdrop-blur-md border h-[330px] md:min-h-[300px]"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  borderColor: "rgba(255, 255, 255, 0.85)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={profile}
                  alt="Wang Ye"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Row 2: Bio Card (1/2) : Contact Card (1/2) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-span-4 md:col-span-2 card card-hover rounded-3xl p-8 shadow-lg min-h-[280px]"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  borderColor: "rgba(255, 255, 255, 0.85)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                <p className="muted leading-relaxed text-sm">
                  I'm <strong style={{ color: "var(--text)" }}>Wang Ye</strong>, a multi-disciplinary passionate learner with a focus on game design and programming. I love blending design and technology to deliver experiences that bring warmth and joy.
                </p>
              </motion.div>

              {/*Contact card*/}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="col-span-4 md:col-span-2 rounded-3xl p-8 shadow-lg backdrop-blur-md border flex flex-col justify-center min-h-[280px] relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  borderColor: "rgba(255, 255, 255, 0.85)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={() => setIsContactHovered(true)}
                onMouseLeave={() => setIsContactHovered(false)}
              >
                {/* Lottie Animation */}
                {isContactHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-4 right-4 w-20 h-20"
                  >
                    <Lottie
                      animationData={envelopeAnimation}
                      loop={true}
                      autoplay={true}
                    />
                  </motion.div>
                )}

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6" style={{ color: "var(--text)" }}>Contact Me</h3>
                  <div className="space-y-2">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="--neutral-scale-8-light hover:text-[var(--accent-600)] transition-colors text-sm block"
                    >
                      INSTAGRAM
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="--neutral-scale-8-light hover:text-[var(--accent-600)] transition-colors text-sm block"
                    >
                      TWITTER
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="--neutral-scale-8-light hover:text-[var(--accent-600)] transition-colors text-sm block"
                    >
                      LINKEDIN
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Section - Featured Projects Card (1/3 width) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="col-span-1 rounded-3xl p-6 shadow-lg backdrop-blur-md border flex flex-col min-h-[580px] lg:min-h-0"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                borderColor: "rgba(255, 255, 255, 0.85)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold" style={{ color: "var(--text)" }}>
                  Featured Projects
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevProject}
                    className="w-8 h-8 rounded-full backdrop-blur-sm border transition-all hover:shadow-md flex items-center justify-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.8)",
                      borderColor: "rgba(248, 138, 79, 0.3)",
                      color: "var(--accent-600)",
                    }}
                    aria-label="Previous project"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextProject}
                    className="w-8 h-8 rounded-full backdrop-blur-sm border transition-all hover:shadow-md flex items-center justify-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.8)",
                      borderColor: "rgba(248, 138, 79, 0.3)",
                      color: "var(--accent-600)",
                    }}
                    aria-label="Next project"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Single Project Display */}
              <div className="flex-1 flex flex-col">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col"
                >
                  {/* Project Thumbnail Card */}
                  <a
                    href={`#project/${currentProject.id}`}
                    className="relative w-full h-56 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group mb-4"
                  >
                    <div className="relative w-full h-full bg-gradient-to-br from-orange-100 to-pink-100">
                      {currentProject.image ? (
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-5xl">
                          {currentProject.tech?.includes('Lua') ? '🎮' :
                           currentProject.tech?.includes('React') ? '💻' :
                           '🎨'}
                        </div>
                      )}
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                  </a>

                  {/* Project Info - Outside Card */}
                  <div className="flex-1 flex flex-col px-2">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-bold text-lg leading-tight" style={{ color: "var(--text)" }}>
                        {currentProject.title}
                      </h4>
                      <span className="text-xs px-3 py-1 rounded-full flex-shrink-0" style={{
                        background: "var(--accent-50)",
                        color: "var(--accent-600)"
                      }}>
                        {currentProject.tech}
                      </span>
                    </div>

                    <p className="text-sm mb-3" style={{ color: "var(--accent-600)" }}>
                      {currentProject.role}
                    </p>

                    <p className="text-sm muted leading-relaxed flex-1">
                      {currentProject.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-1 text-sm muted">
                        <span>👥</span>
                        <span>{currentProject.teamSize}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm muted">
                        <span>⏱️</span>
                        <span>{currentProject.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      background: index === currentProjectIndex
                        ? "var(--accent-600)"
                        : "rgba(248, 138, 79, 0.3)",
                    }}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              {/* View All Link */}
              <a
                href="#portfolio"
                className="mt-4 text-center py-3 px-4 rounded-xl font-semibold transition-all hover:shadow-md"
                style={{
                  background: "rgba(248, 138, 79, 0.1)",
                  color: "var(--accent-600)",
                  border: "1px solid rgba(248, 138, 79, 0.2)",
                }}
              >
                View All Projects →
              </a>
            </motion.div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
