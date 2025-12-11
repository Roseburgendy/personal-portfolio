import { BaseProjectDetail } from './BaseProjectDetail'
import { RevealOnScroll } from '../../components/RevealOnScroll'
import { gameProjects } from '../../data/projects'
import { StaggerReveal } from '../../components/StaggerReveal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * Customized Project Detail Page for Hexagonal War: Chemical Crisis
 * This demonstrates how to create a unique, customized page while using the base structure
 */
export const HexagonalWarDetail = () => {
  const project = gameProjects.find(p => p.slug === 'hexagonal-war')

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
  [0,   0.9, 0.97, 1],
  [1,   1,   0,    0]
)

// 0.9 之后才开始往上抬
const titleY = useTransform(
  titleProgress,
  [0.9, 0.97, 1],
  [0,   -40,  -60]
)

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
              src="/personal-portfolio/media/projects/hex/hex_cover.webp"
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

      {/* The Process Section */}
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
            This board game was inspired by the challenge of making abstract
            chemistry concepts engaging and intuitive for students.
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
                <p
                  className='text-xs font-semibold uppercase tracking-[0.18em] mb-1'
                  style={{ color: 'var(--accent-600)' }}
                >
                  Arrange the board
                </p>
                <p className='text-sm' style={{ color: 'var(--muted)' }}>
                  Modular tiles are laid out to form the central chemical lab,
                  defining movement and explosion patterns.
                </p>
              </div>

              <div className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'>
                <p
                  className='text-xs font-semibold uppercase tracking-[0.18em] mb-1'
                  style={{ color: 'var(--accent-600)' }}
                >
                  Seat 4–6 players
                </p>
                <p className='text-sm' style={{ color: 'var(--muted)' }}>
                  Players take their seats around the board and are split into
                  two teams, Justice and Evil.
                </p>
              </div>

              <div className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'>
                <p
                  className='text-xs font-semibold uppercase tracking-[0.18em] mb-1'
                  style={{ color: 'var(--accent-600)' }}
                >
                  Distribute cards
                </p>
                <p className='text-sm' style={{ color: 'var(--muted)' }}>
                  Each player receives their starting hand of element cards and
                  action tokens.
                </p>
              </div>

              <div className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'>
                <p
                  className='text-xs font-semibold uppercase tracking-[0.18em] mb-1'
                  style={{ color: 'var(--accent-600)' }}
                >
                  Place jewels
                </p>
                <p className='text-sm' style={{ color: 'var(--muted)' }}>
                  Players select and position their jewels on the board,
                  determining their starting strategy.
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
                Player Turn
              </h3>
            </div>
            <p
              className='text-sm leading-relaxed'
              style={{ color: 'var(--muted)' }}
            >
              During each turn, players move their pieces, deploy chemical
              reactions, and strategically position themselves to control key
              areas of the board.
            </p>
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
                Victory
              </h3>
            </div>
            <p
              className='text-sm leading-relaxed'
              style={{ color: 'var(--muted)' }}
            >
              The game ends when one team successfully achieves their objective:
              Justice team protects the lab, while Evil team triggers a chain
              reaction.
            </p>
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
            <div className='sticky top-44 h-[480px]'>
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
                    <p
                      className='text-xs font-semibold uppercase tracking-[0.18em] mb-1'
                      style={{ color: 'var(--accent-600)' }}
                    >
                      Arrange the board
                    </p>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      Modular tiles are laid out to form the central chemical
                      lab, defining movement and explosion patterns.
                    </p>
                  </motion.div>

                  {/* Bullet 2 - Add players */}
                  <motion.div
                    className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'
                    style={{ opacity: bullet2Opacity, y: bullet2Y }}
                  >
                    <p
                      className='text-xs font-semibold uppercase tracking-[0.18em] mb-1'
                      style={{ color: 'var(--accent-600)' }}
                    >
                      Seat 4–6 players
                    </p>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      Players take their seats around the board and are split
                      into two teams, Justice and Evil.
                    </p>
                  </motion.div>

                  {/* Bullet 3 - Add cards */}
                  <motion.div
                    className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'
                    style={{ opacity: bullet3Opacity, y: bullet3Y }}
                  >
                    <p
                      className='text-xs font-semibold uppercase tracking-[0.18em] mb-1'
                      style={{ color: 'var(--accent-600)' }}
                    >
                      Distribute cards
                    </p>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      Each player receives their starting hand of element cards
                      and action tokens.
                    </p>
                  </motion.div>

                  {/* Bullet 4 - Add jewels */}
                  <motion.div
                    className='rounded-2xl bg-[var(--brand-scale-3-light)]/60 p-4'
                    style={{ opacity: bullet4Opacity, y: bullet4Y }}
                  >
                    <p
                      className='text-xs font-semibold uppercase tracking-[0.18em] mb-1'
                      style={{ color: 'var(--accent-600)' }}
                    >
                      Place jewels
                    </p>
                    <p className='text-sm' style={{ color: 'var(--muted)' }}>
                      Players select and position their jewels on the board,
                      determining their starting strategy.
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
                    Player Turn
                  </h3>
                </div>
                <p
                  className='text-sm md:text-base leading-relaxed'
                  style={{ color: 'var(--muted)' }}
                >
                  During each turn, players move their pieces, deploy chemical
                  reactions, and strategically position themselves to control
                  key areas of the board.
                </p>
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
                    Victory
                  </h3>
                </div>
                <p
                  className='text-sm md:text-base leading-relaxed'
                  style={{ color: 'var(--muted)' }}
                >
                  The game ends when one team successfully achieves their
                  objective: Justice team protects the lab, while Evil team
                  triggers a chain reaction.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* The Process Section */}
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

      {/* My Contributions */}
      {project?.responsibilities && project.responsibilities.length > 0 && (
        <RevealOnScroll>
          <div className='card-glass rounded-3xl p-6 md:p-8'>
            <h2
              className='text-xl md:text-2xl font-bold mb-4'
              style={{ color: 'var(--text)' }}
            >
              My Contributions
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2'>
              {project.responsibilities.map((responsibility, index) => (
                <div key={index} className='flex items-start text-sm'>
                  <span className='mr-2' style={{ color: 'var(--accent-600)' }}>
                    •
                  </span>
                  <span style={{ color: 'var(--muted)' }}>
                    {responsibility}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      )}

      {/* Gallery */}
      {project?.gallery && project.gallery.length > 0 && (
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

      {/* Links */}
      {project?.links && project.links.length > 0 && (
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
  )

  return <BaseProjectDetail project={project} customSections={customSections} />
}
