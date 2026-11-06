import { useState, useEffect } from 'react'

export const ProjectSidebar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Find the current section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }))

      const current = sectionElements.find(({ element }) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div
      className='hidden md:block fixed left-0 top-1/2 z-[100] transition-all duration-300 pointer-events-auto'
      style={{
        transform: isVisible
          ? 'translate(0, -50%)'
          : 'translate(-90%, -50%)'
      }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* Sidebar content */}
      <div
        className='rounded-r-2xl py-6 px-4 shadow-xl backdrop-blur-md'
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderLeft: '3px solid var(--accent-600)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
      >
        <nav className='space-y-2'>
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className='group flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/10'
              style={{
                color:
                  activeSection === section.id
                    ? 'var(--accent-600)'
                    : 'var(--muted)'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== section.id) {
                  e.currentTarget.style.color = 'var(--accent-600)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== section.id) {
                  e.currentTarget.style.color = 'var(--muted)'
                }
              }}
            >
              {/* Indicator dot */}
              <div
                className='w-2 h-2 rounded-full transition-all'
                style={{
                  background:
                    activeSection === section.id
                      ? 'var(--accent-600)'
                      : 'var(--brand-scale-6-light)',
                  transform:
                    activeSection === section.id ? 'scale(1.5)' : 'scale(1)'
                }}
              />

              {/* Section label */}
              <span
                className='text-sm font-medium whitespace-nowrap'
                style={{
                  fontWeight: activeSection === section.id ? '600' : '400',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                {section.label}
              </span>

              {/* Section number */}
              <span
                className='ml-auto text-xs opacity-50'
                style={{ minWidth: '1.5rem' }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Menu indicator - visible when not hovered */}
      {!isVisible && (
        <div
          className='absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 px-2 py-3 rounded-r-lg'
          style={{
            background: 'var(--accent-600)',
            transform: 'translateX(100%)'
          }}
        >
          <div className='w-1 h-1 rounded-full bg-white'></div>
          <div className='w-1 h-1 rounded-full bg-white'></div>
          <div className='w-1 h-1 rounded-full bg-white'></div>
        </div>
      )}
    </div>
  )
}
