import { useState } from 'react'
import { motion } from 'framer-motion'
import { BaseProjectDetail } from './BaseProjectDetail'
import { RevealOnScroll } from '../../components/RevealOnScroll'
import { StaggerReveal } from '../../components/StaggerReveal'
import { ProjectSidebar } from '../../components/ProjectSidebar'
import { otherProjects } from '../../data/projects'

export const ThesisProjectDetail = () => {
  const project = otherProjects.find(p => p.slug === 'thesis-project')
  const [expandedSection, setExpandedSection] = useState(null)
  const [activeFddPhase, setActiveFddPhase] = useState(1) // Default to "Build Feature List"
  const [activeExpCard, setActiveExpCard] = useState('design') // Default to "Study Design"

  const toggleSection = sectionId => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  // Define sidebar sections
  const sidebarSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'background', label: 'Background' },
    { id: 'problem', label: 'Problem Statement' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'features', label: 'Key Features' },
    { id: 'results', label: 'Results' },
    { id: 'limitations', label: 'Limitations' },
    { id: 'demo', label: 'Demo Video & Thesis' }
  ]

  // Style definitions
  const styles = {
    sectionTitle: {
      className: 'text-3xl md:text-4xl font-bold mb-6',
      style: { color: 'var(--accent-800)' }
    },
    sectionSubtitle: {
      className: 'text-lg mb-12',
      style: { color: 'var(--muted)' }
    },
    subsectionTitle: {
      className: 'text-2xl font-bold mb-4 mt-8',
      style: { color: 'var(--brand-scale-12-light)' }
    },
    bodyText: {
      className: 'text-lg leading-relaxed',
      style: { color: 'var(--muted)' }
    }
  }

  // Background Data
  const backgroundData = {
    breathingBenefits: [
      'Effective, low-cost strategy for improving physiological and psychological well-being',
      'Slow-paced breathing (6-7 breaths/min) reduces stress and improves emotional regulation'
    ],
    traditionalChallenges: [
      'Lack of engagement in 2D screen-based interventions',
      'Difficult to sustain focus, especially for novice practitioners',
      'Maintaining attention and correct breathing rhythm remains challenging'
    ],
    vrAdvantages: [
      'Immersive environments that reduce external distractions',
      'Interactive and embodied feedback opportunities',
      'Demonstrated benefits in engagement, relaxation, and user enjoyment'
    ]
  }

  // Problem Statement Data
  const problemData = {
    metaAnalysisFindings:
      'Recent meta-analysis shows VR breathing is not always superior to traditional 2D methods in user experience and relaxation outcomes.',
    contributingFactor:
      'Lack of thoughtful design features that effectively engage users',
    narrativeGap: [
      'Not systematically designed',
      'Not isolated as an experimental variable',
      'Not empirically evaluated in VR breathing contexts'
    ],
    researchGoal:
      'This research project aims to assess the effectiveness of a slow-paced virtual reality (VR) breathing intervention serious game to reduce anxiety symptoms and investigate the contribution of storytelling as a design feature in improvingengagement and user experience.'
  }

  // Methodology: FDD Process
  const fddPhases = [
    {
      phase: 'Develop Overall Model',
      description: 'Literature review, identify best practices, tool selection',
      image: '/personal-portfolio/media/projects/fyp/conceptual_model.webp'
    },
    {
      phase: 'Build Feature List',
      description: '4 feature sets identified with narrative as standalone set',
      image: '/personal-portfolio/media/projects/fyp/feature_list.webp'
    },
    {
      phase: 'Plan by Feature',
      description: 'Strategic planning across 4 iterations',
      image: '/personal-portfolio/media/projects/fyp/feature_plan.webp'
    },
    {
      phase: 'Design & Build',
      description: 'Iterative feature design and implementation',
      image: '/personal-portfolio/media/projects/fyp/design_build.webp'
    }
  ]

  // Feature Sets (matching thesis structure)
  const featureSets = [
    {
      title: 'Set 1: Base & Environment',
      features: [
        'Fantasy natural environment with low-poly aesthetic',
        'Post-processing effects (bloom, color grading, atmospheric fog)',
        'Restorative color palette (pink-blue tones)'
      ],
      implementation:
        "Implemented using Unity's Universal Render Pipeline (URP) with custom post-processing stack. Low-poly models assets with used for enhanced VR performance. Color grading was adjusted to achieve a calming pink-blue palette aligned with color selection best practices for mental health, supported by ambient lighting and fog effects to enhance immersion.",
      visual: 'environment-design.webp'
    },
    {
      title: 'Set 2: Core Mechanics',
      features: [
        'Visual breathing pacer (4s inhale / 6s exhale)',
        'Meditative movement guidance inspired by Qigong/Tai Chi',
        'Multimodal feedback: visual particles, audio cues, haptic vibration'
      ],
      implementation:
        'Breathing pacer implemented using Bezier curves for smooth circular motion animations. Particle systems driven by breathing state transitions. Haptic feedback integrated through XR Interaction Toolkit with timing synchronized to breathing phases.',
      visual: ['breathing-mechanics-1.gif', 'breathing-mechanics-2.gif'],
      isVertical: true
    },
    {
      title: 'Set 3: Audio & Immersion',
      features: [
        'Background meditation music (3 variations for task sets)',
        'AI-generated voice guidance (ElevenLab)',
        'Ambient sounds (wind, waterfall)'
      ],
      implementation:
        'A layered audio system was developed to enhance immersion and guide user attention during breathing tasks. This includes ambient environmental sounds, background music, and voice-based breathing instructions, triggered dynamically based on task progression. Visual, audio, and movement feedback were carefully coordinated to provide soft, non-intrusive cues without increasing cognitive load.',
      visual: 'audio-system.webp'
    },
    {
      title: 'Set 4: Narrative',
      features: [
        'Phase-based story progression (3 breathing task phases)',
        'Intrinsic integration: breathing mandatory to proceed',
        'Dialogue system with subtitles and voice-over synchronization'
      ],
      implementation:
        'Narrative system implemented using a state machine pattern for phase transitions. Voice-over synchronization achieved by parsing audio clip timings and triggering subtitle updates via coroutines. A phase-based narrative controller manages story progression, dialogue triggers, and audio narration, allowing narrative content to unfold alongside breathing tasks. This design ensures that narrative functions purely as an experiential layer, enabling direct comparison with the non-narrative condition.',
      visual: 'narrative-system.webp'
    }
  ]

  // Experiment Design
  const experimentDesign = {
    design: 'Randomized Controlled Trial (between-subjects)',
    participants: 'N = 18 novice breathing exercise practitioners',
    conditions: [
      {
        name: 'Narrative Condition',
        n: 10,
        description: 'Breathing tasks with narrative progression'
      },
      {
        name: 'Training Mode',
        n: 8,
        description: 'Pure breathing exercises (no narrative)'
      }
    ],
    measures: [
      'STAI-6: State anxiety (pre/post-test)',
      'UES-SF: User engagement (post-test)',
      'Open-ended qualitative feedback'
    ]
  }

  // Key Findings
  const keyFindings = [
    {
      category: 'Anxiety Reduction',
      findings: [
        'Significant decrease in state anxiety in both conditions (p < 0.001)',
        'Narrative condition: M = 25.00 reduction',
        'Training condition: M = 21.75 reduction',
        'No statistically significant between-group difference'
      ],
      summary:
        'The results demonstrate that both VR breathing interventions effectively reduced state anxiety, with the narrative-enhanced version showing a slightly higher mean reduction. However, statistical analysis revealed no significant difference between groups, suggesting that the core breathing mechanics were the primary driver of anxiety reduction rather than the narrative elements alone.',
      charts: [
        {
          image: 'anxiety-chart-1.webp',
          caption: 'Pre and post-test STAI-6 scores by condition'
        },
        {
          image: 'anxiety-chart-2.webp',
          caption: 'Mean anxiety reduction comparison between groups'
        }
      ]
    },
    {
      category: 'User Engagement',
      findings: [
        'No significant difference in overall UES-SF scores between groups',
        'Both conditions achieved high engagement scores (M > 4.0/5.0)',
        'No significant differences across subscales (FA, PU, AE, RW)'
      ],
      summary:
        'Both conditions achieved high user engagement levels across all measured dimensions, indicating that the VR environment itself was sufficiently engaging. The charts show consistent patterns across Focused Attention, Perceived Usability, Aesthetic Appeal, and Reward factors, suggesting that narrative enhancement did not significantly impact engagement beyond the baseline VR experience.',
      charts: [
        {
          image: 'engagement-chart-1.webp',
          caption: 'Overall UES-SF scores by condition'
        },
        {
          image: 'engagement-chart-2.webp',
          caption: 'UES-SF subscale scores comparison'
        }
      ]
    },
    {
      category: 'Qualitative Insights',
      findings: [
        'Narrative group: enhanced immersion and emotional connection',
        'Described as "relaxing, immersive, novel, emotionally engaging"',
        'Positive feedback on visual design, audio, and interaction',
        'One participant reported breathing adaptation period needed'
      ],
      summary:
        'Qualitative feedback revealed that participants in the narrative condition experienced stronger emotional connection and immersion, as evidenced by the thematic analysis. While quantitative measures showed no significant differences, participant testimonials highlighted the unique value of narrative elements in creating a more meaningful and emotionally resonant experience.',
      charts: [
        {
          image: 'qualitative-chart.webp',
          caption: 'Thematic analysis of qualitative feedback'
        }
      ]
    }
  ]

  // Limitations & Future Work
  const limitations = [
    'Small sample size (N=18) may introduce participant bias',
    'Single-session evaluation only captures short-term effects',
    'Time and resource constraints limited system scope',
    'Limited customization options for user preferences'
  ]

  const futureWork = [
    'Conduct larger-scale evaluations with pilot studies',
    'Introduce warm-up and cool-down breathing phases',
    'Isolate other design features (audio, movement, multimodal feedback)',
    'Add customization options (environment, haptics, guidance)',
    'Conduct longitudinal studies for long-term effects'
  ]

  const customSections = (
    <div>
      {/* Sidebar Navigation */}
      <ProjectSidebar sections={sidebarSections} />
      {/* Section 1: Project Overview */}
      <RevealOnScroll>
        <section id='overview' className='py-20'>
          <h2 {...styles.sectionTitle}>Project Overview</h2>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='card-glass rounded-3xl overflow-hidden'>
              <div className='aspect-video bg-[var(--brand-scale-3-light)] flex items-center justify-center'>
                <div className='text-center'>
                <img
                  src='/personal-portfolio/media/projects/fyp/overview.webp'
                  alt='Traditional Breathing Exercise'
                  className='w-full h-full object-cover aspect-video'
                />
                </div>
              </div>
            </div>

            <div>
              <p className='mb-6' {...styles.bodyText}>
                This research project addresses{' '}
                <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                  low engagement in traditional breathing exercises
                </strong>{' '}
                by developing a{' '}
                <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                  narrative-driven VR serious game
                </strong>{' '}
                that integrates slow-paced breathing techniques into an
                immersive storytelling experience.
              </p>
              <p className='mb-6' {...styles.bodyText}>
                Through a{' '}
                <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                  randomized controlled trial
                </strong>{' '}
                with between-subjects design (N=18), the project evaluated both
                the{' '}
                <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                  anxiety reduction effectiveness
                </strong>{' '}
                of VR breathing interventions and the specific contribution of
                narrative design to user engagement.
              </p>
              <p {...styles.bodyText}>
                Results demonstrated that the VR breathing intervention
                <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                  {' '}
                  significantly reduced state anxiety
                </strong>{' '}
                in both conditions, with the narrative condition showing
                slightly larger reductions but no statistically significant
                difference in engagement scores. However, qualitative feedback
                revealed that{' '}
                <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                  narrative integration enhanced immersion and emotional
                  connection
                </strong>
                , providing empirical insights into the role of storytelling in
                VR mental health applications.
              </p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 2: Background */}
      <RevealOnScroll>
        <section
          id='background'
          className='py-20 -mx-6 px-6 md:-mx-12 md:px-12'
        >
          <h2 {...styles.sectionTitle}>Background</h2>

          <div className='max-w-6xl mx-auto space-y-16'>
            {/* Part 1: Traditional Breathing Interventions (Photo Left, Content Right) */}
            <div className='grid md:grid-cols-2 gap-12'>
              {/* Photo */}
              <div className='card-glass rounded-3xl overflow-hidden'>
                <img
                  src='/personal-portfolio/media/projects/fyp/traditional_breathwork.webp'
                  alt='Traditional Breathing Exercise'
                  className='w-full h-full object-cover aspect-video'
                />
              </div>

              {/* Content */}
              <div>
                <h3 {...styles.subsectionTitle}>Breathing Interventions</h3>
                <ul className='space-y-4 list-disc list-inside marker:text-[var(--accent-600)]'>
                  {backgroundData.breathingBenefits.map((item, idx) => (
                    <li key={idx} {...styles.bodyText}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Part 2: Challenges (Centered Paragraph) */}
            <div className='max-w-4xl mx-auto'>
              <div className='rounded-3xl p-12 text-center bg-[var(--brand-scale-3-light)]'>
                <h3
                  className='text-xl font-bold mb-6'
                  style={{ color: 'var(--brand-scale-12-light)' }}
                >
                  However, Traditional 2D Breathwork Applications Face
                  Challenges
                </h3>
                <div className='space-y-4 text-left max-w-3xl mx-auto'>
                  {backgroundData.traditionalChallenges.map((item, idx) => (
                    <p key={idx} {...styles.bodyText}>
                      <strong style={{ color: 'var(--accent-600)' }}>•</strong>{' '}
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Part 3: VR Solution (Content Left, Photo Right) */}
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              {/* Content */}
              <div>
                <h3 {...styles.subsectionTitle}>Why Virtual Reality?</h3>
                <p className='mb-6' {...styles.bodyText}>
                  VR technology offers a promising solution to address these
                  engagement challenges:
                </p>
                <ul className='space-y-4 list-disc list-inside marker:text-[var(--accent-600)]'>
                  {backgroundData.vrAdvantages.map((item, idx) => (
                    <li key={idx} {...styles.bodyText}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photo */}
              <div className='card-glass rounded-3xl overflow-hidden'>
                <div className='aspect-video bg-[var(--brand-scale-3-light)] flex items-center justify-center'>
                  <div>
                    <img
                      src='/personal-portfolio/media/projects/fyp/vr_breath.webp'
                      alt='Traditional Breathing Exercise'
                      className='w-full h-full object-cover aspect-video'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 3: Problem Statement */}
      <RevealOnScroll>
        <section id='problem' className='py-32'>
          <h2 {...styles.sectionTitle}>Problem Statement</h2>
          <p {...styles.sectionSubtitle}>Identifying the Research Gap</p>
          <div className='grid md:grid-cols-2 gap-12 mb-12'>
            <div className='card-glass rounded-3xl p-8 flex flex-col'>
              <h3 {...styles.subsectionTitle}>The Challenge</h3>
              <p className='mb-10' {...styles.bodyText}>
                {problemData.metaAnalysisFindings}
              </p>
              <p
                className='mt-4 font-bold text-xl'
                style={{ color: 'var(--accent-600)' }}
              >
                One of the Contributing Factors is Lack of thoughtful design
                features that effectively engage users.
              </p>
            </div>

            <div className='card-glass rounded-3xl p-8 flex flex-col'>
              <h3 {...styles.subsectionTitle}>The Narrative Gap</h3>
              <p className='mb-4' {...styles.bodyText}>
                Narrative has not been:
              </p>
              <ul className='space-y-3 mt-6 list-disc list-inside marker:text-[var(--accent-600)]'>
                {problemData.narrativeGap.map((item, idx) => (
                  <li key={idx} {...styles.bodyText}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='bg-[var(--brand-scale-3-light)] rounded-3xl p-8'>
            <h3 {...styles.subsectionTitle}>Research Objective</h3>
            <p {...styles.bodyText}>
              This research project aims to assess the effectiveness of a
              slow-paced virtual reality (VR) breathing intervention serious
              game to{' '}
              <strong style={{ color: 'var(--accent-600)' }}>
                reduce anxiety symptoms{' '}
              </strong>
              and investigate
              <strong style={{ color: 'var(--accent-600)' }}>
                {' '}
                the contribution of storytelling{' '}
              </strong>
              as a design feature in improving engagement and user experience.
            </p>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 4: Methodology */}
      <RevealOnScroll>
        <section
          id='methodology'
          className='py-20 -mx-6 px-6 md:-mx-12 md:px-12'
        >
          <h2 {...styles.sectionTitle}>Research Methodology</h2>
          <p {...styles.sectionSubtitle}>
            This project adopted a controlled experimental methodology to
            evaluate both the relaxation effect of the VR breathing intervention
            and the impact of narrative on user engagement. By comparing
            narrative and non-narrative conditions while keeping core mechanics
            consistent, the study isolates narrative as the primary variable of
            interest.
          </p>

          <div className='max-w-5xl mx-auto space-y-16'>
            {/* FDD Process */}
            <div>
              <h3
                className='text-2xl font-bold mb-8 text-center'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Feature Driven Development (FDD)
              </h3>
              <StaggerReveal staggerDelay={150}>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                  {fddPhases.map((phase, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFddPhase(index)}
                      className={`stagger-item card-glass rounded-3xl p-6 transition-all duration-300 ${
                        phase.image ? 'hover:bg-white/10' : ''
                      }`}
                      style={{
                        cursor: phase.image ? 'pointer' : 'default',
                        opacity: phase.image ? 1 : 0.7,
                        outline:
                          activeFddPhase === index
                            ? '2px solid var(--accent-600)'
                            : 'none',
                        outlineOffset: activeFddPhase === index ? '2px' : '0'
                      }}
                      disabled={!phase.image}
                    >
                      <h4
                        className='text-lg font-bold mb-3 text-center'
                        style={{
                          color:
                            activeFddPhase === index
                              ? 'var(--accent-600)'
                              : 'var(--brand-scale-12-light)'
                        }}
                      >
                        {phase.phase}
                      </h4>
                      <p
                        className='text-sm text-center'
                        style={{ color: 'var(--muted)' }}
                      >
                        {phase.description}
                      </p>
                    </button>
                  ))}
                </div>
              </StaggerReveal>

              {/* FDD Workflow Diagram - Shows image based on active phase */}
              {fddPhases[activeFddPhase]?.image && (
                <motion.div
                  key={activeFddPhase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className='mt-12 card-glass rounded-3xl overflow-hidden'
                >
                  <div className='bg-[var(--brand-scale-1-light)] flex items-center justify-center p-8'>
                    <img
                      src={fddPhases[activeFddPhase].image}
                      alt={fddPhases[activeFddPhase].phase}
                      className='w-full h-auto'
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Research Design */}
            <div>
              <h3
                className='text-2xl font-bold mb-8 text-center'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Experiment Design
              </h3>

              <div className='space-y-8'>
                {/* Top: Flowchart */}
                <div className='card-glass rounded-3xl overflow-hidden p-8'>
                  <img
                    src='/personal-portfolio/media/projects/fyp/exp_flow.webp'
                    alt='Experiment procedure flowchart'
                    className='w-full h-auto'
                  />
                </div>

                {/* Bottom: Info Cards */}
                <div className='grid md:grid-cols-3 gap-6'>
                  {/* Left Half: Variables and Measurements (horizontal) - Takes 2 columns (4:2 ratio) */}
                  <div className='md:col-span-2 grid grid-cols-2 gap-4'>
                    {/* Variables Card */}
                    <div className='card-glass rounded-2xl p-6'>
                      <div className='space-y-5'>
                        <div>
                          <h4
                            className='text-xl font-bold mb-1'
                            style={{ color: 'var(--brand-scale-12-light)' }}
                          >
                            Independent variables:
                          </h4>
                          <p style={{ color: 'var(--muted)' }}>
                            Presence of narrative (Narrative Condition vs
                            Training Mode)
                          </p>
                        </div>
                        <div>
                          <h4
                            className='text-xl font-bold mb-1'
                            style={{ color: 'var(--brand-scale-12-light)' }}
                          >
                            Dependent variables:
                          </h4>
                          <ul
                            className='space-y-2'
                            style={{ color: 'var(--muted)' }}
                          >
                            <li className='flex items-start '>
                              <span className='mr-2'>•</span>
                              <span>State anxiety levels (STAI-6)</span>
                            </li>
                            <li className='flex items-start'>
                              <span className='mr-2'>•</span>
                              <span>User engagement</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4
                            className='text-xl font-bold mb-1'
                            style={{ color: 'var(--brand-scale-12-light)' }}
                          >
                            Hypothesis:
                          </h4>
                          <ul
                            className='space-y-2'
                            style={{ color: 'var(--muted)' }}
                          >
                            <li className='flex items-start '>
                              <span className='mr-2'>•</span>
                              <span>
                                Narrative condition will show higher engagement
                              </span>
                            </li>
                            <li className='flex items-start'>
                              <span className='mr-2'>•</span>
                              <span>
                                VR breathing intervention will reduce state
                                anxiety in both conditions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Measurements Card */}
                    <div className='card-glass rounded-2xl p-6'>
                      <h4
                        className='text-xl font-bold text-center mb-4'
                        style={{ color: 'var(--brand-scale-12-light)' }}
                      >
                        Measurements:
                      </h4>
                      <ul
                        className='space-y-2'
                        style={{ color: 'var(--muted)' }}
                      >
                        <li className='flex items-start'>
                          <span className='mr-2'>•</span>
                          <span>
                            STAI-6: State anxiety assessment (pre/post-test)
                          </span>
                        </li>
                        <li className='flex items-start'>
                          <span className='mr-2'>•</span>
                          <span>UES-SF: User engagement scale (post-test)</span>
                        </li>
                        <li className='flex items-start'>
                          <span className='mr-2'>•</span>
                          <span>
                            Open-ended qualitative feedback from participants
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Half: Study Design and Participants (vertical) */}
                  <div className='space-y-6'>
                    {/* Study Design Card */}
                    <div className='card-glass rounded-2xl p-6'>
                      <div className='mb-4 flex justify-center'>
                        <svg
                          className='w-12 h-12'
                          fill='currentColor'
                          style={{ color: 'var(--brand-scale-12-light)' }}
                          viewBox='0 0 24 24'
                        >
                          <path d='M7 2v2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V2h-2v2H9V2H7zM6 6h12v3H6V6zm0 5h12v9H6v-9zm2 2v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z' />
                        </svg>
                      </div>
                      <h4
                        className='text-lg font-bold text-center mb-3'
                        style={{ color: 'var(--brand-scale-12-light)' }}
                      >
                        STUDY DESIGN
                      </h4>
                      <p
                        className='text-sm text-center'
                        style={{ color: 'var(--muted)' }}
                      >
                        RCT Between-subjects
                      </p>
                    </div>

                    {/* Participants Card */}
                    <div className='card-glass rounded-2xl p-6'>
                      <div className='mb-4 flex justify-center'>
                        <svg
                          className='w-12 h-12'
                          fill='currentColor'
                          style={{ color: 'var(--brand-scale-12-light)' }}
                          viewBox='0 0 24 24'
                        >
                          <path d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' />
                        </svg>
                      </div>
                      <h4
                        className='text-lg font-bold text-center mb-3'
                        style={{ color: 'var(--brand-scale-12-light)' }}
                      >
                        PARTICIPANTS
                      </h4>
                      <p
                        className='text-sm text-center mb-2'
                        style={{ color: 'var(--muted)' }}
                      >
                        Novice breath exercise practioners
                      </p>
                      <p
                        className='text-sm text-center'
                        style={{ color: 'var(--muted)' }}
                      >
                        Experimental group(N=10)
                      </p>
                      <p
                        className='text-sm text-center'
                        style={{ color: 'var(--muted)' }}
                      >
                        Control group(N=8)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 5: Key Features (4 Feature Sets) */}
      <RevealOnScroll>
        <section id='features' className='py-24 -mx-6 px-6 md:-mx-12 md:px-12'>
          <h2 {...styles.sectionTitle}>Key Features</h2>
          <p {...styles.sectionSubtitle}>
            This section highlights the core feature sets developed for the VR
            breathing intervention. The system was implemented using a
            feature-driven approach, with each feature set addressing a specific
            aspect of interaction, feedback, or narrative experience while
            maintaining consistency across experimental conditions.
          </p>

          <div className='space-y-16 max-w-5xl mx-auto'>
            {featureSets.map((set, index) => (
              <RevealOnScroll key={set.title}>
                {/* Special layout for Core Mechanics (index 1) - vertical with 2 gifs */}
                {index === 1 ? (
                  <div className='space-y-8'>
                    {/* Content on top */}
                    <div className='card-glass rounded-3xl p-8'>
                      <h3 {...styles.subsectionTitle}>{set.title}</h3>
                      <ul className='space-y-3 mb-6 list-disc list-inside marker:text-[var(--accent-600)]'>
                        {set.features.map((feature, idx) => (
                          <li key={idx} {...styles.bodyText}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className='mt-6 pt-6 border-t border-[var(--brand-scale-6-light)]'>
                        <h4
                          className='text-sm font-semibold mb-2'
                          style={{ color: 'var(--accent-600)' }}
                        >
                          Implementation:
                        </h4>
                        <p
                          {...styles.bodyText}
                          style={{ color: 'var(--muted)' }}
                        >
                          {set.implementation}
                        </p>
                      </div>
                    </div>

                    {/* Two images in grid below */}
                    <div className='grid md:grid-cols-2 gap-6'>
                      {set.visual.map((img, idx) => (
                        <div
                          key={idx}
                          className='card-glass rounded-3xl overflow-hidden'
                        >
                          <img
                            src={`/personal-portfolio/media/projects/fyp/${img}`}
                            alt={`${set.title} - ${idx + 1}`}
                            className='w-full h-auto'
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : index === 3 ? (
                  /* Special layout for Narrative (index 3) - vertical */
                  <div className='space-y-8'>
                    {/* Content on top */}
                    <div className='card-glass rounded-3xl p-8'>
                      <h3 {...styles.subsectionTitle}>{set.title}</h3>
                      <ul className='space-y-3 mb-6 list-disc list-inside marker:text-[var(--accent-600)]'>
                        {set.features.map((feature, idx) => (
                          <li key={idx} {...styles.bodyText}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className='mt-6 pt-6 border-t border-[var(--brand-scale-6-light)]'>
                        <h4
                          className='text-sm font-semibold mb-2'
                          style={{ color: 'var(--accent-600)' }}
                        >
                          Implementation:
                        </h4>
                        <p
                          {...styles.bodyText}
                          style={{ color: 'var(--muted)' }}
                        >
                          {set.implementation}
                        </p>
                      </div>
                    </div>

                    {/* Image on bottom */}
                    <div className='card-glass rounded-3xl overflow-hidden'>
                      <img
                        src={`/personal-portfolio/media/projects/fyp/${set.visual}`}
                        alt={set.title}
                        className='p-3 h-auto'
                      />
                    </div>
                  </div>
                ) : (
                  /* Default horizontal layout for other sets */
                  <div
                    className={`grid md:grid-cols-5 gap-8 items-stretch ${
                      index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Visual/GIF */}
                    <div
                      className={
                        index % 2 === 1
                          ? 'md:col-span-2 md:order-2 flex'
                          : 'md:col-span-2 flex'
                      }
                    >
                      <div className='card-glass rounded-3xl overflow-hidden sticky top-8 w-full h-full'>
                        <img
                          src={`/personal-portfolio/media/projects/fyp/${set.visual}`}
                          alt={set.title}
                          className='w-full h-full object-cover object-top'
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div
                      className={
                        index % 2 === 1
                          ? 'md:col-span-3 md:order-1'
                          : 'md:col-span-3'
                      }
                    >
                      <div className='card-glass rounded-3xl p-8'>
                        <h3 {...styles.subsectionTitle}>{set.title}</h3>
                        <ul className='space-y-3 mb-6 list-disc list-inside marker:text-[var(--accent-600)]'>
                          {set.features.map((feature, idx) => (
                            <li key={idx} {...styles.bodyText}>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className='mt-6 pt-6 border-t border-[var(--brand-scale-6-light)]'>
                          <h4
                            className='text-sm font-semibold mb-2'
                            style={{ color: 'var(--accent-600)' }}
                          >
                            Implementation:
                          </h4>
                          <p
                            {...styles.bodyText}
                            style={{ color: 'var(--muted)' }}
                          >
                            {set.implementation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 6: Experiment & Results */}
      <RevealOnScroll>
        <section id='results' className='py-24'>
          <h2 {...styles.sectionTitle}>Experiment & Results</h2>
          <p {...styles.sectionSubtitle}>
            This section presents how the VR breathing experience was evaluated
            and what was learned from user testing. A controlled study was
            conducted to assess both the relaxation effect of the breathing
            intervention and the impact of narrative on user engagement.
          </p>

          <div className='max-w-5xl mx-auto space-y-12'>
            {/* Experiment Photos */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='card-glass rounded-3xl overflow-hidden'>
                <div className='aspect-video bg-[var(--brand-scale-3-light)] flex items-center justify-center'>
                  <div className='text-center'>
                    <img
                      src='/personal-portfolio/media/projects/fyp/participant.webp'
                      alt='Traditional Breathing Exercise'
                      className='w-full h-full object-cover aspect-video'
                    />
                  </div>
                </div>
              </div>
              <div className='card-glass rounded-3xl overflow-hidden'>
                <div className='aspect-video bg-[var(--brand-scale-3-light)] flex items-center justify-center'>
                  <div className='text-center'>
                    <img
                      src='/personal-portfolio/media/projects/fyp/participant-move.gif'
                      alt='Traditional Breathing Exercise'
                      className='w-full h-full object-cover aspect-video'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Visualization */}
            <div className='space-y-8'>
              {keyFindings.map((finding, index) => (
                <div key={index} className='card-glass rounded-3xl p-8'>
                  <div className='flex items-start gap-4 mb-6'>
                    <h3 {...styles.subsectionTitle}>{finding.category}</h3>
                  </div>

                  {/* Charts - full width for single chart, 2 columns for multiple */}
                  <div
                    className={`grid ${
                      finding.charts.length > 1
                        ? 'md:grid-cols-2'
                        : 'grid-cols-1'
                    } gap-6 mb-6 ${
                      finding.charts.length === 1 ? 'max-w-3xl mx-auto' : ''
                    }`}
                  >
                    {finding.charts.map((chart, idx) => (
                      <div key={idx}>
                        <div className='rounded-2xl overflow-hidden mb-2'>
                          <img
                            src={`/personal-portfolio/media/projects/fyp/${chart.image}`}
                            alt={chart.caption}
                            className='w-full h-auto'
                          />
                        </div>
                        <p
                          className='text-sm text-center italic'
                          style={{ color: 'var(--muted)' }}
                        >
                          {chart.caption}
                        </p>
                      </div>
                    ))}
                  </div>

                  <ul className='space-y-3 list-disc list-inside marker:text-[var(--accent-600)]'>
                    {finding.findings.map((item, idx) => (
                      <li key={idx} {...styles.bodyText}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Summary */}
                  <div className='mt-6 pt-6 border-t border-[var(--brand-scale-6-light)]'>
                    <h4
                      className='text-sm font-semibold uppercase tracking-wider mb-3'
                      style={{ color: 'var(--accent-600)' }}
                    >
                      Interpretation:
                    </h4>
                    <p {...styles.bodyText}>{finding.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 8: Limitations & Future Work */}
      <RevealOnScroll>
        <section
          id='limitations'
          className='py-24 -mx-6 px-6 md:-mx-12 md:px-12'
        >
          <h2 {...styles.sectionTitle}>Limitations & Future Directions</h2>
          <p {...styles.sectionSubtitle}>
            This section reflects on the constraints encountered during the
            design and evaluation of the project and outlines potential
            directions for future development. While the study provided valuable
            insights into VR breathing interventions and narrative-driven
            engagement, several limitations highlight opportunities for
            refinement, expansion, and deeper investigation in future work.
          </p>

          <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8'>
            {/* Limitations */}
            <div className='card-glass rounded-3xl p-8'>
              <div className='flex items-start gap-4 mb-6'>
                <h3 {...styles.subsectionTitle}>Limitations</h3>
              </div>
              <ul className='space-y-3 list-disc list-inside marker:text-[var(--accent-600)]'>
                {limitations.map((item, idx) => (
                  <li key={idx} {...styles.bodyText}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Work */}
            <div className='card-glass rounded-3xl p-8'>
              <div className='flex items-start gap-4 mb-6'>
                <h3 {...styles.subsectionTitle}>Future Work</h3>
              </div>
              <ul className='space-y-3 list-disc list-inside marker:text-[var(--accent-600)]'>
                {futureWork.map((item, idx) => (
                  <li key={idx} {...styles.bodyText}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 9: Demo Video */}
      <RevealOnScroll>
        <section id='demo' className='py-24'>
          <div className='max-w-5xl mx-auto'>
            <div className='mb-8'>
              <h3
                className='text-sm tracking-widest uppercase mb-2'
                style={{ color: 'var(--accent-600)' }}
              >
                Showcase
              </h3>
              <h2
                className='text-3xl font-bold'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                System Demo Video
              </h2>
              <p className='mt-2' {...styles.bodyText}>
                Watch the FlowSpring VR breathing game in action, showcasing the
                narrative-driven experience and core breathing mechanics.
              </p>
            </div>

            <div className='card-glass rounded-3xl overflow-hidden shadow-lg'>
              <div className='relative w-full aspect-video'>
                <iframe
                  className='absolute inset-0 w-full h-full'
                  src='https://www.youtube.com/embed/dtDnn8Wxlbs?si=0oEQHqSsJUc00oZC'
                  title='FlowSpring Demo Video'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className='max-w-5xl mx-auto text-center mt-20'>
            <a
              href='https://drive.google.com/file/d/1MQndW8Tb6Qc5CpitQUSEgOqn-bO9kIqS/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              download
              className='inline-block px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 group'
              style={{
                fontFamily: 'Montserrat, sans-serif',
                borderColor: 'var(--accent-600)',
                color: 'var(--accent-600)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--accent-600)'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--accent-600)'
              }}
            >
              View Full Thesis
            </a>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  )

  return <BaseProjectDetail project={project} customSections={customSections} />
}
