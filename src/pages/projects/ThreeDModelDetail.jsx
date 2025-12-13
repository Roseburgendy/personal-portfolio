import { BaseProjectDetail } from './BaseProjectDetail'
import { RevealOnScroll } from '../../components/RevealOnScroll'
import { StaggerReveal } from '../../components/StaggerReveal'
import { artProjects } from '../../data/projects'

export const ThreeDModelDetail = () => {
  const project = artProjects.find(p => p.slug === '3d-model')

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
      {/* Inspiration & Story Section */}
      <StaggerReveal>
        <div className='grid md:grid-cols-2 gap-6 mt-20 items-center'>
          {/*Left Cover*/}
          <div
            className='relative rounded-3xl p-6 flex items-end min-h-[400px]'
            style={{
              background: 'var(--brand-scale-3-light)'
            }}
          >
            <img
              src='/personal-portfolio/media/projects/3d-model/model_1.webp'
              alt='hex_cover'
              className='w-full h-full object-contain rounded-3xl'
            />
          </div>
          {/*Right Content*/}
          <div>
            <div className='p-6 items-center'>
              <h3
                className={styles.sectionTitle.className}
                style={styles.sectionTitle.style}
              >
                Inspiration & Story
              </h3>
              <p
                className={styles.sectionSubtitle.className}
                style={styles.sectionSubtitle.style}
              >
                Harmony of Seasons is a course project for a 3D Modeling class.
                Our group created a fantasy story set in a medieval-inspired
                world. Here is the story context:
              </p>
              <p
                className='text-lg mb-12 font-bold italic'
                style={{
                  color: 'var(--accent-600)',
                  backgroundColor: 'var(--accent-100)',
                  padding: '1rem',
                  borderRadius: '0.75rem'
                }}
              >
                "The balance of nature depends on the harmony of the four
                seasons. As summer begins to fade and autumn's harvest fails,
                the Autumn Witch senses a disturbance in the seasonal cycle and
                sets out to restore balance."
              </p>
              <p
                className={styles.sectionSubtitle.className}
                style={styles.sectionSubtitle.style}
              >
                My role in this project focused on the Autumn-themed assets. I
                was responsible for the design, modeling, and texturing of the
                Autumn Castle and the Autumn Witch, aiming to convey autumn as a
                season of transition through warm tones, aged materials, and a
                solemn atmosphere.
              </p>
            </div>
          </div>
        </div>
      </StaggerReveal>

      {/* AUTUMN CASTLE Section */}
      <div className='mb-32'>
        <RevealOnScroll>
          <h2
            className='text-2xl md:text-4xl font-bold mb-16 text-center'
            style={{ color: 'var(--accent-600)' }}
          >
            AUTUMN CASTLE
          </h2>
        </RevealOnScroll>

        {/* Reference & Inspirations */}
        <RevealOnScroll>
          <div className='mt-20'>
            <h3
              className={styles.sectionTitle.className}
              style={styles.sectionTitle.style}
            >
              Reference & Inspirations
            </h3>
            <p
              className={styles.sectionSubtitle.className}
              style={styles.sectionSubtitle.style}
            >
              Drawing inspiration from medieval architecture and autumn
              aesthetics to create an immersive fantasy environment.
            </p>

            {/* Reference Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
              {/* Architecture Card */}
              <div className='card-glass rounded-3xl overflow-hidden'>
                <div className='aspect-[4/3] bg-[#f2d7d7]/30 relative'>
                  <img
                    src='/personal-portfolio/media/projects/3d-model/castle/ref-architecture.webp'
                    alt='Castle architecture reference'
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='p-6'>
                  <h4
                    className='text-xl font-bold mb-3'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Architecture
                  </h4>
                  <p
                    className={styles.bodyText.className}
                    style={styles.bodyText.style}
                  >
                    Medieval European castle designs with towering spires, stone
                    textures, and gothic architectural elements that evoke
                    mystery and grandeur.
                  </p>
                </div>
              </div>

              {/* Color & Mood Card */}
              <div className='card-glass rounded-3xl overflow-hidden'>
                <div className='aspect-[4/3] bg-[#f2d7d7]/30 relative'>
                  <img
                    src='/personal-portfolio/media/projects/3d-model/castle/ref-color.webp'
                    alt='Castle color and mood reference'
                    className='w-full h-full object-cover object-bottom'
                  />
                </div>
                <div className='p-6'>
                  <h4
                    className='text-xl font-bold mb-3'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Color & Mood
                  </h4>
                  <p
                    className={styles.bodyText.className}
                    style={styles.bodyText.style}
                  >
                    Warm autumn palette featuring rich oranges, deep reds, and
                    golden yellows contrasted with cool stone grays to create
                    atmospheric depth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Development Process */}
        <RevealOnScroll>
          <div className='mt-20'>
            <h3
              className={styles.subsectionTitle.className}
              style={styles.subsectionTitle.style}
            >
              Development Process
            </h3>
            <p
              className={styles.sectionSubtitle.className}
              style={styles.sectionSubtitle.style}
            >
              A comprehensive pipeline from concept to final render, showcasing
              the technical workflow for environment production.
            </p>

            {/* Process Cards */}
            <StaggerReveal staggerDelay={150}>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-8'>
                {/* Step 1: Sketching */}
                <div className='stagger-item card-glass rounded-3xl overflow-hidden flex flex-col'>
                  <div className='p-6 pb-0'>
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
                      Sketching
                    </h3>
                  </div>
                  <div className='relative bg-[#f2d7d7]/30 mx-6 mb-4 rounded-2xl overflow-hidden aspect-[4/3]'>
                    <img
                      src='/personal-portfolio/media/projects/3d-model/castle/step1-sketching.webp'
                      alt='Castle base modeling process'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='px-6 pb-6'>
                    <ul className='space-y-3'>
                      <li className='flex items-start'>
                        <span
                          className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                          style={{ backgroundColor: 'var(--accent-600)' }}
                        ></span>
                        <span
                          className='text-sm'
                          style={{ color: 'var(--muted)' }}
                        >
                          Sketching using paper & pencil
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
                          Create line draft using Adobe Illustrator
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Step 2: Modeling */}
                <div className='stagger-item card-glass rounded-3xl overflow-hidden flex flex-col'>
                  <div className='p-6 pb-0'>
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
                      Base Modeling
                    </h3>
                  </div>
                  <div className='relative bg-[#f2d7d7]/30 mx-6 mb-4 rounded-2xl overflow-hidden aspect-[4/3]'>
                    <img
                      src='/personal-portfolio/media/projects/3d-model/castle/step2-modeling.webp'
                      alt='Castle base modeling process'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='px-6 pb-6'>
                    <ul className='space-y-3'>
                      <li className='flex items-start'>
                        <span
                          className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                          style={{ backgroundColor: 'var(--accent-600)' }}
                        ></span>
                        <span
                          className='text-sm'
                          style={{ color: 'var(--muted)' }}
                        >
                          Created base castle structure in Maya
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
                          Modeled architectural details and props
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
                          Optimized geometry for efficient rendering
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 3: Texturing */}
                <div className='stagger-item card-glass rounded-3xl overflow-hidden flex flex-col'>
                  <div className='p-6 pb-0'>
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
                      Texturing & Materials
                    </h3>
                  </div>
                  <div className='relative bg-[#f2d7d7]/30 mx-6 mb-4 rounded-2xl overflow-hidden aspect-[4/3]'>
                    <img
                      src='/personal-portfolio/media/projects/3d-model/castle/step3-texturing.webp'
                      alt='Castle texturing process'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='px-6 pb-6'>
                    <ul className='space-y-3'>
                      <li className='flex items-start'>
                        <span
                          className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                          style={{ backgroundColor: 'var(--accent-600)' }}
                        ></span>
                        <span
                          className='text-sm'
                          style={{ color: 'var(--muted)' }}
                        >
                          Applied PBR textures in Substance Painter
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
                          Created weathering effects and aging details
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
                          Developed autumn color palette materials
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 4: Lighting & Rendering */}
                <div className='stagger-item card-glass rounded-3xl overflow-hidden flex flex-col'>
                  <div className='p-6 pb-0'>
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
                      Lighting & Rendering
                    </h3>
                  </div>
                  <div className='relative bg-[#f2d7d7]/30 mx-6 mb-4 rounded-2xl overflow-hidden aspect-[4/3]'>
                    <img
                      src='/personal-portfolio/media/projects/3d-model/castle/step4-lighting.webp'
                      alt='Castle lighting and rendering process'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='px-6 pb-6'>
                    <ul className='space-y-3'>
                      <li className='flex items-start'>
                        <span
                          className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                          style={{ backgroundColor: 'var(--accent-600)' }}
                        ></span>
                        <span
                          className='text-sm'
                          style={{ color: 'var(--muted)' }}
                        >
                          Set up atmospheric lighting for autumn mood
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
                          Configured render settings for quality output
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
                          Post-processing in Adobe Illustrator
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerReveal>
          </div>
        </RevealOnScroll>

        {/* Final Showcase - Castle */}
        <RevealOnScroll>
          <div className='mt-20'>
            <h3
              className={styles.subsectionTitle.className}
              style={styles.subsectionTitle.style}
            >
              Final Showcase
            </h3>
            <p
              className={styles.sectionSubtitle.className}
              style={styles.sectionSubtitle.style}
            >
              The completed autumn castle environment in all its glory
            </p>

            {/* Varied Gallery Layout */}
            <div className='space-y-4 mt-8'>
              {/* Row 1: 2 images */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='card-glass rounded-2xl overflow-hidden aspect-[16/10]'>
                  <img
                    src='/personal-portfolio/media/projects/3d-model/castle/final-1.webp'
                    alt='Castle final render 1'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='card-glass rounded-2xl overflow-hidden aspect-[16/10]'>
                  <img
                    src='/personal-portfolio/media/projects/3d-model/castle/final-2.webp'
                    alt='Castle final render 2'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              {/* Row 2: 3 images */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='card-glass rounded-2xl overflow-hidden aspect-square'>
                  <img
                    src='/personal-portfolio/media/projects/3d-model/castle/final-3.webp'
                    alt='Castle detail 1'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='card-glass rounded-2xl overflow-hidden aspect-square'>
                  <img
                    src='/personal-portfolio/media/projects/3d-model/castle/final-4.webp'
                    alt='Castle detail 2'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='card-glass rounded-2xl overflow-hidden aspect-square'>
                  <img
                    src='/personal-portfolio/media/projects/3d-model/castle/final-5.webp'
                    alt='Castle detail 3'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* AUTUMN WITCH Section */}
      <div className='mb-32'>
        <RevealOnScroll>
          <h2
            className='text-2xl md:text-4xl font-bold mb-16 text-center'
            style={{ color: 'var(--accent-600)' }}
          >
            AUTUMN WITCH
          </h2>
        </RevealOnScroll>

        {/* Development Process */}
        <RevealOnScroll>
          <div className='mt-20'>
            <h3
              className={styles.subsectionTitle.className}
              style={styles.subsectionTitle.style}
            >
              Development Process
            </h3>
            <p
              className={styles.sectionSubtitle.className}
              style={styles.sectionSubtitle.style}
            >
              Character production pipeline from concept sculpting to final
              presentation.
            </p>

            {/* Process Cards */}
            <StaggerReveal staggerDelay={150}>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-8'>
                {/* Step 1: Sketching */}
                <div className='stagger-item card-glass rounded-3xl overflow-hidden flex flex-col'>
                  <div className='p-6 pb-0'>
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
                      Sketching
                    </h3>
                  </div>
                  <div className='relative bg-[#f2d7d7]/30 mx-6 mb-4 rounded-2xl overflow-hidden aspect-[4/3]'>
                    <img
                      src='/personal-portfolio/media/projects/3d-model/witch/step1-sketching.webp'
                      alt='Witch character sculpting process'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='px-6 pb-6'>
                    <ul className='space-y-3'>
                      <li className='flex items-start'>
                        <span
                          className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                          style={{ backgroundColor: 'var(--accent-600)' }}
                        ></span>
                        <span
                          className='text-sm'
                          style={{ color: 'var(--muted)' }}
                        >
                          Brainstorming character appearance using Midjourney
                          and draw using Adobe Photoshop
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 2: Character Modeling */}
                <div className='stagger-item card-glass rounded-3xl overflow-hidden flex flex-col'>
                  <div className='p-6 pb-0'>
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
                      Character Modeling
                    </h3>
                  </div>
                  <div className='relative bg-[#f2d7d7]/30 mx-6 mb-4 rounded-2xl overflow-hidden aspect-[4/3]'>
                    <img
                      src='/personal-portfolio/media/projects/3d-model/witch/step2-modeling.webp'
                      alt='Witch character sculpting process'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='px-6 pb-6'>
                    <ul className='space-y-3'>
                      <li className='flex items-start'>
                        <span
                          className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                          style={{ backgroundColor: 'var(--accent-600)' }}
                        ></span>
                        <span
                          className='text-sm'
                          style={{ color: 'var(--muted)' }}
                        >
                          Sculpted character base mesh and proportions
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
                          Modeled clothing and magical accessories
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
                          Refined facial features and expression
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 3: Texturing */}
                <div className='stagger-item card-glass rounded-3xl overflow-hidden flex flex-col'>
                  <div className='p-6 pb-0'>
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
                      Texturing & Shading
                    </h3>
                  </div>
                  <div className='relative bg-[#f2d7d7]/30 mx-6 mb-4 rounded-2xl overflow-hidden aspect-[4/3]'>
                    <img
                      src='/personal-portfolio/media/projects/3d-model/witch/step3-texturing.webp'
                      alt='Witch texturing process'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='px-6 pb-6'>
                    <ul className='space-y-3'>
                      <li className='flex items-start'>
                        <span
                          className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                          style={{ backgroundColor: 'var(--accent-600)' }}
                        ></span>
                        <span
                          className='text-sm'
                          style={{ color: 'var(--muted)' }}
                        >
                          Created detailed textures for skin and fabrics
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
                          Applied autumn-themed color schemes
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
                          Developed magical effects and materials
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 4: Final Presentation */}
                <div className='stagger-item card-glass rounded-3xl overflow-hidden flex flex-col'>
                  <div className='p-6 pb-0'>
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
                      Rendering
                    </h3>
                  </div>
                  <div className='relative bg-[#f2d7d7]/30 mx-6 mb-4 rounded-2xl overflow-hidden aspect-[4/3]'>
                    <img
                      src='/personal-portfolio/media/projects/3d-model/witch/step4-tlighting.webp'
                      alt='Witch posing and rendering process'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='px-6 pb-6'>
                    <ul className='space-y-3'>
                      <li className='flex items-start'>
                        <span
                          className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                          style={{ backgroundColor: 'var(--accent-600)' }}
                        ></span>
                        <span
                          className='text-sm'
                          style={{ color: 'var(--muted)' }}
                        >
                          Created dynamic character pose
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
                          Set up dramatic lighting and atmosphere
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
                          Final compositing and post-processing
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerReveal>
          </div>
        </RevealOnScroll>

        {/* Final Showcase - Witch */}
        <RevealOnScroll>
          <div className='mt-20'>
            <h3
              className={styles.subsectionTitle.className}
              style={styles.subsectionTitle.style}
            >
              Final Showcase
            </h3>
            <p
              className={styles.sectionSubtitle.className}
              style={styles.sectionSubtitle.style}
            >
              The mystical autumn witch character in her full magical glory
            </p>

            {/* Varied Gallery Layout */}
            <div className='space-y-4 mt-8'>
              {/* Row 1: 1 large image */}
              <div className='card-glass rounded-2xl overflow-hidden aspect-[16/9]'>
                <img
                  src='/personal-portfolio/media/projects/3d-model/witch/final-1.webp'
                  alt='Witch hero shot'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Row 2: 3 images */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='card-glass rounded-2xl overflow-hidden aspect-square'>
                  <img
                    src='/personal-portfolio/media/projects/3d-model/witch/final-2.webp'
                    alt='Witch detail 1'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='card-glass rounded-2xl overflow-hidden aspect-square'>
                  <img
                    src='/personal-portfolio/media/projects/3d-model/witch/final-3.webp'
                    alt='Witch detail 2'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='card-glass rounded-2xl overflow-hidden aspect-square'>
                  <img
                    src='/personal-portfolio/media/projects/3d-model/witch/final-4.webp'
                    alt='Witch detail 3'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              {/* Row 3: 2 images */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='card-glass rounded-2xl overflow-hidden aspect-[4/3]'>
                  <img
                    src='/personal-portfolio/media/projects/3d-model/witch/final-5.webp'
                    alt='Witch final render 5'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='card-glass rounded-2xl overflow-hidden aspect-[4/3]'>
                  <img
                    src='/personal-portfolio/media/projects/3d-model/witch/final-6.webp'
                    alt='Witch final render 6'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
            {/* Turntable Video Section */}
            <section className='mt-32'>
              <div className='max-w-5xl mx-auto'>
                {/* Section Header */}
                <div className='mb-6'>
                  <h3 className='text-sm tracking-widest text-orange-600 uppercase mb-2'>
                    Showcase
                  </h3>
                  <h2 className='text-3xl font-bold text-neutral-900'>
                    Character Turntable
                  </h2>
                  <p className='mt-2 text-neutral-500 max-w-2xl'>
                    A turntable view highlighting the modeling and texturing
                    details of the 3D character.
                  </p>
                </div>

                {/* Video Card */}
                <div className='card-glass rounded-3xl overflow-hidden bg-white/70 shadow-lg'>
                  <div className='relative w-full aspect-video'>
                    <iframe
                      className='absolute inset-0 w-full h-full'
                      src='https://www.youtube.com/embed/OFFRnBwIYKk'
                      title='3D Character Turntable'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )

  return <BaseProjectDetail project={project} customSections={customSections} />
}
