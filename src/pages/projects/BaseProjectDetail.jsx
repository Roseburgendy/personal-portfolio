import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { RevealOnScroll } from '../../components/RevealOnScroll'
import { StaggerReveal } from '../../components/StaggerReveal'
import { ProjectCard } from '../../components/ProjectCard'
import { FiUser, FiClock, FiCode, FiUsers, FiLayers } from 'react-icons/fi'
import { gameProjects, artProjects, otherProjects } from '../../data/projects'

/**
 * Base Project Detail Component
 * This component provides a flexible base for creating customized project detail pages
 * while maintaining a consistent hero card structure.
 */

export const BaseProjectDetail = ({
  project,
  customSections = null,
  heroLayout = 'default'
}) => {
  if (!project) {
    return (
      <div className='min-h-screen' style={{ background: 'var(--bg)' }}>
        <Navbar currentPage='portfolio' />
        <section className='section section-pad pt-32'>
          <div className='max-w-7xl mx-auto px-4 text-center'>
            <h1
              className='text-4xl font-bold mb-4'
              style={{ color: 'var(--text)' }}
            >
              Project Not Found
            </h1>
            <a href='#home' className='btn btn-primary'>
              Back to Home
            </a>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
  const techItems = Array.isArray(project.tech)
    ? project.tech
    : project.tech
        ?.split(',')
        .map(item => item.trim())
        .filter(Boolean)

  const roleItems = Array.isArray(project.role)
    ? project.role
    : project.role
        ?.split(',')
        .map(item => item.trim())
        .filter(Boolean)

  // Get all projects and find the next 3 projects
  const allProjects = [...gameProjects, ...artProjects, ...otherProjects]
  const currentIndex = allProjects.findIndex(p => p.slug === project.slug)

  // Get next 3 projects (excluding current project)
  const nextProjects = []
  for (let i = 1; i <= 3; i++) {
    const nextIndex = (currentIndex + i) % allProjects.length
    nextProjects.push(allProjects[nextIndex])
  }

  return (
    <div className='min-h-screen' style={{ background: 'var(--bg)' }}>
      <Navbar currentPage='portfolio' />

      <section className='pt-24 pb-12 px-4 md:px-8'>
        <div className='max-w-[1200px] mx-auto'>
          {/* Back Button */}
          <div className='mb-6'>
            <a
              href='#home'
              className='inline-flex items-center group text-sm'
              style={{ color: 'var(--muted)' }}
            >
              <svg
                className='w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 19l-7-7m0 0l7-7m-7 7h18'
                />
              </svg>
              Back to Home
            </a>
          </div>

          {/* Bento Box Layout */}
          <div className='space-y-4'>
            {/* Hero Section - Custom Bento Grid */}
            <StaggerReveal staggerDelay={150}>
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[600px]'>
                {/* LEFT COLUMN – HERO IMAGE + TECH */}
                <div className='stagger-item lg:col-span-5 flex flex-col gap-4'>
                  {/* Hero Image */}
                  <div className='relative card-glass rounded-3xl overflow-hidden h-[400px] lg:h-[420px]'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover object-left'
                    />

                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent' />

                    <div className='absolute bottom-8 left-6 right-6'>
                      <div
                        className='inline-flex items-center rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-semibold mb-2'
                        style={{
                          color: 'var(--brand-scale-12-light)',
                        }}
                      >
                        {project.type || 'Game Project'}
                      </div>
                      <h1 className='text-xl md:text-2xl font-bold text-white drop-shadow'>
                        {project.title}
                      </h1>
                    </div>
                  </div>

                  {/* Technology Card */}
                  <div className='card-glass rounded-3xl p-6 md:p-7 flex flex-col lg:flex-1'>
                    <div className='flex items-center gap-3 mb-4'>
                      <div
                        className='w-12 h-12 rounded-2xl flex items-center justify-center'
                        style={{ background: 'var(--accent-100)' }}
                      >
                        <FiCode
                          className='w-7 h-7'
                          style={{ color: 'var(--accent-600)' }}
                        />
                      </div>
                      <div>
                        <h3
                          className='font-semibold text-sm uppercase tracking-wide'
                          style={{ color: 'var(--muted)' }}
                        >
                          Technology & Skills
                        </h3>
                        <p
                          className='text-xs'
                          style={{ color: 'var(--muted)' }}
                        >
                          Core tools used in this project
                        </p>
                      </div>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                      {techItems?.map(tech => (
                        <h3
                          key={tech}
                          className='inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold'
                          style={{
                            backgroundColor: 'var(--brand-scale-3-light)',
                            color: 'var(--brand-scale-12-light)',
                            border: '1px solid var(--brand-scale-6-light)'
                          }}
                        >
                          {tech}
                        </h3>
                      ))}
                    </div>
                  </div>
                </div>

                {/* MIDDLE COLUMN – ROLE + SNAPSHOT */}
                <div className='stagger-item lg:col-span-3 flex flex-col gap-4'>
                  {/* Role Card */}
                  <div className='card-glass rounded-3xl p-6 md:p-7 flex flex-col justify-between h-[220px]'>
                    <div className='flex items-center gap-3 mb-4'>
                      <div
                        className='w-12 h-12 rounded-2xl flex items-center justify-center'
                        style={{ background: 'var(--accent-100)' }}
                      >
                        <FiUser
                          className='w-7 h-7'
                          style={{ color: 'var(--accent-600)' }}
                        />
                      </div>
                      <div>
                        <h3
                          className='font-semibold text-sm uppercase tracking-wide'
                          style={{ color: 'var(--muted)' }}
                        >
                          My Role
                        </h3>
                      </div>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                      {roleItems?.map(role => (
                        <h3
                          key={role}
                          className='inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold'
                          style={{
                            backgroundColor: 'var(--brand-scale-3-light)',
                            color: 'var(--brand-scale-12-light)',
                            border: '1px solid var(--brand-scale-6-light)'
                          }}
                        >
                          {role}
                        </h3>
                      ))}
                    </div>
                  </div>

                  {/* Project Snapshot */}
                  <div className='card-glass rounded-3xl p-6 md:p-7 flex flex-col gap-10 h-full'>
                    <h3
                      className='font-semibold text-sm uppercase tracking-wide'
                      style={{ color: 'var(--muted)' }}
                    >
                      Project Snapshot
                    </h3>

                    <div className='space-y-8 text-base'>
                      {/* Type */}
                      <div className='flex items-start gap-3'>
                        <div
                          className='w-10 h-10 rounded-2xl flex items-center justify-center'
                          style={{ background: 'var(--accent-100)' }}
                        >
                          <FiLayers
                            className='w-6 h-6'
                            style={{ color: 'var(--accent-600)' }}
                          />
                        </div>
                        <div>
                          <p
                            className='text-xs uppercase tracking-wide'
                            style={{ color: 'var(--muted)' }}
                          >
                            Type
                          </p>
                          <h3
                            className='font-semibold text-lg'
                            style={{ color: 'var(--text)' }}
                          >
                            {project.type}
                          </h3>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className='flex items-start gap-3'>
                        <div
                          className='w-10 h-10 rounded-2xl flex items-center justify-center'
                          style={{ background: 'var(--accent-100)' }}
                        >
                          <FiClock
                            className='w-6 h-6'
                            style={{ color: 'var(--accent-600)' }}
                          />
                        </div>
                        <div>
                          <p
                            className='text-xs uppercase tracking-wide'
                            style={{ color: 'var(--muted)' }}
                          >
                            Duration
                          </p>
                          <h3
                            className='font-semibold text-lg'
                            style={{ color: 'var(--text)' }}
                          >
                            {project.duration}
                          </h3>
                        </div>
                      </div>

                      {/* Team */}
                      <div className='flex items-start gap-3'>
                        <div
                          className='w-10 h-10 rounded-2xl flex items-center justify-center'
                          style={{ background: 'var(--accent-100)' }}
                        >
                          <FiUsers
                            className='w-6 h-6'
                            style={{ color: 'var(--accent-600)' }}
                          />
                        </div>
                        <div>
                          <p
                            className='text-xs uppercase tracking-wide'
                            style={{ color: 'var(--muted)' }}
                          >
                            Team Size
                          </p>
                          <h3
                            className='font-semibold text-lg'
                            style={{ color: 'var(--text)' }}
                          >
                            {project.teamSize} people
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN – FULL HEIGHT OVERVIEW */}
                <div className='stagger-item lg:col-span-4 flex flex-col gap-4'>
                  <div className='card-glass rounded-3xl p-7 md:p-8 flex flex-col justify-between h-full'>
                    <div>
                      <h2
                        className='text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] mb-2'
                        style={{ color: 'var(--accent-600)' }}
                      >
                        Overview
                      </h2>

                      <h3
                        className='text-xl md:text-2xl font-bold mb-3 leading-snug'
                        style={{ color: 'var(--text)' }}
                      >
                        {project.subtitle || project.title}
                      </h3>

                      <p
                        className='text-sm md:text-base leading-relaxed'
                        style={{ color: 'var(--muted)' }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {/* Hero Image */}
                  <div className='card-glass rounded-3xl p-4 bg-[#f2d7d7]/60 '>
                    <img
                      src={project.image2}
                      alt={project.title}
                      className='w-full h-full object-cover rounded-2xl'
                    />
                  </div>
                </div>
              </div>
            </StaggerReveal>

            {/* Custom Sections OR Default Sections */}
            {customSections ? (
              customSections
            ) : (
              <>
                {/* Row 2: Overview + Features */}
                {project.fullDescription && (
                  <RevealOnScroll>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {/* Overview Card */}
                      <div className='card-glass rounded-3xl p-6 md:p-8'>
                        <h2
                          className='text-xl md:text-2xl font-bold mb-4'
                          style={{ color: 'var(--text)' }}
                        >
                          The Opportunity
                        </h2>
                        <p
                          className='text-sm leading-relaxed'
                          style={{ color: 'var(--muted)' }}
                        >
                          {project.fullDescription}
                        </p>
                      </div>

                      {/* Features Card */}
                      {project.features && project.features.length > 0 && (
                        <div className='card-glass rounded-3xl p-6 md:p-8'>
                          <h2
                            className='text-xl md:text-2xl font-bold mb-4'
                            style={{ color: 'var(--text)' }}
                          >
                            Key Features
                          </h2>
                          <ul
                            className='space-y-2 text-sm'
                            style={{ color: 'var(--muted)' }}
                          >
                            {project.features.map((feature, index) => (
                              <li key={index} className='flex items-start'>
                                <span
                                  className='mr-2'
                                  style={{ color: 'var(--accent-600)' }}
                                >
                                  •
                                </span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </RevealOnScroll>
                )}

                {/* Row 3: Responsibilities */}
                {project.responsibilities &&
                  project.responsibilities.length > 0 && (
                    <RevealOnScroll>
                      <div className='card-glass rounded-3xl p-6 md:p-8'>
                        <h2
                          className='text-xl md:text-2xl font-bold mb-4'
                          style={{ color: 'var(--text)' }}
                        >
                          My Contributions
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2'>
                          {project.responsibilities.map(
                            (responsibility, index) => (
                              <div
                                key={index}
                                className='flex items-start text-sm'
                              >
                                <span
                                  className='mr-2'
                                  style={{ color: 'var(--accent-600)' }}
                                >
                                  •
                                </span>
                                <span style={{ color: 'var(--muted)' }}>
                                  {responsibility}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </RevealOnScroll>
                  )}

                {/* Row 4: Gallery (if available) */}
                {project.gallery && project.gallery.length > 0 && (
                  <RevealOnScroll>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                      {project.gallery.map((image, index) => (
                        <div
                          key={index}
                          className='card-glass rounded-3xl overflow-hidden aspect-video'
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className='w-full h-full object-cover'
                          />
                        </div>
                      ))}
                    </div>
                  </RevealOnScroll>
                )}

                {/* Row 5: Links */}
                {project.links && project.links.length > 0 && (
                  <RevealOnScroll>
                    <div className='flex flex-wrap gap-3'>
                      {project.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='px-6 py-3 rounded-xl font-semibold transition-all text-sm'
                          style={{
                            background: 'var(--accent)',
                            color: 'white'
                          }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </RevealOnScroll>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Next Projects Section */}
      {nextProjects && nextProjects.length > 0 && (
        <section className='py-16 px-4 md:px-8' style={{ background: 'var(--bg)' }}>
          <div className='max-w-[1200px] mx-auto'>
            <RevealOnScroll>
              <div className='text-center mb-12'>
                <h2
                  className='text-3xl md:text-4xl font-bold mb-4'
                  style={{ color: 'var(--text)' }}
                >
                  More Projects
                </h2>
                <p
                  className='text-base md:text-lg'
                  style={{ color: 'var(--muted)' }}
                >
                  Continue exploring my work
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal staggerDelay={150}>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
                {nextProjects.map(proj => (
                  <div key={proj.slug} className='stagger-item'>
                    <ProjectCard project={proj} />
                  </div>
                ))}
              </div>
            </StaggerReveal>

            <RevealOnScroll>
              <div className='text-center mt-12'>
                <a
                  href='#home'
                  className='inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105'
                  style={{
                    background: 'var(--accent-600)',
                    color: 'white'
                  }}
                >
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 19l-7-7m0 0l7-7m-7 7h18'
                    />
                  </svg>
                  Back to Home
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
