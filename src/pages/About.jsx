import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SchoolHighlightsCarousel } from '../components/SchoolHighlightsCarousel'
import { HobbiesCarousel } from '../components/HobbiesCarousel'
import profile from '../assets/profile.webp'
import { ArrowUpRight, FileText } from 'lucide-react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { schoolHighlights } from '../data/schoolHighlights'
import { hobbies } from '../data/hobbies'
export const About = () => {
  const skills = [
    { name: 'React', category: 'Frontend' },
    { name: 'Unity', category: 'Game Dev' },
    { name: 'C#', category: 'Programming' },
    { name: 'TypeScript', category: 'Programming' },
    { name: 'TailwindCSS', category: 'Frontend' },
    { name: 'Figma', category: 'Design' },
    { name: 'Git', category: 'Tools' },
    { name: 'Lua', category: 'Game Dev' }
  ]

  const expertise = [
    'UI/UX Design',
    'Web Design',
    'Game Development',
    'Frontend Development',
    'Digital Art',
    'Copywriting'
  ]

  const socialLinks = [
    { name: 'Website', url: 'msync.univer.se', icon: '🌐' },
    { name: 'LinkedIn', url: 'linkedin.com/company/msync', icon: '💼' },
    { name: 'Dribbble', url: 'dribbble.com/msync', icon: '🎨' }
  ]

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

      <section className='pt-32 pb-12 px-4 md:px-8'>
        <div className='max-w-[1000px] mx-auto'>
          {/* Bento Box Layout */}
          <div className='space-y-4'>
            {/* Row 1: Profile Card (2/5) + Introduction & Get In Touch Column (3/5) */}
            <RevealOnScroll>
              <div className='grid grid-cols-1 lg:grid-cols-5 gap-6'>
                {/* Profile Card - 2/5 width */}
                <div className='lg:col-span-2 rounded-3xl overflow-hidden relative h-[500px] lg:h-auto'>
                  {/* Profile Image - fills entire container */}
                  <img
                    src={profile}
                    alt='Wang Ye'
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
                      Wang Ye
                    </h1>

                    {/* Subtitle */}
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      Game Designer & Developer
                    </p>
                  </div>
                </div>

                {/* Right Column - Introduction & Get In Touch - 3/5 width */}
                <div className='lg:col-span-3 flex flex-col gap-4'>
                  {/* Introduction Card */}
                  <div className='card-glass rounded-3xl p-6 md:p-8'>
                    <h2
                      className='text-2xl md:text-3xl font-bold mb-4'
                      style={{ color: 'var(--text)' }}
                    >
                      Introduction
                    </h2>
                    <h3
                      className='text-xl font-semibold mb-4'
                      style={{ color: 'var(--accent-600)' }}
                    >
                      Services for all design and IT needs
                    </h3>
                    <p
                      className='text-sm leading-relaxed'
                      style={{ color: 'var(--muted)' }}
                    >
                      I prepare various kinds of design and IT needs such as
                      UI/UX design, web design, creating a website according to
                      your needs, hosting and cloud, custom domain, company
                      profile in PDF format or website and also copywriting.
                    </p>
                  </div>

                  {/* Get In Touch Cards */}
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {/* View CV Card */}
                    <a
                      href='#'
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
                        <h3 className='text-lg  font-semibold text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white'>
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

                        <span className='text-lg font-semibold text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white'>
                          Resume
                        </span>
                      </div>
                    </a>
                    {/* Instagram Card */}
                    <a
                      href='https://instagram.com'
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
                        <h3 className='text-lg  font-semibold text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white'>
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

                        <span className='text-lg font-semibold text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white'>
                          Instagram
                        </span>
                      </div>
                    </a>

                    {/* LinkedIn Card */}
                    <a
                      href='https://linkedin.com'
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
                        <h3 className='text-lg  font-semibold text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white'>
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

                        <span className='text-lg font-semibold text-[var(--brand-scale-12-light)] transition-colors group-hover:text-white'>
                          LinkedIn
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Row 2: Education & Experience */}
            <RevealOnScroll>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* Education Card */}
                <div className='card-glass rounded-3xl p-8'>
                  <div className='flex items-center gap-3 mb-6'>
                    <h3
                      className='text-2xl font-bold'
                      style={{ color: 'var(--text)' }}
                    >
                      Education
                    </h3>
                  </div>
                  <div className='space-y-4'>
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
                  </div>
                </div>

                {/* School Highlights Carousel */}
                <SchoolHighlightsCarousel highlights={schoolHighlights} />
              </div>
            </RevealOnScroll>

            {/* Row 3: Hobbies Section - Full Width */}
            <RevealOnScroll>
              <div className='card-glass rounded-3xl p-8 overflow-hidden'>
                <h3
                  className='text-2xl font-bold mb-2'
                  style={{ color: 'var(--text)' }}
                >
                  My Hobbies
                </h3>
                <p
                  className='text-sm mb-4'
                  style={{ color: 'var(--muted)' }}
                >
                  Things I love to do in my free time
                </p>
                <HobbiesCarousel hobbies={hobbies} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
