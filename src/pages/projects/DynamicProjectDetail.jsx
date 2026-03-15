import { useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { RevealOnScroll } from '../../components/RevealOnScroll'
import { StaggerReveal } from '../../components/StaggerReveal'
import { ProjectCard } from '../../components/ProjectCard'
import { FiUser, FiClock, FiCode, FiUsers, FiLayers, FiArrowLeft } from 'react-icons/fi'
import { gameProjects, artProjects, otherProjects, featuredProjects } from '../../data/projects'
import { preloadImage } from '../../utils/imagePreloader'

/**
 * Dynamic Project Detail Component
 * Renders project details based on configuration in project data
 * Supports customizable sections and layouts
 */

export const DynamicProjectDetail = ({ project }) => {
  // Preload hero image
  useEffect(() => {
    if (project?.image) {
      preloadImage(project.image).catch(err =>
        console.warn('Hero image preload failed:', err)
      )
    }
  }, [project])

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

  const renderSection = (section) => {
    switch (section.type) {
      case 'hero':
        return renderHeroSection(section.layout || 'default')
      case 'overview':
        return renderOverviewSection()
      case 'features':
        return project.features?.length > 0 ? renderFeaturesSection() : null
      case 'responsibilities':
        return project.responsibilities?.length > 0 ? renderResponsibilitiesSection() : null
      case 'gallery':
        return project.gallery?.length > 0 ? renderGallerySection() : null
      case 'links':
        return project.links?.length > 0 ? renderLinksSection() : null
      default:
        return null
    }
  }

  const renderHeroSection = (layout) => (
    <section className="pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <a
            href="#home"
            className="inline-flex items-center group text-sm"
            style={{ color: "var(--muted)" }}
          >
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>

        {/* Hero Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider"
                  style={{
                    backgroundColor: "var(--brand-scale-4-light)",
                    color: "var(--brand-scale-12-light)"
                  }}
                >
                  {project.type}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  {project.year}
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: "var(--text)" }}
              >
                {project.title}
              </h1>

              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FiUser className="w-5 h-5" style={{ color: "var(--muted)" }} />
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    Role
                  </p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {project.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiUsers className="w-5 h-5" style={{ color: "var(--muted)" }} />
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    Team Size
                  </p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {project.teamSize}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiClock className="w-5 h-5" style={{ color: "var(--muted)" }} />
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    Duration
                  </p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {project.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiCode className="w-5 h-5" style={{ color: "var(--muted)" }} />
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    Tech Stack
                  </p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {project.tech}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const renderOverviewSection = () => (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <div className="space-y-6">
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--text)" }}
            >
              Project Overview
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.fullDescription || project.description}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )

  const renderFeaturesSection = () => (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <div className="space-y-8">
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--text)" }}
            >
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl"
                  style={{ backgroundColor: "var(--bg)" }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--accent-600)" }}
                  >
                    <FiLayers className="w-4 h-4 text-white" />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )

  const renderResponsibilitiesSection = () => (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <div className="space-y-8">
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--text)" }}
            >
              Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.responsibilities.map((responsibility, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl"
                  style={{ backgroundColor: "var(--bg)" }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--accent-600)" }}
                  >
                    <FiUser className="w-4 h-4 text-white" />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )

  const renderGallerySection = () => (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <div className="space-y-8">
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--text)" }}
            >
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )

  const renderLinksSection = () => (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <div className="space-y-8">
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--text)" }}
            >
              Links & Resources
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
                  style={{
                    backgroundColor: "var(--accent-600)",
                    color: "white"
                  }}
                >
                  {link.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar currentPage="portfolio" />

      {/* Render sections dynamically */}
      {project.detailSections?.map((section, index) => (
        <div key={index}>
          {renderSection(section)}
        </div>
      ))}

      <Footer />
    </div>
  )
}