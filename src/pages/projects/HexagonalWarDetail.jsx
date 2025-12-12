import { BaseProjectDetail } from './BaseProjectDetail'
import { RevealOnScroll } from '../../components/RevealOnScroll'
import { gameProjects } from '../../data/projects'
import { StaggerReveal } from '../../components/StaggerReveal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

/**
 * Customized Project Detail Page for Hexagonal War: Chemical Crisis
 * This demonstrates how to create a unique, customized page while using the base structure
 */
export const HexagonalWarDetail = () => {
  const project = gameProjects.find(p => p.slug === 'hexagonal-war')

  // Card showcase state
  const [activeCategory, setActiveCategory] = useState('Destruction')
  const [activeSubcategory, setActiveSubcategory] = useState('Fire')

  // Card data configuration
  const cardData = {
    Destruction: {
      subcategories: ['Fire', 'Acid'],
      bgColor: '#2d1810',
      description:
        'Cards used to generate fire or acid in safe areas for strategic advantages',
      cards: {
        Fire: [
          {
            id: 1,
            name: 'Fire Card 1',
            image: '/personal-portfolio/media/projects/hex/cards/fire-1.webp'
          },
          {
            id: 2,
            name: 'Fire Card 2',
            image: '/personal-portfolio/media/projects/hex/cards/fire-2.webp'
          },
          {
            id: 3,
            name: 'Fire Card 3',
            image: '/personal-portfolio/media/projects/hex/cards/fire-3.webp'
          },
          {
            id: 4,
            name: 'Fire Card 4',
            image: '/personal-portfolio/media/projects/hex/cards/fire-4.webp'
          }
        ],
        Acid: [
          {
            id: 5,
            name: 'Acid Card 1',
            image: '/personal-portfolio/media/projects/hex/cards/acid-1.webp'
          },
          {
            id: 6,
            name: 'Acid Card 2',
            image: '/personal-portfolio/media/projects/hex/cards/acid-2.webp'
          },
          {
            id: 7,
            name: 'Acid Card 3',
            image: '/personal-portfolio/media/projects/hex/cards/acid-3.webp'
          }
        ]
      }
    },
    Salvation: {
      subcategories: ['Fire Extinguisher', 'Acid Elimination'],
      bgColor: '#1a2d3d',
      description:
        'Cards used to neutralize or eliminate hazards and protect players',
      cards: {
        'Fire Extinguisher': [
          {
            id: 8,
            name: 'Extinguisher 1',
            image:
              '/personal-portfolio/media/projects/hex/cards/extinguisher-1.webp'
          },
          {
            id: 9,
            name: 'Extinguisher 2',
            image:
              '/personal-portfolio/media/projects/hex/cards/extinguisher-2.webp'
          },
          {
            id: 10,
            name: 'Extinguisher 3',
            image:
              '/personal-portfolio/media/projects/hex/cards/extinguisher-3.webp'
          },
          {
            id: 11,
            name: 'Extinguisher 4',
            image:
              '/personal-portfolio/media/projects/hex/cards/extinguisher-4.webp'
          }
        ],
        'Acid Elimination': [
          {
            id: 12,
            name: 'Elimination 1',
            image:
              '/personal-portfolio/media/projects/hex/cards/elimination-1.webp'
          },
          {
            id: 13,
            name: 'Elimination 2',
            image:
              '/personal-portfolio/media/projects/hex/cards/elimination-2.webp'
          },
          {
            id: 14,
            name: 'Elimination 3',
            image:
              '/personal-portfolio/media/projects/hex/cards/elimination-3.webp'
          }
        ]
      }
    },
    Item: {
      subcategories: [],
      bgColor: '#2d2516',
      description:
        'Special items used to create bombs and other tactical equipment',
      cards: {
        default: [
          {
            id: 15,
            name: 'Item 1',
            image: '/personal-portfolio/media/projects/hex/cards/item-1.webp'
          },
          {
            id: 16,
            name: 'Item 2',
            image: '/personal-portfolio/media/projects/hex/cards/item-2.webp'
          }
        ]
      }
    },
    Skill: {
      subcategories: [],
      bgColor: '#6F531B',
      description:
        'Unique abilities that give players special powers and actions',
      cards: {
        default: [
          {
            id: 16,
            name: 'Skill 1',
            image: '/personal-portfolio/media/projects/hex/cards/skill-1.webp'
          },
          {
            id: 17,
            name: 'Skill 2',
            image: '/personal-portfolio/media/projects/hex/cards/skill-2.webp'
          },
          {
            id: 18,
            name: 'Skill 3',
            image: '/personal-portfolio/media/projects/hex/cards/skill-3.webp'
          }
        ]
      }
    }
  }

  // Get current cards based on selection
  const getCurrentCards = () => {
    const category = cardData[activeCategory]
    if (category.subcategories.length > 0) {
      return category.cards[activeSubcategory] || []
    }
    return category.cards.default || []
  }

  const currentBgColor = cardData[activeCategory]?.bgColor || '#1a1a1a'

  // Reusable style definitions for modular components
  const styles = {
    sectionTitle: {
      className: 'text-xl md:text-2xl font-bold mb-4',
      style: { color: 'var(--brand-scale-12-light)' }
    },
    sectionSubtitle: {
      className: 'text-lg mb-12',
      style: { color: 'var(--muted)' }
    },
    bodyText: {
      className: 'text-lg leading-relaxed',
      style: { color: 'var(--muted)' }
    },
    cardTitle: {
      className: 'text-lg font-bold mb-3',
      style: { color: 'var(--accent-700)' }
    },
    cardBody: {
      className: 'space-y-2 text-sm',
      style: { color: 'var(--muted)' }
    },
    bulletPoint: {
      className: 'mr-3 mt-1 w-2 h-2 rounded-sm flex-shrink-0',
      style: { backgroundColor: 'var(--accent-600)' }
    }
  }

  const gameStartRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: gameStartRef,
    offset: ['start end', 'end start']
  })
  // 用于标题淡出：0 = section 顶部刚碰到视口顶部；1 = section 完全滚出视口底部
  const { scrollYProgress: titleProgress } = useScroll({
    target: gameStartRef,
    offset: ['start start', 'end end']
  })

  // Synchronized animation: illustration layers + bullet points appear together
  // Phase 1: All 4 bullets and 3 layers appear during first 50% of scroll

  // Bullet 1 - Base image (visible from start, appears early in scroll)
  const bullet1Opacity = useTransform(scrollYProgress, [0.15, 0.22], [0, 1])
  const bullet1Y = useTransform(scrollYProgress, [0.15, 0.22], [20, 0])

  // Bullet 2 + Layer 1
  const bullet2Opacity = useTransform(scrollYProgress, [0.28, 0.35], [0, 1])
  const bullet2Y = useTransform(scrollYProgress, [0.28, 0.35], [20, 0])
  const layer1Opacity = useTransform(scrollYProgress, [0.28, 0.35], [0, 1])
  const layer1Y = useTransform(scrollYProgress, [0.28, 0.35], [30, 0])

  // Bullet 3 + Layer 2
  const bullet3Opacity = useTransform(scrollYProgress, [0.4, 0.47], [0, 1])
  const bullet3Y = useTransform(scrollYProgress, [0.4, 0.47], [20, 0])
  const layer2Opacity = useTransform(scrollYProgress, [0.4, 0.47], [0, 1])
  const layer2Y = useTransform(scrollYProgress, [0.4, 0.47], [30, 0])

  // Bullet 4 + Layer 3
  const bullet4Opacity = useTransform(scrollYProgress, [0.52, 0.6], [0, 1])
  const bullet4Y = useTransform(scrollYProgress, [0.52, 0.6], [20, 0])
  const layer3Opacity = useTransform(scrollYProgress, [0.52, 0.6], [0, 1])
  const layer3Y = useTransform(scrollYProgress, [0.52, 0.6], [30, 0])

  // Phase 2: Step cards transition - one at a time in center
  // Step 1: visible from start, fades out after animations complete (after 60%)
  const step1Opacity = useTransform(scrollYProgress, [0, 0.6, 0.65], [1, 1, 0])
  const step1Y = useTransform(scrollYProgress, [0, 0.6, 0.65], [0, 0, -60])

  // Step 2: appears in center after Step 1 exits, then exits
  const step2Opacity = useTransform(
    scrollYProgress,
    [0.66, 0.7, 0.78, 0.82],
    [0, 1, 1, 0]
  )
  const step2Y = useTransform(
    scrollYProgress,
    [0.66, 0.7, 0.78, 0.82],
    [60, 0, 0, -60]
  )

  // Step 3: appears in center after Step 2 exits, stays visible
  const step3Opacity = useTransform(scrollYProgress, [0.83, 0.88, 1], [0, 1, 1])
  const step3Y = useTransform(scrollYProgress, [0.83, 0.88, 1], [60, 0, 0])

  // 0 ~ 0.75：保持不动；0.75 之后开始往上淡出
  // 0 ~ 0.9 都保持 1，0.9 之后才开始淡出
  const titleOpacity = useTransform(
    titleProgress,
    [0, 0.9, 0.97, 1],
    [1, 1, 0, 0]
  )

  // 0.9 之后才开始往上抬
  const titleY = useTransform(titleProgress, [0.9, 0.97, 1], [0, -40, -60])

  // Custom sections for this specific project
  const customSections = (
    <>
      {/* inspiration Section*/}
      <StaggerReveal>
        <div className='grid md:grid-cols-2 gap-6 mt-20 items-center'>
          {/*Left Cover*/}
          <div
            className='relative rounded-3xl overflow-hidden p-6 flex items-end min-h-[400px]'
            style={{
              background: 'var(--brand-scale-3-light)'
            }}
          >
            <img
              src='/personal-portfolio/media/projects/hex/hex_cover.webp'
              alt='hex_cover'
              className='w-full h-full object-contain'
            />
          </div>
          {/*Right Content*/}
          <div>
            <div className='p-6 items-center'>
              <h3
                className={styles.sectionTitle.className}
                style={styles.sectionTitle.style}
              >
                Inspiration
              </h3>
              <p
                className={styles.bodyText.className}
                style={styles.bodyText.style}
              >
                This board game was inspired by the challenge of making abstract
                chemistry concepts engaging and intuitive for students.
                Traditional learning often isolates formulas and theory from
                real-life application, making it hard for learners to connect
                with the subject. We wanted to design a board game that
                transforms chemistry learning into an immersive experience.
              </p>
            </div>
          </div>
        </div>
      </StaggerReveal>

      {/* The Game Reference Section */}
      <RevealOnScroll>
        <div className='mt-20'>
          <h3
            className={styles.sectionTitle.className}
            style={styles.sectionTitle.style}
          >
            Game References
          </h3>
          <p
            className={styles.sectionSubtitle.className}
            style={styles.sectionSubtitle.style}
          >
            I was involved in the product strategy and co-led the end-to-end
            design ownership of the product.
          </p>

          {/* Process Blocks */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {/* Block 1 */}
            <div className='card-glass rounded-3xl overflow-hidden flex flex-col'>
              {/* Photo */}
              <div className='relative bg-[#f2d7d7]/30 h-48'>
                <img
                  src='/personal-portfolio/media/projects/hex/hex_ref_catan.webp'
                  alt='Process reference 1'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Divider */}
              <div className='h-px bg-gradient-to-r from-transparent via-[var(--accent-300)] to-transparent'></div>

              {/* Content */}
              <div className='p-4 flex flex-col flex-1'>
                <h3
                  className={styles.cardTitle.className}
                  style={styles.cardTitle.style}
                >
                  Catan
                </h3>
                <ul
                  className={styles.cardBody.className}
                  style={styles.cardBody.style}
                >
                  <li className='flex items-start'>
                    <span
                      className={styles.bulletPoint.className}
                      style={styles.bulletPoint.style}
                    ></span>
                    <span>Resource trading</span>
                  </li>
                  <li className='flex items-start'>
                    <span
                      className={styles.bulletPoint.className}
                      style={styles.bulletPoint.style}
                    ></span>
                    <span>Area Control</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Block 2 */}
            <div className='card-glass rounded-3xl overflow-hidden flex flex-col'>
              {/* Photo */}
              <div className='relative bg-[#f2d7d7]/30 h-48'>
                <img
                  src='/personal-portfolio/media/projects/hex/hex_ref_heart.webp'
                  alt='Process reference 2'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Divider */}
              <div className='h-px bg-gradient-to-r from-transparent via-[var(--accent-300)] to-transparent'></div>

              {/* Content */}
              <div className='p-4 flex flex-col flex-1'>
                <h3
                  className={styles.cardTitle.className}
                  style={styles.cardTitle.style}
                >
                  Halli Galli
                </h3>
                <ul
                  className={styles.cardBody.className}
                  style={styles.cardBody.style}
                >
                  <li className='flex items-start'>
                    <span
                      className={styles.bulletPoint.className}
                      style={styles.bulletPoint.style}
                    ></span>
                    <span>Fast game pace</span>
                  </li>
                  <li className='flex items-start'>
                    <span
                      className={styles.bulletPoint.className}
                      style={styles.bulletPoint.style}
                    ></span>
                    <span>Resource tension</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Block 3 */}
            <div className='card-glass rounded-3xl overflow-hidden flex flex-col'>
              {/* Photo */}
              <div className='relative bg-[#f2d7d7]/30 h-48'>
                <img
                  src='/personal-portfolio/media/projects/hex/hex_ref_love.webp'
                  alt='Process reference 3'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Divider */}
              <div className='h-px bg-gradient-to-r from-transparent via-[var(--accent-300)] to-transparent'></div>

              {/* Content */}
              <div className='p-4 flex flex-col flex-1'>
                <h3
                  className={styles.cardTitle.className}
                  style={styles.cardTitle.style}
                >
                  Love Letter
                </h3>
                <ul
                  className={styles.cardBody.className}
                  style={styles.cardBody.style}
                >
                  <li className='flex items-start'>
                    <span
                      className={styles.bulletPoint.className}
                      style={styles.bulletPoint.style}
                    ></span>
                    <span>Compact card pool</span>
                  </li>
                  <li className='flex items-start'>
                    <span
                      className={styles.bulletPoint.className}
                      style={styles.bulletPoint.style}
                    ></span>
                    <span>Hidden information strategy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Game Flow Section */}
      <section ref={gameStartRef} className='mt-20'>
        {/* Title：移动端正常流式，桌面端 sticky + 滚动到末尾渐隐 */}
        <motion.div
          className='pb-4 md:pb-6 md:sticky md:top-24 z-20'
          style={{
            background: 'var(--background)',
            opacity: titleOpacity,
            y: titleY
          }}
        >
          <h3
            className={styles.sectionTitle.className}
            style={styles.sectionTitle.style}
          >
            GameFlow
          </h3>

          <p
            className={styles.bodyText.className}
            style={styles.bodyText.style}
          >
            A breakdown of the game's structure, showing how player actions,
            events, and objectives unfold across different stages.
          </p>
        </motion.div>

        {/* Mobile Version - Simple Static Layout */}
        <div className='md:hidden space-y-6 mt-8'>
          {/* Complete Board Image */}
          <div
            className='relative rounded-3xl overflow-hidden aspect-square'
            style={{
              background: 'var(--brand-scale-3-light)'
            }}
          >
            <img
              src='/personal-portfolio/media/projects/hex/gameflow_step1_base.webp'
              alt='Game board base'
              className='absolute inset-0 w-full h-full object-contain p-2'
            />
            <img
              src='/personal-portfolio/media/projects/hex/gameflow_step1_layer1.webp'
              alt='Board arrangement layer'
              className='absolute inset-0 w-full h-full object-contain p-2'
            />
            <img
              src='/personal-portfolio/media/projects/hex/gameflow_step1_layer2.webp'
              alt='Player seats layer'
              className='absolute inset-0 w-full h-full object-contain p-2'
            />
            <img
              src='/personal-portfolio/media/projects/hex/gameflow_step1_layer3.webp'
              alt='Jewels layer'
              className='absolute inset-0 w-full h-full object-contain p-2'
            />
          </div>

          {/* Step 1 */}
          <div className='card-glass rounded-3xl p-4'>
            <div className='flex items-center gap-3 mb-4'>
              <div
                className='w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold'
                style={{ background: 'var(--accent-600)', color: 'white' }}
              >
                1
              </div>
              <h3
                className='text-xl font-bold'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Game Start
              </h3>
            </div>
            <p
              className='text-sm leading-relaxed mb-6'
              style={{ color: 'var(--muted)' }}
            >
              At the beginning of the game, players gather around the modular
              hexagonal board, choose their team and prepare the initial setup.
            </p>

            <div className='grid grid-cols-1 gap-3'>
              <div className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'>
                <div className='flex items-center gap-2 mb-1'>
                  <img
                    src='/personal-portfolio/media/projects/hex/icons/icon_chess.webp'
                    alt='Arrange board icon'
                    className='w-6 h-6 object-contain'
                  />
                  <p
                    className='text-xs font-semibold uppercase tracking-[0.18em]'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    Arrange the board
                  </p>
                </div>
                <p className='text-sm' style={{ color: 'var(--muted)' }}>
                  5 types of Modular Chess pieces Arrangement in game Board
                </p>
              </div>

              <div className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'>
                <div className='flex items-center gap-2 mb-1'>
                  <img
                    src='/personal-portfolio/media/projects/hex/icons/icon_players.webp'
                    alt='Player icon'
                    className='w-6 h-6 object-contain'
                  />
                  <p
                    className='text-xs font-semibold uppercase tracking-[0.18em]'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    Seat 4–6 players
                  </p>
                </div>
                <p className='text-sm' style={{ color: 'var(--muted)' }}>
                  Players take their seats around the board and are split into
                  two teams.
                </p>
              </div>

              <div className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'>
                <div className='flex items-center gap-2 mb-1'>
                  <img
                    src='/personal-portfolio/media/projects/hex/icons/icon_cards.webp'
                    alt='Card icon'
                    className='w-6 h-6 object-contain'
                  />
                  <p
                    className='text-xs font-semibold uppercase tracking-[0.18em]'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    Distribute cards
                  </p>
                </div>
                <p className='text-sm' style={{ color: 'var(--muted)' }}>
                  The Justice and Evil card decks are shuffled separately, and
                  three cards are randomly drawn from each deck as the initial
                  available items.
                </p>
              </div>

              <div className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'>
                <div className='flex items-center gap-2 mb-1'>
                  <img
                    src='/personal-portfolio/media/projects/hex/icons/icon_jewl.webp'
                    alt='Jewel icon'
                    className='w-6 h-6 object-contain'
                  />
                  <p
                    className='text-xs font-semibold uppercase tracking-[0.18em]'
                    style={{ color: 'var(--accent-600)' }}
                  >
                    Place jewels
                  </p>
                </div>
                <p className='text-sm' style={{ color: 'var(--muted)' }}>
                  Players may choose any four gems(Justice/evil) as their
                  starting assets.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className='card-glass rounded-3xl p-4'>
            <div className='flex items-center gap-3 mb-4'>
              <div
                className='w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold'
                style={{ background: 'var(--accent-600)', color: 'white' }}
              >
                2
              </div>
              <h3
                className='text-xl font-bold'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Take Actions!
              </h3>
            </div>
            <p
              className='text-sm leading-relaxed mb-4'
              style={{ color: 'var(--muted)' }}
            >
              Each turn gives players the freedom to move, collect resources, or
              trigger card effects. With only two Action Points per round, every
              decision shapes team coordination and board control.
            </p>
            <img
              src='/personal-portfolio/media/projects/hex/step2.webp'
              alt='Player turn illustration'
              className='w-full object-contain'
            />
          </div>

          {/* Step 3 */}
          <div className='card-glass rounded-3xl p-4'>
            <div className='flex items-center gap-3 mb-4'>
              <div
                className='w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold'
                style={{ background: 'var(--accent-600)', color: 'white' }}
              >
                3
              </div>
              <h3
                className='text-xl font-bold'
                style={{ color: 'var(--brand-scale-12-light)' }}
              >
                Victory Condition
              </h3>
            </div>
            <p
              className='text-sm leading-relaxed mb-4'
              style={{ color: 'var(--muted)' }}
            >
              The game ends when one team successfully helps two of its players
              escape the lab through teamwork and coordination！
            </p>
            <div className='flex justify-center'>
              <img
                src='/personal-portfolio/media/projects/hex/step3.webp'
                alt='Victory illustration'
                className='w-6/12 object-contain'
              />
            </div>
          </div>
        </div>

        {/* Desktop Version - Animated Layout */}
        <div className='hidden md:grid md:grid-cols-[1.2fr_1fr] gap-8 items-start mt-8'>
          {/* Left: Game Illustration with Layers */}
          <div
            className='relative rounded-3xl overflow-hidden  aspect-[4/3] sticky top-44'
            style={{
              background: 'var(--brand-scale-3-light)'
            }}
          >
            {/* Base image - always visible */}
            <img
              src='/personal-portfolio/media/projects/hex/gameflow_step1_base.webp'
              alt='Game board base'
              className='absolute inset-0 w-full h-full object-contain p-4'
            />

            {/* Layer 1 - appears with bullet 1 */}
            <motion.img
              src='/personal-portfolio/media/projects/hex/gameflow_step1_layer1.webp'
              alt='Board arrangement layer'
              className='absolute inset-0 w-full h-full object-contain p-4'
              style={{ opacity: layer1Opacity, y: layer1Y }}
            />

            {/* Layer 2 - appears with bullet 2 */}
            <motion.img
              src='/personal-portfolio/media/projects/hex/gameflow_step1_layer2.webp'
              alt='Player seats layer'
              className='absolute inset-0 w-full h-full object-contain p-4'
              style={{ opacity: layer2Opacity, y: layer2Y }}
            />

            {/* Layer 3 - appears with bullet 3 */}
            <motion.img
              src='/personal-portfolio/media/projects/hex/gameflow_step1_layer3.webp'
              alt='Jewels layer'
              className='absolute inset-0 w-full h-full object-contain p-4'
              style={{ opacity: layer3Opacity, y: layer3Y }}
            />
          </div>

          {/* Right: Animated Step Cards */}
          <div className='relative h-[600vh]'>
            <div className='sticky top-44 h-[550px]'>
              {/* STEP 1 */}
              <motion.div
                className='card-glass rounded-3xl p-8 absolute inset-0'
                style={{ opacity: step1Opacity, y: step1Y }}
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold'
                    style={{ background: 'var(--accent-600)', color: 'white' }}
                  >
                    1
                  </div>
                  <h3
                    className='text-xl md:text-2xl font-bold'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Game Start
                  </h3>
                </div>
                <p
                  className='text-sm md:text-base leading-relaxed mb-6'
                  style={{ color: 'var(--muted)' }}
                >
                  At the beginning of the game, players gather around the
                  modular hexagonal board, choose their team and prepare the
                  initial setup.
                </p>

                {/* Animated Bullet Points - 2x2 Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4'>
                  {/* Bullet 1 - Base board */}
                  <motion.div
                    className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'
                    style={{ opacity: bullet1Opacity, y: bullet1Y }}
                  >
                    <div className='flex items-center gap-2 mb-1'>
                      <img
                        src='/personal-portfolio/media/projects/hex/icons/icon_chess.webp'
                        alt='Arrange board icon'
                        className='w-6 h-6 object-contain'
                      />
                      <p
                        className='text-xs font-semibold uppercase tracking-[0.18em]'
                        style={{ color: 'var(--accent-600)' }}
                      >
                        Arrange the board
                      </p>
                    </div>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      5 types of Modular Chess pieces Arrangement in game Board
                    </p>
                  </motion.div>

                  {/* Bullet 2 - Add players */}
                  <motion.div
                    className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'
                    style={{ opacity: bullet2Opacity, y: bullet2Y }}
                  >
                    <div className='flex items-center gap-2 mb-1'>
                      <img
                        src='/personal-portfolio/media/projects/hex/icons/icon_players.webp'
                        alt='Player icon'
                        className='w-6 h-6 object-contain'
                      />
                      <p
                        className='text-xs font-semibold uppercase tracking-[0.18em]'
                        style={{ color: 'var(--accent-600)' }}
                      >
                        Seat 4–6 players
                      </p>
                    </div>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      Players take their seats around the board and are split
                      into two teams.
                    </p>
                  </motion.div>

                  {/* Bullet 3 - Add cards */}
                  <motion.div
                    className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'
                    style={{ opacity: bullet3Opacity, y: bullet3Y }}
                  >
                    <div className='flex items-center gap-2 mb-1'>
                      <img
                        src='/personal-portfolio/media/projects/hex/icons/icon_cards.webp'
                        alt='Card icon'
                        className='w-6 h-6 object-contain'
                      />
                      <p
                        className='text-xs font-semibold uppercase tracking-[0.18em]'
                        style={{ color: 'var(--accent-600)' }}
                      >
                        Distribute cards
                      </p>
                    </div>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      The Justice and Evil card decks are shuffled separately,
                      and three cards are randomly drawn from each deck as the
                      initial available items.
                    </p>
                  </motion.div>

                  {/* Bullet 4 - Add jewels */}
                  <motion.div
                    className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'
                    style={{ opacity: bullet4Opacity, y: bullet4Y }}
                  >
                    <div className='flex items-center gap-2 mb-1'>
                      <img
                        src='/personal-portfolio/media/projects/hex/icons/icon_jewl.webp'
                        alt='Jewel icon'
                        className='w-6 h-6 object-contain'
                      />
                      <p
                        className='text-xs font-semibold uppercase tracking-[0.18em]'
                        style={{ color: 'var(--accent-600)' }}
                      >
                        Place jewels
                      </p>
                    </div>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      Players may choose any four gems(Justice/evil) as their
                      starting assets.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* STEP 2 */}
              <motion.div
                className='card-glass rounded-3xl p-8 absolute inset-0'
                style={{ opacity: step2Opacity, y: step2Y }}
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold'
                    style={{ background: 'var(--accent-600)', color: 'white' }}
                  >
                    2
                  </div>
                  <h3
                    className='text-xl md:text-2xl font-bold'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Take Actions!
                  </h3>
                </div>
                <p
                  className='text-sm md:text-base leading-relaxed'
                  style={{ color: 'var(--muted)' }}
                >
                  Each turn gives players the freedom to move, collect
                  resources, or trigger card effects. With only two Action
                  Points per round, every decision shapes team coordination and
                  board control.
                </p>
                <img
                  src='/personal-portfolio/media/projects/hex/step2.webp'
                  alt='Arrange board icon'
                  className='object-contain'
                />
              </motion.div>

              {/* STEP 3 */}
              <motion.div
                className='card-glass rounded-3xl p-8 absolute inset-0'
                style={{ opacity: step3Opacity, y: step3Y }}
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold'
                    style={{ background: 'var(--accent-600)', color: 'white' }}
                  >
                    3
                  </div>
                  <h3
                    className='text-xl md:text-2xl font-bold'
                    style={{ color: 'var(--brand-scale-12-light)' }}
                  >
                    Victory Condition
                  </h3>
                </div>
                <p
                  className='text-sm md:text-base leading-relaxed'
                  style={{ color: 'var(--muted)' }}
                >
                  The game ends when one team successfully helps two of its
                  players escape the lab through teamwork and coordination！
                </p>
                <div className='flex justify-center mt-10'>
                  <img
                    src='/personal-portfolio/media/projects/hex/step3.webp'
                    alt='Victory illustration'
                    className='w-6/12 object-contain'
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Design Section */}
      <RevealOnScroll>
        <div className='mt-20'>
          <h3
            className={styles.sectionTitle.className}
            style={styles.sectionTitle.style}
          >
            Card Design
          </h3>
          <p
            className={styles.sectionSubtitle.className}
            style={styles.sectionSubtitle.style}
          >
            Explore the different card types and their functions in the game
          </p>

          <div className='grid md:grid-cols-[1fr_1.5fr] gap-8 mt-8'>
            {/* Left: Card Detail Image */}
            <div className='card-glass rounded-3xl p-8 flex items-center justify-center h-[450px] md:h-[500px]'>
              <img
                src='/personal-portfolio/media/projects/hex/cards/cardcomposition.webp'
                alt='Card design details'
                className='w-full h-full object-contain'
              />
            </div>

            {/* Right: Card Categories with Tabs */}
            <div
              className='rounded-3xl p-8 transition-all duration-500'
              style={{
                background: `linear-gradient(135deg, ${currentBgColor}dd, ${currentBgColor}99)`,
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Category Tabs */}
              <div className='flex gap-2 mb-4 flex-wrap'>
                {['Destruction', 'Salvation', 'Item', 'Skill'].map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category)
                      // Reset subcategory when switching categories
                      if (cardData[category].subcategories.length > 0) {
                        setActiveSubcategory(
                          cardData[category].subcategories[0]
                        )
                      }
                    }}
                    className='px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105'
                    style={{
                      background:
                        activeCategory === category
                          ? 'var(--accent-600)'
                          : 'rgba(255, 255, 255, 0.1)',
                      color:
                        activeCategory === category
                          ? 'white'
                          : 'rgba(255, 255, 255, 0.7)',
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    {category} Cards
                  </button>
                ))}
              </div>

              {/* Description */}
              <p
                className='text-sm mb-6 leading-relaxed'
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                {cardData[activeCategory].description}
              </p>

              {/* Subcategory Tabs (only show for Destruction and Salvation) */}
              {cardData[activeCategory].subcategories.length > 0 && (
                <div className='flex gap-2 mb-6 flex-wrap'>
                  {cardData[activeCategory].subcategories.map(subcategory => (
                    <button
                      key={subcategory}
                      onClick={() => setActiveSubcategory(subcategory)}
                      className='px-3 py-1 rounded text-xs font-medium transition-all hover:scale-105'
                      style={{
                        background:
                          activeSubcategory === subcategory
                            ? 'var(--accent-600)'
                            : 'rgba(255, 255, 255, 0.15)',
                        color:
                          activeSubcategory === subcategory
                            ? 'white'
                            : 'rgba(255, 255, 255, 0.8)',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      {subcategory}
                    </button>
                  ))}
                </div>
              )}

              {/* Card Grid */}
              <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                {getCurrentCards().map(card => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className='rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform'
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <img
                      src={card.image}
                      alt={card.name}
                      className='w-full h-auto object-contain p-3'
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Other Materials Section */}
      <RevealOnScroll>
        <div className='mt-20'>
          <h3
            className={styles.sectionTitle.className}
            style={styles.sectionTitle.style}
          >
            Other Materials
          </h3>
          <p
            className={styles.sectionSubtitle.className}
            style={styles.sectionSubtitle.style}
          >
            Physical components that bring the game to life
          </p>

          <div className='grid md:grid-cols-2 gap-6 mt-8'>
            {/* Left Column - 2 rows */}
            <div className='space-y-6'>
              {/* Chess Pieces Design 1 */}
              <div className='card-glass rounded-3xl overflow-hidden'>
                <div className='p-6 border-b border-[var(--accent-300)]'>
                  <h4
                    className='text-lg font-bold'
                    style={{ color: 'var(--accent-700)' }}
                  >
                    Chess Pieces Design
                  </h4>
                </div>
                <div className='p-6'>
                  <img
                    src='/personal-portfolio/media/projects/hex/basechess.webp'
                    alt='Chess pieces design'
                    className='w-full h-auto object-contain'
                  />
                </div>
              </div>

              {/* Chess Pieces Design 2 */}
              <div className='card-glass rounded-3xl overflow-hidden'>
                <div className='p-6 border-b border-[var(--accent-300)]'>
                  <h4
                    className='text-lg font-bold'
                    style={{ color: 'var(--accent-700)' }}
                  >
                    Chess Pieces Details
                  </h4>
                </div>
                <div className='p-6'>
                  <img
                    src='/personal-portfolio/media/projects/hex/specialchess.webp'
                    alt='Chess pieces details'
                    className='w-full h-auto object-contain'
                  />
                </div>
              </div>
            </div>

            {/* Right Column - 1 larger card */}
            <div className='card-glass rounded-3xl overflow-hidden flex flex-col'>
              <div className='p-6 border-b border-[var(--accent-300)]'>
                <h4
                  className='text-lg font-bold'
                  style={{ color: 'var(--accent-700)' }}
                >
                  Modular Map
                </h4>
              </div>
              <div className=' flex-1 flex items-center justify-center'>
                <img
                  src='/personal-portfolio/media/projects/hex/modularmap.webp'
                  alt='Modular map layout'
                  className='w-full h-full object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* The Process Section */}
      <RevealOnScroll>
        <div className='mt-20'>
          <h3
            className={styles.sectionTitle.className}
            style={styles.sectionTitle.style}
          >
            The Process
          </h3>
          <p
            className={styles.sectionSubtitle.className}
            style={styles.sectionSubtitle.style}
          >
            Over an eight-week period, we iterated from initial concept to a playable prototype.
            The following stages outline the structured process we followed to ensure clarity in design decisions, 
            efficient iteration, and a smooth transition from ideation to playtesting.
          </p>

          {/* Process Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Card 1 */}
            <div className='card-glass rounded-3xl overflow-hidden flex flex-col'>
              {/* Number Badge */}
              <div className='p-6 pb-0'>
                <div
                  className='w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4'
                  style={{ background: 'var(--accent-600)', color: 'white' }}
                >
                  1
                </div>
                <h3
                  className='text-xl font-bold mb-3'
                  style={{ color: 'var(--brand-scale-12-light)' }}
                >
                  Gameplay Brainstorming
                </h3>
              </div>

              {/* Image */}
              <div className='relative bg-[#f2d7d7]/30 mx-6 mb-4 rounded-2xl overflow-hidden aspect-[4/3]'>
                <img
                  src='/personal-portfolio/media/projects/hex/process-1.webp'
                  alt='Frame 60 process'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Bullet Points */}
              <div className='px-6 pb-6'>
                <ul className='space-y-3'>
                  <li className='flex items-start'>
                    <span
                      className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    ></span>
                    <span className='text-sm' style={{ color: 'var(--muted)' }}>
                      Conducted team discussions around the core theme
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span
                      className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    ></span>
                    <span className='text-sm' style={{ color: 'var(--muted)' }}>
                      Sketched draft layouts of the hexagonal board
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span
                      className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    ></span>
                    <span className='text-sm' style={{ color: 'var(--muted)' }}>
                      Defined game objectives, rule framework, and player
                      interaction basics
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className='card-glass rounded-3xl overflow-hidden flex flex-col'>
              {/* Number Badge */}
              <div className='p-6 pb-0'>
                <div
                  className='w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4'
                  style={{ background: 'var(--accent-600)', color: 'white' }}
                >
                  2
                </div>
                <h3
                  className='text-xl font-bold mb-3'
                  style={{ color: 'var(--brand-scale-12-light)' }}
                >
                  Gameplay Refine & Prototyping
                </h3>
              </div>

              {/* Image */}
              <div className='relative bg-[#f2d7d7]/30 mx-6 mb-4 rounded-2xl overflow-hidden aspect-[4/3]'>
                <img
                  src='/personal-portfolio/media/projects/hex/process-2.webp'
                  alt='Prototype testing'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Bullet Points */}
              <div className='px-6 pb-6'>
                <ul className='space-y-3'>
                  <li className='flex items-start'>
                    <span
                      className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    ></span>
                    <span className='text-sm' style={{ color: 'var(--muted)' }}>
                      Translated ideas into a physical prototype with hex tiles
                      and tokens
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span
                      className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    ></span>
                    <span className='text-sm' style={{ color: 'var(--muted)' }}>
                      Tested early rule mechanics such as resource acquisition,
                      action card effects, and win conditions
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span
                      className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    ></span>
                    <span className='text-sm' style={{ color: 'var(--muted)' }}>
                      Iteratively adjusted balance and interaction flow during
                      trial runs
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className='card-glass rounded-3xl overflow-hidden flex flex-col'>
              {/* Number Badge */}
              <div className='p-6 pb-0'>
                <div
                  className='w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4'
                  style={{ background: 'var(--accent-600)', color: 'white' }}
                >
                  3
                </div>
                <h3
                  className='text-xl font-bold mb-3'
                  style={{ color: 'var(--brand-scale-12-light)' }}
                >
                  Gametesting & Further Refine
                </h3>
              </div>

              {/* Image */}
              <div className='relative bg-[#f2d7d7]/30 mx-6 mb-4 rounded-2xl overflow-hidden aspect-[4/3]'>
                <img
                  src='/personal-portfolio/media/projects/hex/process-3.webp'
                  alt='Gameplay brainstorming'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Bullet Points */}
              <div className='px-6 pb-6'>
                <ul className='space-y-3'>
                  <li className='flex items-start'>
                    <span
                      className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    ></span>
                    <span className='text-sm' style={{ color: 'var(--muted)' }}>
                      Organized small playtest sessions to observe player
                      strategies and pacing
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span
                      className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    ></span>
                    <span className='text-sm' style={{ color: 'var(--muted)' }}>
                      Gathered feedback on rule clarity, engagement, and overall
                      enjoyment
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span
                      className='mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    ></span>
                    <span className='text-sm' style={{ color: 'var(--muted)' }}>
                      Refined card functions, victory conditions, and board
                      layout to enhance playability
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='card-glass mt-10 rounded-3xl max-w-2xl overflow-hidden flex flex-col mx-auto '>
            {/* Image */}
            <div className='relative bg-[#f2d7d7]/30 p-6 rounded-2xl'>
              <img
                src='/personal-portfolio/media/projects/hex/project-timeline.webp'
                alt='Gameplay brainstorming'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Player Testing Section */}
      <div className='mt-20'>
        <RevealOnScroll>
          <h3
            className={styles.sectionTitle.className}
            style={styles.sectionTitle.style}
          >
            What our player says..
          </h3>
          <p
            className={styles.bodyText.className}
            style={styles.bodyText.style}
          >
            We conducted 4 rounds of game testing in the session, after the
            session, players are welcomed to share any feedback on our game.
            Here is what our players highlighted:
          </p>
        </RevealOnScroll>

        {/* Middle Content - Single Optimized Image */}
        <div className='mt-0 md:mt-10'>
          <RevealOnScroll>
            <div className='relative w-full max-w-4xl mx-auto md:px-0'>
              <img
                src='/personal-portfolio/media/projects/hex/player-feedback.webp'
                alt='Player feedback and game testing session'
                className='w-full h-auto object-contain'
              />
            </div>
          </RevealOnScroll>
        </div>

        {/* Final Words - Reveals Last */}
        <RevealOnScroll>
          <div className='mt-16 text-center max-w-3xl mx-auto'>
            <p
              className='text-lg md:text-xl leading-relaxed'
              style={{ color: 'var(--brand-scale-12-light)' }}
            >
              Based on the valuable feedback, we further refine our board game
              to the best.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Final Display Gallery Section */}
      <RevealOnScroll>
        <div className='mt-20'>
          <h3
            className={styles.sectionTitle.className}
            style={styles.sectionTitle.style}
          >
            Gallery
          </h3>
          {/* Gallery Grid - 2 rows x 3 columns */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8'>
            {/* Row 1 */}
            <div className='card-glass rounded-2xl overflow-hidden aspect-[4/3]'>
              <img
                src='/personal-portfolio/media/projects/hex/gallery/top-left.webp'
                alt='Item cards display'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='card-glass rounded-2xl overflow-hidden aspect-[4/3]'>
              <img
                src='/personal-portfolio/media/projects/hex/gallery/top-center.webp'
                alt='Team photo'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='card-glass rounded-2xl overflow-hidden aspect-[4/3]'>
              <img
                src='/personal-portfolio/media/projects/hex/gallery/top-right.webp'
                alt='Game components'
                className='w-full h-full object-cover'
              />
            </div>

            {/* Row 2 */}
            <div className='card-glass rounded-2xl overflow-hidden aspect-[4/3]'>
              <img
                src='/personal-portfolio/media/projects/hex/gallery/bottom-left.webp'
                alt='Card collection'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='card-glass rounded-2xl overflow-hidden aspect-[4/3]'>
              <img
                src='/personal-portfolio/media/projects/hex/gallery/bottom-center.webp'
                alt='Game board setup'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='card-glass rounded-2xl overflow-hidden aspect-[4/3]'>
              <img
                src='/personal-portfolio/media/projects/hex/gallery/bottom-right.webp'
                alt='Hexagonal tiles'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </>
  )

  return <BaseProjectDetail project={project} customSections={customSections} />
}
