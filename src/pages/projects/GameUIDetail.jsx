import { BaseProjectDetail } from './BaseProjectDetail'
import { RevealOnScroll } from '../../components/RevealOnScroll'
import { StaggerReveal } from '../../components/StaggerReveal'
import { LazyImage } from '../../components/LazyImage'
import { gameProjects } from '../../data/projects'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { preloadImages, getCriticalImages } from '../../utils/imagePreloader'

/**
 * Custom Project Detail Page for Game UI Design
 * Features separate sections for Match-3 and Puzzle games
 * Each section includes project brief and interface showcase
 */
export const GameUIDetail = () => {
  const project = gameProjects.find(p => p.slug === 'game-ui-design')

  // State for active game section
  const [activeGame, setActiveGame] = useState('match3')

  // Define sidebar sections
  const sidebarSections = [
    { id: 'match3-brief', label: 'Match-3 Game Brief' },
    { id: 'match3-showcase', label: 'Match-3 UI Showcase' },
    { id: 'puzzle-brief', label: 'Puzzle Game Brief' },
    { id: 'puzzle-showcase', label: 'Puzzle UI Showcase' }
  ]

  // Game data
  const match3Data = {
    title: 'Match-3 Puzzle Game',
    brief: 'A classic match-3 puzzle game with modern UI design, featuring vibrant candy-themed graphics and smooth animations. The game focuses on intuitive touch controls and engaging visual feedback to create an addictive gaming experience.',
    features: [
      'Intuitive swipe-based matching mechanics',
      'Progressive difficulty with power-ups',
      'Daily challenges and events',
      'Social leaderboards and achievements',
      'In-game currency and shop system'
    ],
    interfaces: [
      {
        title: 'Main Menu',
        description: 'Clean, welcoming interface with game logo, play button, and navigation options',
        image: '/personal-portfolio/media/projects/game-ui/match3_main_menu.webp'
      },
      {
        title: 'Gameplay Screen',
        description: 'Focused gameplay area with score display, moves counter, and intuitive controls',
        image: '/personal-portfolio/media/projects/game-ui/match3_gameplay.webp'
      },
      {
        title: 'Shop Interface',
        description: 'In-game store with currency display, item categories, and purchase options',
        image: '/personal-portfolio/media/projects/game-ui/match3_shop.webp'
      }
    ]
  }

  const puzzleData = {
    title: 'Brain Teaser Puzzle Game',
    brief: 'A challenging puzzle game that tests logical thinking and problem-solving skills. Features minimalist design with focus on gameplay mechanics, offering hours of engaging brain training through progressively difficult levels.',
    features: [
      'Logic-based puzzle mechanics',
      '100+ carefully designed levels',
      'Hint system for challenging puzzles',
      'Time-based challenges and achievements',
      'Offline play capability'
    ],
    interfaces: [
      {
        title: 'Main Menu',
        description: 'Minimalist design focusing on level progression and game statistics',
        image: '/personal-portfolio/media/projects/game-ui/puzzle_main_menu.webp'
      },
      {
        title: 'Level Selection',
        description: 'Grid-based level selection with completion status and difficulty indicators',
        image: '/personal-portfolio/media/projects/game-ui/puzzle_levels.webp'
      },
      {
        title: 'Gameplay Interface',
        description: 'Clean puzzle area with timer, hint button, and progress indicators',
        image: '/personal-portfolio/media/projects/game-ui/puzzle_gameplay.webp'
      }
    ]
  }

  const renderGameSection = (gameData, gameType) => (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <div className="space-y-12">
            {/* Game Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text)" }}>
                {gameData.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Project Brief Subsection */}
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text)" }}>
                Project Brief
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {gameData.brief}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold" style={{ color: "var(--text)" }}>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {gameData.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          <span style={{ color: "var(--text-secondary)" }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={gameData.interfaces[0].image}
                      alt={`${gameData.title} - ${gameData.interfaces[0].title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Prototype Interface Showcase Subsection */}
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text)" }}>
                Prototype Interface Showcase
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gameData.interfaces.map((uiInterface, index) => (
                  <div key={index} className="group space-y-4">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                      <img
                        src={uiInterface.image}
                        alt={`${gameData.title} - ${uiInterface.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                        {uiInterface.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {uiInterface.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )

  return (
    <BaseProjectDetail
      project={project}
      customSections={
        <>
          {/* Match-3 Game Section */}
          {renderGameSection(match3Data, 'match3')}

          {/* Puzzle Game Section */}
          {renderGameSection(puzzleData, 'puzzle')}
        </>
      }
    />
  )
}