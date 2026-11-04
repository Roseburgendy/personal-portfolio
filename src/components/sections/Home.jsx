import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FileText } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { RevealOnScroll } from '../RevealOnScroll'
import { ProjectCard } from '../ProjectCard'
import { Footer } from '../Footer'
import profile from '../../assets/profile.webp'
import { gameProjects, artProjects, otherProjects } from '../../data/projects'

const links = [
  {
    label: 'Resume',
    href: 'https://drive.google.com/file/d/1N0HLWbojgZKkyNWon8fZw7-94CVVKubp/view?usp=sharing',
    Icon: FileText
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ye-wang-b385aa314/',
    Icon: FaLinkedinIn
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Roseburgendy',
    Icon: FaGithub
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rose_burgendy/',
    Icon: FaInstagram
  }
]

const education = [
  {
    school: 'Georgia Institute of Technology',
    url: 'https://www.gatech.edu/',
    degree: 'M.S. CSE',
    years: '2026 — 2028'
  },
  {
    school: 'Xiamen University Malaysia',
    url: 'https://www.xmu.edu.my/',
    degree: 'B.E. in Digital Media Technology',
    years: '2022 — 2026'
  }
]

const projects = [...gameProjects, ...artProjects, ...otherProjects]

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    // overflow-clip rather than overflow-hidden: hidden would stop the profile card from sticking
    <main className='min-h-screen pt-32 relative overflow-clip'>
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

      <div
        id='about'
        className='max-w-6xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row lg:items-start gap-12 mb-20 scroll-mt-32'
      >
        {/* Profile card */}
        <aside className='card-glass rounded-3xl p-6 w-full max-w-sm mx-auto lg:mx-0 lg:w-80 lg:flex-shrink-0 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto [scrollbar-width:none]'>
          <img
            src={profile}
            alt='Freya Wang'
            className='w-full aspect-square lg:aspect-auto lg:h-[min(272px,max(140px,calc(100vh-36rem)))] rounded-2xl object-cover object-[50%_20%]'
          />
          <h1
            className='text-2xl font-bold mt-5'
            style={{ color: 'var(--text)' }}
          >
            Freya Wang
          </h1>
          {education.map(({ school, url, degree, years }) => (
            <div
              key={school}
              className='mt-5 pt-5 border-t'
              style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
            >
              <h2
                className='text-base font-bold'
                style={{ color: 'var(--text)' }}
              >
                <a
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline decoration-1 underline-offset-4 hover:text-[var(--accent-600)] transition-colors'
                >
                  {school}
                </a>
              </h2>
              <p className='text-sm mt-1' style={{ color: 'var(--muted)' }}>
                {degree}
              </p>
              <p className='text-sm mt-1' style={{ color: 'var(--muted)' }}>
                {years}
              </p>
            </div>
          ))}
          <div
            className='flex items-center gap-3 mt-5 pt-5 border-t'
            style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
          >
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                title={label}
                className='card-glass w-11 h-11 rounded-full flex items-center justify-center text-[var(--accent-600)] hover:bg-[var(--accent-600)] hover:text-white transition-colors'
              >
                <Icon className='w-[18px] h-[18px]' />
              </a>
            ))}
          </div>
        </aside>

        {/* Main column */}
        <div className='flex-1 min-w-0'>
          {/* About */}
          <section>
            <h2
              className='text-3xl md:text-4xl font-bold pb-4 border-b'
              style={{ color: 'var(--text)', borderColor: 'rgba(0, 0, 0, 0.1)' }}
            >
              About
            </h2>
            <p
              className='text-lg leading-relaxed mt-6 max-w-2xl'
              style={{ color: 'var(--muted)' }}
            >
              I'm a master's student in Computational Science and Engineering
              at Georgia Tech, following my undergraduate studies at Xiamen
              University Malaysia, where I earned a B.E. in Digital Media
              Technology.
            </p>
            <p
              className='text-lg leading-relaxed mt-4 max-w-2xl'
              style={{ color: 'var(--muted)' }}
            >
              My interests are in AI and machine learning systems, agentic AI,
              and data analytics. I'm particularly interested in AI applications
              for social good, agentic AI for interactive experiences, and data
              visualization.
            </p>
          </section>

          {/* Projects */}
          <section id='projects' className='mt-16 scroll-mt-28'>
            <div className='flex items-center gap-6 mb-8'>
              <h2
                className='text-3xl md:text-4xl font-bold'
                style={{ color: 'var(--text)' }}
              >
                Projects
              </h2>
              <div
                className='flex-1 h-px'
                style={{ background: 'rgba(0, 0, 0, 0.1)' }}
              />
            </div>
            <div className='flex flex-col gap-6'>
              {projects.map(project => (
                <RevealOnScroll key={project.slug}>
                  <ProjectCard project={project} />
                </RevealOnScroll>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
