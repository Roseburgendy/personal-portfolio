import { color, motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { RevealOnScroll } from '../RevealOnScroll'
import { StaggerReveal } from '../StaggerReveal'
import { ProjectCard } from '../ProjectCard'
import { Footer } from '../Footer'
import profile from '../../assets/profile.webp'
import {
  featuredProjects,
  gameProjects,
  artProjects,
  otherProjects
} from '../../data/projects'
import Lottie from 'lottie-react'

// Sparkle animation URL from LottieFiles
const sparkleAnimationUrl =
  'https://lottie.host/embed/d5cb3ab1-9cc0-4c1e-aa72-8e8c4f2e4c56/ZuPVjV8lw8.json'

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isContactHovered, setIsContactHovered] = useState(false)
  const [isHeroHovered, setIsHeroHovered] = useState(false)
  const [sparkleAnimation, setSparkleAnimation] = useState(null)
  const [activeTab, setActiveTab] = useState('games')

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Load sparkle animation from URL
  useEffect(() => {
    fetch(sparkleAnimationUrl)
      .then(response => response.json())
      .then(data => setSparkleAnimation(data))
      .catch(error => console.error('Error loading sparkle animation:', error))
  }, [])

  // Listen for custom event from Navbar to change project tab
  useEffect(() => {
    const handleSetProjectTab = event => {
      setActiveTab(event.detail)
    }

    window.addEventListener('setProjectTab', handleSetProjectTab)
    return () =>
      window.removeEventListener('setProjectTab', handleSetProjectTab)
  }, [])

  const nextProject = () => {
    setCurrentProjectIndex(prev =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    )
  }

  const prevProject = () => {
    setCurrentProjectIndex(prev =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    )
  }

  const currentProject = featuredProjects[currentProjectIndex]

  const categories = [
    {
      id: 'games',
      title: 'Games',
      color: 'from-purple-100 to-pink-100',
      projects: gameProjects,
      description: 'Interactive game development projects'
    },
    {
      id: 'art',
      title: 'Art',
      color: 'from-blue-500 to-cyan-500',
      projects: artProjects,
      description: 'Creative artworks and visual design'
    },
    {
      id: 'other',
      title: 'Other',
      color: 'from-green-500 to-emerald-500',
      projects: otherProjects,
      description: 'Web development, tools, and experiments'
    }
  ]

  const activeCategory = categories.find(cat => cat.id === activeTab)

  const scrollToProjects = categoryId => {
    setActiveTab(categoryId)
    const projectsSection = document.getElementById('projects-section')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id='home' className='min-h-screen py-32 relative overflow-hidden'>
      {/* Decorative blobs */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
      <div className='absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
      <div className='absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>

      {/* Interactive Background Ball */}
      <motion.div
        className='pointer-events-none fixed w-96 h-96 rounded-full blur-3xl opacity-30 z-0'
        style={{
          background:
            'radial-gradient(circle, var(--accent) 0%, transparent 100%)'
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      />

      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        <StaggerReveal staggerDelay={150}>
          {/* Main Layout: 2:1 ratio (Info Cards : Project Card) */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {/* Left Section - Info Cards (2/3 width) */}
            <div className='lg:col-span-2 grid grid-cols-4 gap-4'>
              {/* Row 1: Hero Card (3/4) : Profile Photo (1/4) */}
              <div className='stagger-item col-span-4 md:col-span-3 card-glass-gradient rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center min-h-[280px]'>
                <div className='relative z-10'>
                  <div className='mb-4'>
                    <span className='text-6xl'>✨</span>
                  </div>
                  <h2
                    className='text-3xl font-bold mb-4'
                    style={{ color: 'var(--text)' }}
                  >
                    Nice to meet you !
                  </h2>
                  <p className='text-lg' style={{ color: 'var(--accent-600)' }}>
                    Game Programmer with a <strong>Creative</strong> Heart
                  </p>
                </div>
              </div>

              <div className='stagger-item col-span-4 md:col-span-1 card-glass rounded-3xl p-0 hover:shadow-xl transition-shadow overflow-hidden h-[330px] md:min-h-[300px]'>
                <img
                  src={profile}
                  alt='Wang Ye'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Row 2: Bio Card (1/2) : Contact Card (1/2) */}
              <div className='stagger-item col-span-4 md:col-span-2 card-glass rounded-3xl p-8 min-h-[280px]'>
                <div className='relative z-10'>
                  <p className='text-lgtext-sm'>
                    I'm{' '}
                    <strong style={{ color: 'var(--text)' }}>Wang Ye</strong>, a
                    multi-disciplinary passionate learner with a focus on game
                    design and programming. I love blending design and
                    technology to deliver experiences that bring warmth and joy.
                  </p>
                </div>
              </div>

              {/*Contact card*/}
              <div
                className='stagger-item col-span-4 md:col-span-2 card-glass rounded-3xl p-8 flex flex-col justify-center min-h-[280px] relative overflow-hidden'
                onMouseEnter={() => setIsContactHovered(true)}
                onMouseLeave={() => setIsContactHovered(false)}
              >
                <div className='relative z-10'>
                  <h3
                    className='text-3xl font-bold mb-6'
                    style={{ color: 'var(--text)' }}
                  >
                    Contact Me
                  </h3>
                  <div className='space-y-2'>
                    <a
                      href='https://www.instagram.com/rose_burgendy/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='--neutral-scale-8-light hover:text-[var(--accent-600)] transition-colors text-sm block'
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      INSTAGRAM
                    </a>

                    <a
                      href='https://www.linkedin.com/in/ye-wang-b385aa314/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='--neutral-scale-8-light hover:text-[var(--accent-600)] transition-colors text-sm block'
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      LINKEDIN
                    </a>
                    <a
                      href='https://drive.google.com/file/d/1N0HLWbojgZKkyNWon8fZw7-94CVVKubp/view?usp=sharing'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='--neutral-scale-8-light hover:text-[var(--accent-600)] transition-colors text-sm block'
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      VIEW CV
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Featured Projects Card (1/3 width) */}
            <div className='stagger-item col-span-1 card-glass rounded-3xl p-6 flex flex-col min-h-[580px] lg:min-h-0'>
              <div className='flex items-center justify-between mb-4'>
                <h3
                  className='text-2xl font-bold'
                  style={{ color: 'var(--text)' }}
                >
                  Featured Projects
                </h3>
                <div className='flex items-center gap-2'>
                  <button
                    onClick={prevProject}
                    className='w-8 h-8 rounded-full backdrop-blur-sm border transition-all hover:shadow-md flex items-center justify-center'
                    style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'rgba(248, 138, 79, 0.3)',
                      color: 'var(--accent-600)'
                    }}
                    aria-label='Previous project'
                  >
                    ←
                  </button>
                  <button
                    onClick={nextProject}
                    className='w-8 h-8 rounded-full backdrop-blur-sm border transition-all hover:shadow-md flex items-center justify-center'
                    style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'rgba(248, 138, 79, 0.3)',
                      color: 'var(--accent-600)'
                    }}
                    aria-label='Next project'
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Single Project Display */}
              <div className='flex-1 flex flex-col'>
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className='flex-1 flex flex-col'
                >
                  {/* Project Thumbnail Card */}
                  <a
                    href={`#project/${currentProject.slug}`}
                    className='relative w-full h-56 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group mb-4'
                  >
                    <div className='relative w-full h-full bg-gradient-to-br from-orange-100 to-pink-100'>
                      {currentProject.image ? (
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                      ) : (
                        <div className='w-full h-full flex items-center justify-center text-5xl'>
                          {currentProject.tech?.includes('Lua')
                            ? '🎮'
                            : currentProject.tech?.includes('React')
                            ? '💻'
                            : '🎨'}
                        </div>
                      )}
                      {/* Overlay on hover */}
                      <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300'></div>
                    </div>
                  </a>

                  {/* Project Info - Outside Card */}
                  <div className='flex-1 flex flex-col px-2'>
                    <div className='flex items-start justify-between gap-2 mb-2'>
                      <h4
                        className='font-bold text-lg leading-tight'
                        style={{ color: 'var(--text)' }}
                      >
                        {currentProject.title}
                      </h4>
                      <span
                        className='text-xs px-3 py-1 rounded-full flex-shrink-0'
                        style={{
                          background: 'var(--accent-50)',
                          color: 'var(--accent-600)'
                        }}
                      >
                        {currentProject.type}
                      </span>
                    </div>

                    <p
                      className='text-sm mb-3'
                      style={{ color: 'var(--accent-600)' }}
                    >
                      {currentProject.role}
                    </p>

                    <p className='text-sm muted leading-relaxed flex-1'>
                      {currentProject.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Pagination Dots */}
              <div className='flex items-center justify-center gap-2 mt-4'>
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className='w-2 h-2 rounded-full transition-all'
                    style={{
                      background:
                        index === currentProjectIndex
                          ? 'var(--accent-600)'
                          : 'rgba(248, 138, 79, 0.3)'
                    }}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              {/* View All Link */}
              <button
                onClick={() => scrollToProjects('games')}
                className='mt-4 text-center py-3 px-4 rounded-xl font-semibold transition-all hover:shadow-md w-full'
                style={{
                  background: 'rgba(248, 138, 79, 0.1)',
                  color: 'var(--accent-600)',
                  border: '1px solid rgba(248, 138, 79, 0.2)'
                }}
              >
                View All Projects →
              </button>
            </div>
          </div>
        </StaggerReveal>
      </div>

      {/* Projects Section */}
      <div
        id='projects-section'
        className='max-w-7xl mx-auto px-4 relative z-10 mt-20'
      >
        <RevealOnScroll>
          <div className='max-w-7xl mx-auto'>
            {/* Section Title and Tab Switcher - Same Line */}
            <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6'>
              {/* Section Title - Left */}
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                All Projects
              </h2>

              {/* Tab Switcher - Center/Right with Glassmorphism */}
              <div className='flex justify-center md:justify-center md:flex-1'>
                <div
                  className='inline-flex gap-2 rounded-full px-2 py-2'
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.85)',
                    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)'
                  }}
                >
                  {/* Tab buttons */}
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                        activeTab === category.id
                          ? 'bg-[var(--accent-600)] text-white'
                          : 'text-[#201f26] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <span
                        className='text-sm tracking-[1.8px]'
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {category.title.toUpperCase()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeCategory.projects.length > 0 ? (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {activeCategory.projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className='flex'
                      >
                        <ProjectCard project={project} categoryPrefix='' />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className='text-center py-20'>
                    <div className='text-6xl mb-4'>{activeCategory.icon}</div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                      Coming Soon
                    </h3>
                    <p className='text-gray-600'>
                      {activeCategory.title} projects will be added here soon.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </RevealOnScroll>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  )
}
