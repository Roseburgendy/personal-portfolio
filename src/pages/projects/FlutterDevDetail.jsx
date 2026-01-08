import { BaseProjectDetail } from './BaseProjectDetail'
import { RevealOnScroll } from '../../components/RevealOnScroll'
import { StaggerReveal } from '../../components/StaggerReveal'
import { otherProjects } from '../../data/projects'

export const FlutterDevDetail = () => {
  const project = otherProjects.find(p => p.slug === 'flutter-dev')

  // Style definitions for consistency
  const styles = {
    sectionTitle: {
      className: 'text-xl md:text-2xl font-bold mb-4',
      style: { color: 'var(--brand-scale-12-light)' }
    },
    sectionSubtitle: {
      className: 'text-lg mb-12',
      style: { color: 'var(--muted)' }
    },
    subsectionTitle: {
      className: 'text-2xl md:text-3xl font-bold mb-6 mt-16',
      style: { color: 'var(--brand-scale-12-light)' }
    },
    bodyText: {
      className: 'text-lg leading-relaxed',
      style: { color: 'var(--muted)' }
    }
  }

  const customSections = (
    <div className='mt-12'>
      {/* Project Overview Section */}
      <StaggerReveal>
        <div className='grid md:grid-cols-2 gap-6 mt-20 items-center'>
          {/*Left Cover*/}
          <div
            className='relative rounded-3xl p-6 flex items-center justify-center min-h-[400px]'
            style={{
              background: 'var(--brand-scale-3-light)'
            }}
          >
            <div className='text-center'>
              <div className='text-6xl mb-4'>📱</div>
              <p
                className='text-sm'
                style={{ color: 'var(--muted)' }}
              >
                App Screenshot Placeholder
              </p>
            </div>
          </div>
          {/*Right Content*/}
          <div>
            <div className='p-6 items-center'>
              <h3
                className={styles.sectionTitle.className}
                style={styles.sectionTitle.style}
              >
                Project Overview
              </h3>
              <p
                className={styles.sectionSubtitle.className}
                style={styles.sectionSubtitle.style}
              >
                An educational learning platform designed to revolutionize how students
                engage with learning content through mobile technology.
              </p>
              <p
                className='text-lg mb-6'
                style={{ color: 'var(--muted)' }}
              >
                This Flutter application was developed as part of a collaborative team
                effort to create a comprehensive educational platform. The app features
                a modern, intuitive interface that makes learning accessible and engaging
                for students of all levels.
              </p>
              <p
                className='text-lg mb-6'
                style={{ color: 'var(--muted)' }}
              >
                Built with Flutter and Firebase, the application delivers a seamless
                cross-platform experience on both iOS and Android devices, ensuring
                students can learn anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </StaggerReveal>

      {/* Key Features Section */}
      <RevealOnScroll>
        <div className='mt-32'>
          <h2
            className='text-2xl md:text-4xl font-bold mb-16 text-center'
            style={{ color: 'var(--accent-600)' }}
          >
            KEY FEATURES
          </h2>

          {/* Feature Cards Grid */}
          <StaggerReveal staggerDelay={150}>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
              {/* Feature 1: Authentication */}
              <div className='stagger-item card-glass rounded-3xl overflow-hidden'>
                <div className='p-6'>
                  <div
                    className='w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4'
                    style={{
                      background: 'var(--accent-600)',
                      color: 'white'
                    }}
                  >
                    🔐
                  </div>
                  <h3
                    className='text-xl font-bold mb-3'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Secure Authentication
                  </h3>
                  <p
                    className={styles.bodyText.className}
                    style={styles.bodyText.style}
                  >
                    Implemented robust user authentication system with email login
                    and social media integration, ensuring secure access and
                    personalized user experiences.
                  </p>
                </div>
              </div>

              {/* Feature 2: Real-time Data */}
              <div className='stagger-item card-glass rounded-3xl overflow-hidden'>
                <div className='p-6'>
                  <div
                    className='w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4'
                    style={{
                      background: 'var(--accent-600)',
                      color: 'white'
                    }}
                  >
                    📊
                  </div>
                  <h3
                    className='text-xl font-bold mb-3'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Real-time Progress Tracking
                  </h3>
                  <p
                    className={styles.bodyText.className}
                    style={styles.bodyText.style}
                  >
                    Firebase-powered real-time data synchronization allows students
                    to track their learning progress instantly across all devices,
                    with detailed analytics and insights.
                  </p>
                </div>
              </div>

              {/* Feature 3: Custom UI */}
              <div className='stagger-item card-glass rounded-3xl overflow-hidden'>
                <div className='p-6'>
                  <div
                    className='w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4'
                    style={{
                      background: 'var(--accent-600)',
                      color: 'white'
                    }}
                  >
                    ✨
                  </div>
                  <h3
                    className='text-xl font-bold mb-3'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Beautiful UI & Animations
                  </h3>
                  <p
                    className={styles.bodyText.className}
                    style={styles.bodyText.style}
                  >
                    Custom-designed UI components with smooth transitions and
                    animations create an engaging and delightful user experience
                    that keeps students motivated.
                  </p>
                </div>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </RevealOnScroll>

      {/* Development Process Section */}
      <RevealOnScroll>
        <div className='mt-32'>
          <h2
            className='text-2xl md:text-4xl font-bold mb-16 text-center'
            style={{ color: 'var(--accent-600)' }}
          >
            DEVELOPMENT PROCESS
          </h2>

          {/* Process Timeline */}
          <StaggerReveal staggerDelay={150}>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-8'>
              {/* Phase 1: Planning & Design */}
              <div className='stagger-item card-glass rounded-3xl overflow-hidden flex flex-col'>
                <div className='p-6'>
                  <div
                    className='w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4'
                    style={{
                      background: 'var(--accent-600)',
                      color: 'white'
                    }}
                  >
                    1
                  </div>
                  <h3
                    className='text-xl font-bold mb-3'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Planning & Design
                  </h3>
                  <ul className='space-y-3 mt-4'>
                    <li className='flex items-start'>
                      <span
                        className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'var(--accent-600)' }}
                      ></span>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--muted)' }}
                      >
                        User research and requirements gathering
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span
                        className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'var(--accent-600)' }}
                      ></span>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--muted)' }}
                      >
                        Wireframing and UI/UX design
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span
                        className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'var(--accent-600)' }}
                      ></span>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--muted)' }}
                      >
                        Technical architecture planning
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 2: Core Development */}
              <div className='stagger-item card-glass rounded-3xl overflow-hidden flex flex-col'>
                <div className='p-6'>
                  <div
                    className='w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4'
                    style={{
                      background: 'var(--accent-600)',
                      color: 'white'
                    }}
                  >
                    2
                  </div>
                  <h3
                    className='text-xl font-bold mb-3'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Core Development
                  </h3>
                  <ul className='space-y-3 mt-4'>
                    <li className='flex items-start'>
                      <span
                        className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'var(--accent-600)' }}
                      ></span>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--muted)' }}
                      >
                        Built responsive UI with Flutter widgets
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span
                        className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'var(--accent-600)' }}
                      ></span>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--muted)' }}
                      >
                        Implemented authentication system
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span
                        className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'var(--accent-600)' }}
                      ></span>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--muted)' }}
                      >
                        Integrated Firebase backend services
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 3: Feature Integration */}
              <div className='stagger-item card-glass rounded-3xl overflow-hidden flex flex-col'>
                <div className='p-6'>
                  <div
                    className='w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4'
                    style={{
                      background: 'var(--accent-600)',
                      color: 'white'
                    }}
                  >
                    3
                  </div>
                  <h3
                    className='text-xl font-bold mb-3'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Feature Integration
                  </h3>
                  <ul className='space-y-3 mt-4'>
                    <li className='flex items-start'>
                      <span
                        className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'var(--accent-600)' }}
                      ></span>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--muted)' }}
                      >
                        Added real-time data synchronization
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span
                        className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'var(--accent-600)' }}
                      ></span>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--muted)' }}
                      >
                        Created custom animations and transitions
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span
                        className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'var(--accent-600)' }}
                      ></span>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--muted)' }}
                      >
                        Implemented offline mode capabilities
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 4: Testing & Deployment */}
              <div className='stagger-item card-glass rounded-3xl overflow-hidden flex flex-col'>
                <div className='p-6'>
                  <div
                    className='w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4'
                    style={{
                      background: 'var(--accent-600)',
                      color: 'white'
                    }}
                  >
                    4
                  </div>
                  <h3
                    className='text-xl font-bold mb-3'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Testing & Deployment
                  </h3>
                  <ul className='space-y-3 mt-4'>
                    <li className='flex items-start'>
                      <span
                        className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'var(--accent-600)' }}
                      ></span>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--muted)' }}
                      >
                        Comprehensive testing on iOS and Android
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span
                        className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'var(--accent-600)' }}
                      ></span>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--muted)' }}
                      >
                        Bug fixes and performance optimization
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span
                        className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'var(--accent-600)' }}
                      ></span>
                      <span
                        className='text-sm'
                        style={{ color: 'var(--muted)' }}
                      >
                        Final deployment and user feedback
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </RevealOnScroll>

      {/* Technical Stack Section */}
      <RevealOnScroll>
        <div className='mt-32'>
          <h2
            className='text-2xl md:text-4xl font-bold mb-16 text-center'
            style={{ color: 'var(--accent-600)' }}
          >
            TECHNICAL STACK
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            {/* Frontend Technologies */}
            <div className='card-glass rounded-3xl p-8'>
              <h3
                className='text-xl font-bold mb-6'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Frontend Technologies
              </h3>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <span
                    className='text-2xl mr-4'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    📱
                  </span>
                  <div>
                    <h4
                      className='font-semibold mb-1'
                      style={{ color: 'var(--brand-scale-12-light)' }}
                    >
                      Flutter & Dart
                    </h4>
                    <p
                      className='text-sm'
                      style={{ color: 'var(--muted)' }}
                    >
                      Cross-platform mobile framework for building native apps
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <span
                    className='text-2xl mr-4'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    🎨
                  </span>
                  <div>
                    <h4
                      className='font-semibold mb-1'
                      style={{ color: 'var(--brand-scale-12-light)' }}
                    >
                      Custom Widgets
                    </h4>
                    <p
                      className='text-sm'
                      style={{ color: 'var(--muted)' }}
                    >
                      Reusable UI components and custom animations
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <span
                    className='text-2xl mr-4'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    🔄
                  </span>
                  <div>
                    <h4
                      className='font-semibold mb-1'
                      style={{ color: 'var(--brand-scale-12-light)' }}
                    >
                      State Management
                    </h4>
                    <p
                      className='text-sm'
                      style={{ color: 'var(--muted)' }}
                    >
                      Provider/Riverpod for efficient state handling
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend & Services */}
            <div className='card-glass rounded-3xl p-8'>
              <h3
                className='text-xl font-bold mb-6'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Backend & Services
              </h3>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <span
                    className='text-2xl mr-4'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    🔥
                  </span>
                  <div>
                    <h4
                      className='font-semibold mb-1'
                      style={{ color: 'var(--brand-scale-12-light)' }}
                    >
                      Firebase
                    </h4>
                    <p
                      className='text-sm'
                      style={{ color: 'var(--muted)' }}
                    >
                      Authentication, Firestore database, and cloud functions
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <span
                    className='text-2xl mr-4'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    🌐
                  </span>
                  <div>
                    <h4
                      className='font-semibold mb-1'
                      style={{ color: 'var(--brand-scale-12-light)' }}
                    >
                      REST API
                    </h4>
                    <p
                      className='text-sm'
                      style={{ color: 'var(--muted)' }}
                    >
                      Integration with backend services for content delivery
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <span
                    className='text-2xl mr-4'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    💾
                  </span>
                  <div>
                    <h4
                      className='font-semibold mb-1'
                      style={{ color: 'var(--brand-scale-12-light)' }}
                    >
                      Local Storage
                    </h4>
                    <p
                      className='text-sm'
                      style={{ color: 'var(--muted)' }}
                    >
                      SQLite and shared preferences for offline capabilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Challenges & Learnings Section */}
      <RevealOnScroll>
        <div className='mt-32 mb-20'>
          <h2
            className='text-2xl md:text-4xl font-bold mb-16 text-center'
            style={{ color: 'var(--accent-600)' }}
          >
            CHALLENGES & LEARNINGS
          </h2>

          <div className='space-y-6'>
            {/* Challenge 1 */}
            <div className='card-glass rounded-3xl p-8'>
              <div className='flex items-start'>
                <div
                  className='w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-6 flex-shrink-0'
                  style={{
                    background: 'var(--accent-600)',
                    color: 'white'
                  }}
                >
                  🎯
                </div>
                <div>
                  <h3
                    className='text-xl font-bold mb-3'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Cross-Platform Consistency
                  </h3>
                  <p
                    className='text-base mb-3'
                    style={{ color: 'var(--muted)' }}
                  >
                    Ensuring consistent UI/UX across iOS and Android platforms while
                    respecting platform-specific design guidelines was challenging.
                  </p>
                  <p
                    className='text-base'
                    style={{ color: 'var(--muted)' }}
                  >
                    <strong>Solution:</strong> Utilized Flutter's adaptive widgets and
                    platform-specific conditional rendering to maintain native feel on
                    both platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className='card-glass rounded-3xl p-8'>
              <div className='flex items-start'>
                <div
                  className='w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-6 flex-shrink-0'
                  style={{
                    background: 'var(--accent-600)',
                    color: 'white'
                  }}
                >
                  ⚡
                </div>
                <div>
                  <h3
                    className='text-xl font-bold mb-3'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Real-time Data Synchronization
                  </h3>
                  <p
                    className='text-base mb-3'
                    style={{ color: 'var(--muted)' }}
                  >
                    Managing real-time updates while maintaining app performance and
                    handling offline scenarios required careful architecture planning.
                  </p>
                  <p
                    className='text-base'
                    style={{ color: 'var(--muted)' }}
                  >
                    <strong>Solution:</strong> Implemented efficient Firebase listeners
                    with local caching and conflict resolution strategies for seamless
                    offline-online transitions.
                  </p>
                </div>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className='card-glass rounded-3xl p-8'>
              <div className='flex items-start'>
                <div
                  className='w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-6 flex-shrink-0'
                  style={{
                    background: 'var(--accent-600)',
                    color: 'white'
                  }}
                >
                  🚀
                </div>
                <div>
                  <h3
                    className='text-xl font-bold mb-3'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Performance Optimization
                  </h3>
                  <p
                    className='text-base mb-3'
                    style={{ color: 'var(--muted)' }}
                  >
                    Keeping the app performant with complex animations and large datasets
                    while maintaining smooth 60fps animations was technically demanding.
                  </p>
                  <p
                    className='text-base'
                    style={{ color: 'var(--muted)' }}
                  >
                    <strong>Solution:</strong> Optimized widget rebuilds, implemented
                    lazy loading, and used efficient data structures to ensure smooth
                    performance across devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  )

  return <BaseProjectDetail project={project} customSections={customSections} />
}
