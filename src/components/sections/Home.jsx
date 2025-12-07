import { color, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import profile from "../../assets/profile.jpg";
import { featuredProjects } from "../../data/projects";
import Lottie from "lottie-react";
import { gsap } from "gsap";


// Sparkle animation URL from LottieFiles
const sparkleAnimationUrl = "https://lottie.host/embed/d5cb3ab1-9cc0-4c1e-aa72-8e8c4f2e4c56/ZuPVjV8lw8.json";

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [sparkleAnimation, setSparkleAnimation] = useState(null);

  // Refs for GSAP page transition
  const pageRef = useRef(null);
  const heroCardRef = useRef(null);
  const profileCardRef = useRef(null);
  const aboutCardRef = useRef(null);
  const contactCardRef = useRef(null);
  const projectCardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Load sparkle animation from URL
  useEffect(() => {
    fetch(sparkleAnimationUrl)
      .then(response => response.json())
      .then(data => setSparkleAnimation(data))
      .catch(error => console.error('Error loading sparkle animation:', error));
  }, []);

  // GSAP Page Transition Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for page transition
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Fade in the entire page
      tl.from(pageRef.current, {
        opacity: 0,
        duration: 0.5,
      })
      // Animate cards with stagger
      .from([heroCardRef.current, profileCardRef.current], {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
      }, "-=0.3")
      .from([contactCardRef.current], {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
      }, "-=0.6")
      .from(projectCardRef.current, {
        x: 100,
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
      }, "-=0.7");
    }, pageRef);

    return () => ctx.revert();
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
    <section
      ref={pageRef}
      id="home"
      className="min-h-screen py-32 relative overflow-hidden" 
    >
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Interactive Background Ball */}
      <motion.div
        className="pointer-events-none fixed w-96 h-96 rounded-full blur-3xl opacity-30 z-0"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 100%)",
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
                ref={heroCardRef}
                className="col-span-4 md:col-span-3 card-glass-gradient rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center min-h-[280px]"
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
                ref={profileCardRef}
                className="col-span-4 md:col-span-1 card-glass rounded-3xl p-0 hover:shadow-xl transition-shadow overflow-hidden h-[330px] md:min-h-[300px]"
              >
                <img
                  src={profile}
                  alt="Wang Ye"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Row 2: Bio Card (1/2) : Contact Card (1/2) */}
              <motion.div
                ref={aboutCardRef}
                className="col-span-4 md:col-span-2 card-glass rounded-3xl p-8 min-h-[280px]"
              >
                <div className="relative z-10">
                <p className="text-lgtext-sm">
                  I'm <strong style={{ color: "var(--text)" }}>Wang Ye</strong>, a multi-disciplinary passionate learner with a focus on game design and programming. I love blending design and technology to deliver experiences that bring warmth and joy.
                </p>
                </div>

              </motion.div>

              {/*Contact card*/}
              <motion.div
                ref={contactCardRef}
                className="col-span-4 md:col-span-2 card-glass rounded-3xl p-8 flex flex-col justify-center min-h-[280px] relative overflow-hidden"
                onMouseEnter={() => setIsContactHovered(true)}
                onMouseLeave={() => setIsContactHovered(false)}
              >

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
              ref={projectCardRef}
              className="col-span-1 card-glass rounded-3xl p-6 flex flex-col min-h-[580px] lg:min-h-0"
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
