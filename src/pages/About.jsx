import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { StaggerReveal } from '../components/StaggerReveal'
import { SchoolHighlightsCarousel } from '../components/SchoolHighlightsCarousel'
import { HobbiesCarousel } from '../components/HobbiesCarousel'
import { MovieRotations } from '../components/MovieRotations'
import { GamesRotations } from '../components/GamesRotations'
import profile from '../assets/profile.webp'
import { ArrowUpRight, FileText } from 'lucide-react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { schoolHighlights } from '../data/schoolHighlights'
import { hobbiesImages } from '../data/hobbies'
import { movies } from '../data/movies'
import { games } from '../data/games'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  return (
    <div
      className='min-h-screen'
      style={{
        background:
          'linear-gradient(135deg, var(--bg) 0%, var(--brand-scale-1-light) 50%, var(--brand-scale-3-light) 100%)'
      }}
    >
      <Navbar currentPage='about' />
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

      <section className='pt-32 pb-12 px-4 md:px-8'>
        <div className='max-w-[1000px] mx-auto'>
          {/* Bento Box Layout */}
          <div className='space-y-4'>
            {/* Row 1: Profile Card (2/5) + Introduction & Get In Touch Column (3/5) */}
            <StaggerReveal staggerDelay={150}>
              <div className='grid grid-cols-1 lg:grid-cols-5 gap-6'>
                {/* Profile Card - 2/5 width */}
                <div className='stagger-item lg:col-span-2 rounded-3xl overflow-hidden relative h-[500px] lg:h-auto'>
                  {/* Profile Image - fills entire container */}
                  <img
                    src={profile}
                    alt='Wang Ye(王晔)'
                    className='w-full h-full object-cover absolute inset-0'
                  />

                  {/* Glassmorphism Name Overlay */}
                  <div
                    className='absolute bottom-0 left-0 right-0 p-6 text-center'
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.85)'
                    }}
                  >
                    {/* Name */}
                    <h1
                      className='text-2xl md:text-3xl font-bold mb-2'
                      style={{ color: 'var(--text)' }}
                    >
                      Wang Ye(王晔)
                    </h1>
                  </div>
                </div>

                {/* Right Column - Introduction & Get In Touch - 3/5 width */}
                <div className='stagger-item lg:col-span-3 flex flex-col gap-4'>
                  {/* Introduction Card */}
                  <div className='card-glass rounded-3xl p-6 md:p-8'>
                    <h2
                      className='text-2xl md:text-3xl font-bold mb-4'
                      style={{ color: 'var(--text)' }}
                    >
                      Hey again!
                    </h2>
                    <h3
                      className='text-xl font-semibold mb-4'
                      style={{ color: 'var(--accent-600)' }}
                    >
                      I am Rose Wang,
                    </h3>
                    <p
                      className='text-sm leading-relaxed'
                      style={{ color: 'var(--muted)' }}
                    >
                      a fourth-year Digital Media Technology student at Xiamen
                      University Malaysia. I believe meaningful interactive
                      experiences require both art and technology. I'm
                      passionate about how immersive experiences can create
                      genuine connections between people and applications and
                      contribute to social good, and I seek to continue building
                      meaningful experiences that actually matter to society.
                    </p>
                  </div>

                  {/* Get In Touch Cards */}
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {/* View CV Card */}
                    <a
                      href='https://drive.google.com/file/d/1N0HLWbojgZKkyNWon8fZw7-94CVVKubp/view?usp=sharing'
                      className='group relative rounded-3xl p-7 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[260px]'
                      style={{ backgroundColor: 'var(--brand-scale-3-light)' }}
                      onMouseEnter={e =>
                        (e.currentTarget.style.backgroundColor = '#5B7FFF')
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.style.backgroundColor =
                          'var(--brand-scale-3-light)')
                      }
                    >
                      {/* Title + Arrow */}
                      <div className='flex items-start justify-between'>
                        <h3 className='text-lg  font-semibold text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white' style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          View
                        </h3>

                        <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all group-hover:bg-white/30'>
                          <ArrowUpRight
                            className='w-5 h-5 text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white'
                            strokeWidth={2.2}
                          />
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className='flex items-center gap-3 mt-4'>
                        <div className='w-10 h-10 rounded-xl flex items-center justify-center'>
                          <FileText className='w-5 h-5 text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white' />
                        </div>

                        <span className='text-lg font-semibold text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white' style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          Resume
                        </span>
                      </div>
                    </a>
                    {/* Instagram Card */}
                    <a
                      href='https://www.instagram.com/rose_burgendy/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group relative rounded-3xl p-7 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[260px]'
                      style={{ backgroundColor: 'var(--brand-scale-3-light)' }}
                      onMouseEnter={e =>
                        (e.currentTarget.style.background =
                          'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)')
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.style.background =
                          'var(--brand-scale-3-light)')
                      }
                    >
                      {/* Title + Arrow */}
                      <div className='flex items-start justify-between'>
                        <h3 className='text-lg  font-semibold text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white' style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          Follow
                        </h3>

                        <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all group-hover:bg-white/30'>
                          <ArrowUpRight
                            className='w-5 h-5 text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white'
                            strokeWidth={2.2}
                          />
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className='flex items-center gap-3 mt-4'>
                        <div className='w-10 h-10 rounded-xl flex items-center justify-center'>
                          <FaInstagram className='w-5 h-5 text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white' />
                        </div>

                        <span className='text-lg font-semibold text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white' style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          Instagram
                        </span>
                      </div>
                    </a>

                    {/* LinkedIn Card */}
                    <a
                      href='https://www.linkedin.com/in/ye-wang-b385aa314/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group relative rounded-3xl p-7 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[260px]'
                      style={{ backgroundColor: 'var(--brand-scale-3-light)' }}
                      onMouseEnter={e =>
                        (e.currentTarget.style.backgroundColor = '#0A66C2')
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.style.backgroundColor =
                          'var(--brand-scale-3-light)')
                      }
                    >
                      {/* Title + Arrow */}
                      <div className='flex items-start justify-between'>
                        <h3 className='text-lg  font-semibold text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white' style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          Connect
                        </h3>

                        <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all group-hover:bg-white/30'>
                          <ArrowUpRight
                            className='w-5 h-5 text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white'
                            strokeWidth={2.2}
                          />
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className='flex items-center gap-3 mt-4'>
                        <div className='w-10 h-10 rounded-xl flex items-center justify-center'>
                          <FaLinkedin className='w-5 h-5 text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white' />
                        </div>

                        <span className='text-lg font-semibold text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white' style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          LinkedIn
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </StaggerReveal>

            {/* Row 2: Education & Experience */}
            <StaggerReveal staggerDelay={150}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* Education Card */}
                <div className='stagger-item card-glass rounded-3xl p-8'>
                  <div className='flex items-center gap-3 mb-6'>
                    <h3
                      className='text-2xl font-bold'
                      style={{ color: 'var(--text)' }}
                    >
                      Education
                    </h3>
                  </div>
                  <div className='space-y-2'>
                    {/* Text on TOP */}
                    <div>
                      <h4
                        className='font-bold text-lg'
                        style={{ color: 'var(--text)' }}
                      >
                        Bachelor of Engineering in Digital Media Technology
                      </h4>

                      <p style={{ color: 'var(--muted)' }}>
                        Xiamen University Malaysia
                      </p>

                      <p
                        className='text-sm mt-1'
                        style={{ color: 'var(--accent-600)' }}
                      >
                        Expected 2026.7
                      </p>

                      <p
                        className='text-sm mt-1'
                        style={{ color: 'var(--accent-600)' }}
                      >
                        CGPA: 3.88/4.0
                      </p>
                    </div>

                    {/* Logo DOWN below */}
                    <a href='https://www.xmu.edu.my/'>
                      <img
                        src='/personal-portfolio/media/xmumlogo.png'
                        alt='XMUM'
                        className='w-100 h-30 object-contain opacity-90'
                      />
                    </a>
                  </div>
                </div>

                {/* School Highlights Carousel */}
                <div className='stagger-item'>
                  <SchoolHighlightsCarousel highlights={schoolHighlights} />
                </div>
              </div>
            </StaggerReveal>

            {/* Row 3: Movie & Game Rotations */}
            <RevealOnScroll>
              <h2
                className='text-2xl font-bold text-center mb-6'
                style={{ color: 'var(--text)' }}
              >
                Outside work.. I am a Big Game & Movie lover
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {/* Game Rotations - 1 column (3:4 ratio) */}
                <div className='card-glass rounded-3xl overflow-hidden aspect-[3/5]'>
                  <GamesRotations games={games} />
                </div>
                {/* Movie Rotations - 3 columns (9:4 ratio to match height) */}
                <div className='card-glass rounded-3xl overflow-hidden aspect-[3/4] md:aspect-[9/5] md:col-span-3'>
                  <MovieRotations movies={movies} />
                </div>
              </div>
            </RevealOnScroll>

            {/* Row 4: Hobbies Section - Full Width */}
            <RevealOnScroll>
              <h2
                className='text-2xl font-bold text-center mb-6'
                style={{ color: 'var(--text)' }}
              >
                And other side quests...
              </h2>
              <div className='card-glass rounded-3xl overflow-hidden'>
                <HobbiesCarousel images={hobbiesImages} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
