import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BaseProjectDetail } from './BaseProjectDetail'
import { RevealOnScroll } from '../../components/RevealOnScroll'
import { StaggerReveal } from '../../components/StaggerReveal'
import { ProjectSidebar } from '../../components/ProjectSidebar'
import { LazyImage } from '../../components/LazyImage'
import { gameProjects } from '../../data/projects'

export const AvengerLegacyDetail = () => {
  const project = gameProjects.find(p => p.slug === '3d-adv')
  const [activeSystem, setActiveSystem] = useState('player-control')

  // Define sidebar sections
  const sidebarSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'role', label: 'My Role' },
    { id: 'systems', label: 'Core Systems' },
    { id: 'player-control', label: 'Player Control' },
    { id: 'parkour', label: 'Parkour System' },
    { id: 'combat', label: 'Combat System' },
    { id: 'targeting', label: 'Enemy Targeting' },
    { id: 'animation-events', label: 'Animation Events' },
    { id: 'vfx', label: 'VFX System' },
    { id: 'stealth', label: 'Stealth Mechanics' },
    { id: 'interaction', label: 'Environment Interaction' },
    { id: 'reflection', label: 'Reflection' }
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
    },
    cardTitle: {
      className: 'text-lg font-bold mb-3',
      style: { color: 'var(--accent-700)' }
    }
  }

  // Role & Responsibilities Data
  const roleData = {
    programming: [
      'Player locomotion system (walk, run, sneak, dodge roll)',
      'Parkour mechanics (jump, climb, vault, landing)',
      'Melee combat logic and enemy targeting',
      'Environment interaction system'
    ],
    animation: [
      'Animation blend trees for smooth state transitions',
      'Animation events for precise combat timing'
    ],
    vfx: [
      'Sword slash VFX system with timed effects'
    ],
    environment: [
      'Level 2 environment visual design',
      'Post-processing effects and atmosphere'
    ]
  }

  // Core Systems Data
  const coreSystems = [
    {
      id: 'player-control',
      title: 'Player Control',
      description: 'Movement states and input handling'
    },
    {
      id: 'parkour',
      title: 'Parkour System',
      description: 'Traversal mechanics and obstacle detection'
    },
    {
      id: 'combat',
      title: 'Combat System',
      description: 'Melee attacks and combo mechanics'
    },
    {
      id: 'targeting',
      title: 'Enemy Targeting',
      description: 'Lock-on and target switching logic'
    },
    {
      id: 'interaction',
      title: 'Environment Interaction',
      description: 'Item pickup and collection system'
    }
  ]

  // Player Control Data
  const playerControlData = {
    controls: [
      { key: 'WASD', action: 'Walk and Run' },
      { key: 'Q', action: 'Dodge Roll' },
      { key: 'C', action: 'Sneak' }
    ],
    states: [
      {
        name: 'Walk & Run',
        description: 'Uses Animation Blend Tree to smoothly blend between idle, walk, and run states based on player speed.',
        implementation: 'Speed-based blending (idle → walk → run)'
      },
      {
        name: 'Sneak',
        description: 'Separate blend tree for sneak idle and sneak movement, controlled by the Sneak() method.',
        implementation: 'Boolean state with speed-based animation blending'
      },
      {
        name: 'Dodge Roll',
        description: 'Player dodges forward while temporarily lowering collider height. Movement is locked during the action.',
        implementation: 'Coroutine-based with AnimationCurve for speed'
      }
    ]
  }

  // Parkour System Data
  const parkourData = {
    actions: ['Jump', 'High Jump', 'Climb', 'Vault', 'Landing'],
    features: [
      {
        title: 'Scriptable Objects',
        description: 'Define max/min obstacle height, obstacle tag, and target matching parameters'
      },
      {
        title: 'Ray Detection',
        description: 'Choose appropriate parkour action based on obstacle height detected by raycast'
      },
      {
        title: 'Ledge Check',
        description: 'Determines landing type (hard landing vs soft landing) based on fall distance'
      },
      {
        title: 'Climb Mechanics',
        description: 'Invisible box colliders on climb steps ensure height matches the climb action'
      }
    ]
  }

  // Combat System Data
  const combatData = {
    inputs: [
      { key: 'J', action: 'Activate Combat Mode' },
      { key: 'K', action: 'Deactivate Combat Mode' },
      { key: 'Left Click', action: 'Quick Attack (3 random variations)' },
      { key: 'Right Click', action: 'Combo Attack (2 random variations)' }
    ],
    logic: [
      'Disable player movement during combat action',
      'Slowly rotate player towards the enemy',
      'Choose attack type randomly based on input',
      'Perform attack animation and slash VFX',
      'Re-enable player movement after action'
    ]
  }

  // VFX System Data
  const vfxData = {
    structure: 'Slash class stores GameObject reference and delay time',
    quickSlashes: 3,
    comboSlashes: 2,
    implementation: 'Action-based VFX selection with delayed triggering synchronized to animation timing'
  }

  // Reflection Data
  const reflectionData = {
    learned: [
      'Deep understanding of animation-driven game systems and state machines',
      'Practical experience with raycast-based obstacle detection and scriptable objects',
      'How to balance responsive controls with animation fidelity',
      'Importance of modular design for combat and movement systems'
    ],
    challenges: [
      'Synchronizing animation events with gameplay mechanics for precise timing',
      'Balancing parkour detection sensitivity with player intention',
      'Integrating multiple systems (movement, combat, parkour) without conflicts'
    ],
    improvements: [
      'Add AI behavior trees for more sophisticated enemy responses',
      'Implement camera lock-on system for better combat flow',
      'Expand combo system with branching attack chains',
      'Add particle effects for environmental feedback'
    ]
  }

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
                <LazyImage
                  src='/personal-portfolio/media/projects/avenger/overview.webp'
                  alt='Avenger Legacy Game Overview'
                  className='w-full h-full object-cover aspect-video'
                />
              </div>
            </div>

            <div>
              <p className='mb-6' {...styles.bodyText}>
                <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                  Avenger Legacy
                </strong>{' '}
                is a third-person action-adventure game developed for the{' '}
                <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                  DMT319 Embedded Game Design and Development
                </strong>{' '}
                course final project. The game features a vampire lord on his
                revenge journey through an ancient civilization-themed world.
              </p>
              <p className='mb-6' {...styles.bodyText}>
                Players must escape from a dungeon, collect materials, build
                weapons, fight soldiers, and ultimately take revenge on the boss.
                The game showcases{' '}
                <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                  parkour traversal
                </strong>
                ,{' '}
                <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                  melee combat
                </strong>
                , and{' '}
                <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                  stealth-based interactions
                </strong>
                .
              </p>
              <div className='flex flex-wrap gap-3'>
                <span
                  className='px-4 py-2 rounded-full text-sm font-semibold'
                  style={{
                    backgroundColor: 'var(--accent-100)',
                    color: 'var(--accent-700)'
                  }}
                >
                  Unity
                </span>
                <span
                  className='px-4 py-2 rounded-full text-sm font-semibold'
                  style={{
                    backgroundColor: 'var(--accent-100)',
                    color: 'var(--accent-700)'
                  }}
                >
                  C#
                </span>
                <span
                  className='px-4 py-2 rounded-full text-sm font-semibold'
                  style={{
                    backgroundColor: 'var(--accent-100)',
                    color: 'var(--accent-700)'
                  }}
                >
                  Animator
                </span>
                <span
                  className='px-4 py-2 rounded-full text-sm font-semibold'
                  style={{
                    backgroundColor: 'var(--accent-100)',
                    color: 'var(--accent-700)'
                  }}
                >
                  VFX
                </span>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 2: My Role & Responsibilities */}
      <RevealOnScroll>
        <section id='role' className='py-20 -mx-6 px-6 md:-mx-12 md:px-12'>
          <h2 {...styles.sectionTitle}>My Role & Responsibilities</h2>
          <p {...styles.sectionSubtitle}>
            As a multi-disciplinary team member, I contributed across programming,
            animation, VFX, and environment art.
          </p>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Programming */}
            <div className='card-glass rounded-3xl p-6'>
              <div
                className='w-12 h-12 rounded-2xl flex items-center justify-center mb-4'
                style={{ background: 'var(--accent-100)' }}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='var(--accent-600)'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                  />
                </svg>
              </div>
              <h3
                className='text-xl font-bold mb-4'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Programming
              </h3>
              <ul className='space-y-2'>
                {roleData.programming.map((item, idx) => (
                  <li
                    key={idx}
                    className='text-sm flex items-start'
                    style={{ color: 'var(--muted)' }}
                  >
                    <span
                      className='mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Animation */}
            <div className='card-glass rounded-3xl p-6'>
              <div
                className='w-12 h-12 rounded-2xl flex items-center justify-center mb-4'
                style={{ background: 'var(--accent-100)' }}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='var(--accent-600)'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3
                className='text-xl font-bold mb-4'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Animation
              </h3>
              <ul className='space-y-2'>
                {roleData.animation.map((item, idx) => (
                  <li
                    key={idx}
                    className='text-sm flex items-start'
                    style={{ color: 'var(--muted)' }}
                  >
                    <span
                      className='mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* VFX */}
            <div className='card-glass rounded-3xl p-6'>
              <div
                className='w-12 h-12 rounded-2xl flex items-center justify-center mb-4'
                style={{ background: 'var(--accent-100)' }}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='var(--accent-600)'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>
              </div>
              <h3
                className='text-xl font-bold mb-4'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                VFX Design
              </h3>
              <ul className='space-y-2'>
                {roleData.vfx.map((item, idx) => (
                  <li
                    key={idx}
                    className='text-sm flex items-start'
                    style={{ color: 'var(--muted)' }}
                  >
                    <span
                      className='mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Environment Art */}
            <div className='card-glass rounded-3xl p-6'>
              <div
                className='w-12 h-12 rounded-2xl flex items-center justify-center mb-4'
                style={{ background: 'var(--accent-100)' }}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='var(--accent-600)'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3
                className='text-xl font-bold mb-4'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Environment Art
              </h3>
              <ul className='space-y-2'>
                {roleData.environment.map((item, idx) => (
                  <li
                    key={idx}
                    className='text-sm flex items-start'
                    style={{ color: 'var(--muted)' }}
                  >
                    <span
                      className='mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 3: Core Gameplay Systems */}
      <RevealOnScroll>
        <section id='systems' className='py-20'>
          <h2 {...styles.sectionTitle}>Core Gameplay Systems</h2>
          <p {...styles.sectionSubtitle}>
            Technical breakdown of the main systems powering the gameplay experience.
          </p>

          <StaggerReveal staggerDelay={100}>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
              {coreSystems.map((system, index) => (
                <a
                  key={system.id}
                  href={`#${system.id}`}
                  className='stagger-item card-glass rounded-2xl p-5 transition-all duration-300 hover:scale-105'
                  style={{
                    borderLeft: '3px solid var(--accent-600)'
                  }}
                >
                  <h4
                    className='text-base font-bold mb-2'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    {system.title}
                  </h4>
                  <p
                    className='text-xs'
                    style={{ color: 'var(--muted)' }}
                  >
                    {system.description}
                  </p>
                </a>
              ))}
            </div>
          </StaggerReveal>
        </section>
      </RevealOnScroll>

      {/* Section 4: Player Control System */}
      <RevealOnScroll>
        <section id='player-control' className='py-20 -mx-6 px-6 md:-mx-12 md:px-12'>
          <h2 {...styles.sectionTitle}>Player Control System</h2>
          <p {...styles.sectionSubtitle}>
            Walk, Run, Dodge Roll, Sneak - A responsive movement system built on
            animation blend trees and state management.
          </p>

          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            {/* Controls */}
            <div className='card-glass rounded-3xl p-8'>
              <h3 {...styles.subsectionTitle}>Keyboard Controls</h3>
              <div className='grid grid-cols-2 gap-4'>
                {playerControlData.controls.map((control, idx) => (
                  <div
                    key={idx}
                    className='flex items-center gap-3 p-3 rounded-xl'
                    style={{ background: 'var(--brand-scale-3-light)' }}
                  >
                    <span
                      className='px-3 py-1 rounded font-mono font-bold text-sm'
                      style={{
                        background: 'var(--accent-600)',
                        color: 'white'
                      }}
                    >
                      {control.key}
                    </span>
                    <span
                      className='text-sm'
                      style={{ color: 'var(--muted)' }}
                    >
                      {control.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Movement Demo */}
            <div className='card-glass rounded-3xl overflow-hidden'>
              <LazyImage
                src='/personal-portfolio/media/projects/avenger/player_control.webp'
                alt='Player Control Animation Blend Tree'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* State Details */}
          <div className='grid md:grid-cols-3 gap-6'>
            {playerControlData.states.map((state, idx) => (
              <div key={idx} className='card-glass rounded-3xl p-6'>
                <h4
                  className='text-xl font-bold mb-3'
                  style={{ color: 'var(--brand-scale-12-light)' }}
                >
                  {state.name}
                </h4>
                <p
                  className='text-sm mb-4'
                  style={{ color: 'var(--muted)' }}
                >
                  {state.description}
                </p>
                <div
                  className='text-xs px-3 py-2 rounded-lg'
                  style={{
                    background: 'var(--brand-scale-3-light)',
                    color: 'var(--accent-600)'
                  }}
                >
                  {state.implementation}
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 5: Parkour System */}
      <RevealOnScroll>
        <section id='parkour' className='py-20'>
          <h2 {...styles.sectionTitle}>Parkour System</h2>
          <p {...styles.sectionSubtitle}>
            Jump, High Jump, Climb, Vault, Landing - Dynamic traversal mechanics
            powered by scriptable objects and raycast detection.
          </p>

          <div className='grid md:grid-cols-5 gap-8 mb-12'>
            {/* Actions Grid */}
            <div className='md:col-span-2'>
              <h3 {...styles.subsectionTitle}>Supported Actions</h3>
              <div className='flex flex-wrap gap-3 mb-8'>
                {parkourData.actions.map((action, idx) => (
                  <span
                    key={idx}
                    className='px-4 py-2 rounded-full text-sm font-semibold'
                    style={{
                      background: 'var(--accent-100)',
                      color: 'var(--accent-700)'
                    }}
                  >
                    {action}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className='space-y-4'>
                {parkourData.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className='p-4 rounded-2xl'
                    style={{ background: 'var(--brand-scale-3-light)' }}
                  >
                    <h4
                      className='font-bold text-sm mb-1'
                      style={{ color: 'var(--accent-600)' }}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className='text-sm'
                      style={{ color: 'var(--muted)' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Parkour Demo */}
            <div className='md:col-span-3 card-glass rounded-3xl overflow-hidden'>
              <LazyImage
                src='/personal-portfolio/media/projects/avenger/parkour_system.webp'
                alt='Parkour System Animation State Machine'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* Climb Mechanics Implementation */}
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='card-glass rounded-3xl overflow-hidden'>
              <LazyImage
                src='/personal-portfolio/media/projects/avenger/climb_colliders.webp'
                alt='Climb mechanics with invisible colliders'
                className='w-full h-auto'
              />
            </div>
            <div className='card-glass rounded-3xl p-8 flex flex-col justify-center'>
              <h3 {...styles.subsectionTitle}>Climb Mechanics Implementation</h3>
              <p {...styles.bodyText}>
                To implement climbing on the mountain to collect holy water, invisible
                box colliders are placed on climb steps. The height of each collider is
                carefully adjusted to match the climb action animation, ensuring smooth
                and believable traversal.
              </p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 6: Melee Combat System */}
      <RevealOnScroll>
        <section id='combat' className='py-20 -mx-6 px-6 md:-mx-12 md:px-12'>
          <h2 {...styles.sectionTitle}>Melee Combat System</h2>
          <p {...styles.sectionSubtitle}>
            Quick attacks, combo attacks, and combat mode switching - A responsive
            combat system with randomized attack variations.
          </p>

          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            {/* Combat Inputs */}
            <div className='card-glass rounded-3xl p-8'>
              <h3 {...styles.subsectionTitle}>Combat Inputs</h3>
              <div className='space-y-3'>
                {combatData.inputs.map((input, idx) => (
                  <div
                    key={idx}
                    className='flex items-center gap-4 p-3 rounded-xl'
                    style={{ background: 'var(--brand-scale-3-light)' }}
                  >
                    <span
                      className='px-3 py-1 rounded font-mono font-bold text-xs min-w-[100px] text-center'
                      style={{
                        background: 'var(--accent-600)',
                        color: 'white'
                      }}
                    >
                      {input.key}
                    </span>
                    <span
                      className='text-sm'
                      style={{ color: 'var(--muted)' }}
                    >
                      {input.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Combat Logic */}
            <div className='card-glass rounded-3xl p-8'>
              <h3 {...styles.subsectionTitle}>Combat Logic Flow</h3>
              <ol className='space-y-3'>
                {combatData.logic.map((step, idx) => (
                  <li
                    key={idx}
                    className='flex items-start gap-3'
                  >
                    <span
                      className='w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold'
                      style={{
                        background: 'var(--accent-600)',
                        color: 'white'
                      }}
                    >
                      {idx + 1}
                    </span>
                    <span
                      className='text-sm'
                      style={{ color: 'var(--muted)' }}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Combat Animation State Machine */}
          <div className='card-glass rounded-3xl overflow-hidden'>
            <LazyImage
              src='/personal-portfolio/media/projects/avenger/combat_animator.webp'
              alt='Combat Animation State Machine'
              className='w-full h-auto'
            />
          </div>

          {/* Attack Types */}
          <div className='grid md:grid-cols-2 gap-8 mt-8'>
            <div className='card-glass rounded-3xl p-8'>
              <h4
                className='text-xl font-bold mb-4'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Quick Attack
              </h4>
              <p className='text-sm mb-4' style={{ color: 'var(--muted)' }}>
                Triggered by left mouse click. Randomly selects from 3 different
                quick attack animations for variety.
              </p>
              <LazyImage
                src='/personal-portfolio/media/projects/avenger/quick_attack.webp'
                alt='Quick Attack variations'
                className='w-full h-auto rounded-2xl'
              />
            </div>

            <div className='card-glass rounded-3xl p-8'>
              <h4
                className='text-xl font-bold mb-4'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Combo Attack
              </h4>
              <p className='text-sm mb-4' style={{ color: 'var(--muted)' }}>
                Triggered by right mouse click. Randomly selects from 2 different
                combo attack animations for powerful strikes.
              </p>
              <LazyImage
                src='/personal-portfolio/media/projects/avenger/combo_attack.webp'
                alt='Combo Attack variations'
                className='w-full h-auto rounded-2xl'
              />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 7: Enemy Targeting & Lock-on */}
      <RevealOnScroll>
        <section id='targeting' className='py-20'>
          <h2 {...styles.sectionTitle}>Enemy Targeting & Lock-on</h2>
          <p {...styles.sectionSubtitle}>
            Direction-based closest enemy detection with visual indicators for
            combat usability.
          </p>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='card-glass rounded-3xl p-8'>
              <h3 {...styles.subsectionTitle}>Targeting System Features</h3>
              <ul className='space-y-4'>
                <li className='flex items-start gap-3'>
                  <span
                    className='w-2 h-2 rounded-full mt-2 flex-shrink-0'
                    style={{ background: 'var(--accent-600)' }}
                  />
                  <div>
                    <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                      Scene Registration
                    </strong>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      At start, TargetEnemyInScene() finds all enemies with
                      enemyBasic script and adds them to a tracking list.
                    </p>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <span
                    className='w-2 h-2 rounded-full mt-2 flex-shrink-0'
                    style={{ background: 'var(--accent-600)' }}
                  />
                  <div>
                    <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                      Direction Detection
                    </strong>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      GetEnemyDirection() is called every 0.1 seconds to check
                      enemy direction relative to player.
                    </p>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <span
                    className='w-2 h-2 rounded-full mt-2 flex-shrink-0'
                    style={{ background: 'var(--accent-600)' }}
                  />
                  <div>
                    <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                      Closest Enemy Selection
                    </strong>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      GetClosestEnemyInDirection() uses dot product to find the
                      enemy most aligned with player's facing direction.
                    </p>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <span
                    className='w-2 h-2 rounded-full mt-2 flex-shrink-0'
                    style={{ background: 'var(--accent-600)' }}
                  />
                  <div>
                    <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                      Visual Indicator
                    </strong>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      Target indicator appears above the enemy when player faces
                      them, providing clear feedback for combat.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className='card-glass rounded-3xl overflow-hidden'>
              <LazyImage
                src='/personal-portfolio/media/projects/avenger/target_indicator.webp'
                alt='Enemy targeting with visual indicator'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 8: Animation Event-Driven Combat */}
      <RevealOnScroll>
        <section id='animation-events' className='py-20 -mx-6 px-6 md:-mx-12 md:px-12'>
          <h2 {...styles.sectionTitle}>Animation Event-Driven Combat</h2>
          <p {...styles.sectionSubtitle}>
            Precise timing control using animation events to synchronize damage
            dealing and state resets with attack animations.
          </p>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='card-glass rounded-3xl p-8'>
              <h3 {...styles.subsectionTitle}>Why Animation Events?</h3>
              <p className='mb-6' {...styles.bodyText}>
                Instead of using timers, animation events allow for precise control
                over when gameplay actions occur during combat animations. This
                ensures damage is dealt exactly when the sword visually connects.
              </p>

              <div className='space-y-4'>
                <div
                  className='p-4 rounded-2xl'
                  style={{ background: 'var(--brand-scale-3-light)' }}
                >
                  <h4
                    className='font-bold text-sm mb-2'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    PerformAttackAction()
                  </h4>
                  <p className='text-sm' style={{ color: 'var(--muted)' }}>
                    Triggered at the impact frame of the attack animation. Detects
                    enemies in range using Physics.OverlapSphere and applies damage.
                  </p>
                </div>

                <div
                  className='p-4 rounded-2xl'
                  style={{ background: 'var(--brand-scale-3-light)' }}
                >
                  <h4
                    className='font-bold text-sm mb-2'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    ResetAttack()
                  </h4>
                  <p className='text-sm' style={{ color: 'var(--muted)' }}>
                    Called at the end of attack animation. Resets all animation
                    booleans to false and re-enables player movement control.
                  </p>
                </div>
              </div>
            </div>

            <div className='card-glass rounded-3xl overflow-hidden'>
              <LazyImage
                src='/personal-portfolio/media/projects/avenger/animation_events.webp'
                alt='Animation events on attack timeline'
                className='w-full h-auto'
              />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 9: VFX System */}
      <RevealOnScroll>
        <section id='vfx' className='py-20'>
          <h2 {...styles.sectionTitle}>Sword Slash VFX System</h2>
          <p {...styles.sectionSubtitle}>
            Data-driven visual effects system with timed slash effects synchronized
            to attack animations.
          </p>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='card-glass rounded-3xl p-8'>
              <h3 {...styles.subsectionTitle}>VFX Architecture</h3>
              <p className='mb-6' {...styles.bodyText}>
                Different slash effects are managed for different attack actions.
                Each effect is stored in a Slash class containing the GameObject
                reference and delay time.
              </p>

              <div
                className='p-4 rounded-2xl font-mono text-sm mb-6'
                style={{
                  background: 'var(--brand-scale-3-light)',
                  color: 'var(--accent-600)'
                }}
              >
                <pre>{`[System.Serializable]
public class Slash {
    public GameObject slashObj;
    public float delay;
}`}</pre>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div
                  className='p-4 rounded-xl text-center'
                  style={{ background: 'var(--accent-100)' }}
                >
                  <div
                    className='text-3xl font-bold'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    3
                  </div>
                  <div
                    className='text-sm'
                    style={{ color: 'var(--accent-700)' }}
                  >
                    Quick Slash VFX
                  </div>
                </div>
                <div
                  className='p-4 rounded-xl text-center'
                  style={{ background: 'var(--accent-100)' }}
                >
                  <div
                    className='text-3xl font-bold'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    2
                  </div>
                  <div
                    className='text-sm'
                    style={{ color: 'var(--accent-700)' }}
                  >
                    Combo Slash VFX
                  </div>
                </div>
              </div>
            </div>

            <div className='card-glass rounded-3xl overflow-hidden'>
              <LazyImage
                src='/personal-portfolio/media/projects/avenger/slash_vfx.webp'
                alt='Sword slash VFX in action'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 10: Stealth & Back Stabbing */}
      <RevealOnScroll>
        <section id='stealth' className='py-20 -mx-6 px-6 md:-mx-12 md:px-12'>
          <h2 {...styles.sectionTitle}>Stealth & Back Stabbing</h2>
          <p {...styles.sectionSubtitle}>
            Sneak past enemies undetected and perform devastating back stab attacks
            for high damage rewards.
          </p>

          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 {...styles.subsectionTitle}>Stealth Mechanics</h3>
              <ul className='space-y-4'>
                <li className='flex items-start gap-3'>
                  <span
                    className='w-2 h-2 rounded-full mt-2 flex-shrink-0'
                    style={{ background: 'var(--accent-600)' }}
                  />
                  <div>
                    <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                      Sneak State
                    </strong>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      Player moves quietly to avoid enemy detection while in
                      sneak mode.
                    </p>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <span
                    className='w-2 h-2 rounded-full mt-2 flex-shrink-0'
                    style={{ background: 'var(--accent-600)' }}
                  />
                  <div>
                    <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                      Back Stab Trigger
                    </strong>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      When approaching an enemy from behind while undetected,
                      player can perform a back stab attack.
                    </p>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <span
                    className='w-2 h-2 rounded-full mt-2 flex-shrink-0'
                    style={{ background: 'var(--accent-600)' }}
                  />
                  <div>
                    <strong style={{ color: 'var(--brand-scale-12-light)' }}>
                      High Damage Reward
                    </strong>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      Successful stealth attacks deal significantly more damage,
                      rewarding patient and tactical play.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className='card-glass rounded-3xl overflow-hidden'>
              <LazyImage
                src='/personal-portfolio/media/projects/avenger/backstab.webp'
                alt='Back stabbing mechanic'
                className='w-full h-auto'
              />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 11: Environment Interaction */}
      <RevealOnScroll>
        <section id='interaction' className='py-20'>
          <h2 {...styles.sectionTitle}>Environment Interaction System</h2>
          <p {...styles.sectionSubtitle}>
            Pickup items, collect resources, and manage inventory through an
            intuitive interaction system.
          </p>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='card-glass rounded-3xl p-8'>
              <h3 {...styles.subsectionTitle}>Collectible Items</h3>
              <div className='flex flex-wrap gap-3 mb-6'>
                <span
                  className='px-4 py-2 rounded-full text-sm font-semibold'
                  style={{
                    background: 'var(--accent-100)',
                    color: 'var(--accent-700)'
                  }}
                >
                  Wood
                </span>
                <span
                  className='px-4 py-2 rounded-full text-sm font-semibold'
                  style={{
                    background: 'var(--accent-100)',
                    color: 'var(--accent-700)'
                  }}
                >
                  Holy Water
                </span>
                <span
                  className='px-4 py-2 rounded-full text-sm font-semibold'
                  style={{
                    background: 'var(--accent-100)',
                    color: 'var(--accent-700)'
                  }}
                >
                  Stone
                </span>
              </div>

              <h4
                className='font-bold mb-3'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                System Features
              </h4>
              <ul className='space-y-3'>
                <li
                  className='text-sm flex items-start'
                  style={{ color: 'var(--muted)' }}
                >
                  <span
                    className='mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                    style={{ backgroundColor: 'var(--accent-600)' }}
                  />
                  Timed collection mechanic for holy water
                </li>
                <li
                  className='text-sm flex items-start'
                  style={{ color: 'var(--muted)' }}
                >
                  <span
                    className='mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                    style={{ backgroundColor: 'var(--accent-600)' }}
                  />
                  Progress UI showing collection status
                </li>
                <li
                  className='text-sm flex items-start'
                  style={{ color: 'var(--muted)' }}
                >
                  <span
                    className='mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                    style={{ backgroundColor: 'var(--accent-600)' }}
                  />
                  Success text feedback on completion
                </li>
                <li
                  className='text-sm flex items-start'
                  style={{ color: 'var(--muted)' }}
                >
                  <span
                    className='mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                    style={{ backgroundColor: 'var(--accent-600)' }}
                  />
                  Inventory registration for collected items
                </li>
              </ul>
            </div>

            <div className='card-glass rounded-3xl overflow-hidden'>
              <LazyImage
                src='/personal-portfolio/media/projects/avenger/item_pickup.webp'
                alt='Item pickup and collection UI'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 12: Reflection & What I Learned */}
      <RevealOnScroll>
        <section id='reflection' className='py-20 -mx-6 px-6 md:-mx-12 md:px-12'>
          <h2 {...styles.sectionTitle}>Reflection & What I Learned</h2>
          <p {...styles.sectionSubtitle}>
            Key takeaways from developing this action-adventure game.
          </p>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* What I Learned */}
            <div className='card-glass rounded-3xl p-8'>
              <div
                className='w-12 h-12 rounded-2xl flex items-center justify-center mb-4'
                style={{ background: 'var(--accent-100)' }}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='var(--accent-600)'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                  />
                </svg>
              </div>
              <h3
                className='text-xl font-bold mb-4'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                What I Learned
              </h3>
              <ul className='space-y-3'>
                {reflectionData.learned.map((item, idx) => (
                  <li
                    key={idx}
                    className='text-sm flex items-start'
                    style={{ color: 'var(--muted)' }}
                  >
                    <span
                      className='mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className='card-glass rounded-3xl p-8'>
              <div
                className='w-12 h-12 rounded-2xl flex items-center justify-center mb-4'
                style={{ background: 'var(--accent-100)' }}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='var(--accent-600)'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
              </div>
              <h3
                className='text-xl font-bold mb-4'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Challenges Faced
              </h3>
              <ul className='space-y-3'>
                {reflectionData.challenges.map((item, idx) => (
                  <li
                    key={idx}
                    className='text-sm flex items-start'
                    style={{ color: 'var(--muted)' }}
                  >
                    <span
                      className='mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div className='card-glass rounded-3xl p-8'>
              <div
                className='w-12 h-12 rounded-2xl flex items-center justify-center mb-4'
                style={{ background: 'var(--accent-100)' }}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='var(--accent-600)'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                  />
                </svg>
              </div>
              <h3
                className='text-xl font-bold mb-4'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Future Improvements
              </h3>
              <ul className='space-y-3'>
                {reflectionData.improvements.map((item, idx) => (
                  <li
                    key={idx}
                    className='text-sm flex items-start'
                    style={{ color: 'var(--muted)' }}
                  >
                    <span
                      className='mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  )

  return <BaseProjectDetail project={project} customSections={customSections} />
}
