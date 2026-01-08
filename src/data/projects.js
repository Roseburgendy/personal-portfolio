// Game Projects
export const gameProjects = [
  {
    id: 1,
    slug: 'hexagonal-war', // Unique slug for routing
    title: 'Hexagonal War: Chemical Crisis',
    type: 'Board Game Design',
    role: 'Game Designer, Project Manager',
    description:
      'An educational board game designed to transform chemistry learning into an engaging and strategic experience. Players compete on a hexagonal map while managing resources and responding to chemical challenges. The game aims to make abstract chemistry concepts more interactive and approachable through play.',
    teamSize: '6',
    year: '2024',
    duration: '8 Weeks',
    tech: 'Paper Prototyping, Adobe Illustrator, Canva',
    image: '/personal-portfolio/media/thumbnails/hex_war.webp',
    image2: '/personal-portfolio/media/projects/hex/gallery/bottom-center.webp',
    features: [],
    responsibilities: [],
    gallery: [],
    links: []
  },
/*   {
    id: 2,
    slug: 'vr-farm', // Unique slug for routing
    title: 'Harvest & Feast',
    type: 'VR Development',
    role: 'Lead Programmer, Project Manager',
    description:
      'A playful VR journey—farm, harvest, and cook your way from soil to supper',
    fullDescription:
      'Harvest & Feast is an immersive VR experience that takes players through the complete journey of food production, from planting seeds to serving a feast. Developed in Unity for Meta Quest, this project combines intuitive VR interactions with engaging gameplay mechanics to create a relaxing yet rewarding farming and cooking simulation.',
    year: '2025',
    teamSize: '5',
    duration: '4 Weeks',
    tech: 'Unity (C#), XR Interaction Toolkit, Meta Quest SDK',
    image: '/personal-portfolio/media/thumbnails/vr_farm.webp',
    features: [
      'Sequential interaction system for guided gameplay flow',
      'Dual-mode XR control supporting both ray and direct interaction',
      'Coroutine-based plant growth simulation with visual feedback',
      'Physics-based cooking mechanics with ingredient combinations',
      'Intuitive inventory management system',
      'Immersive 3D audio and haptic feedback'
    ],
    responsibilities: [
      'Designed and implemented sequential interaction framework',
      'Developed dual-mode XR interaction system',
      'Created coroutine-based growth simulation mechanics',
      'Built inventory and item management systems',
      'Implemented cooking station interaction logic',
      'Optimized VR performance for Meta Quest hardware',
      'Led team coordination and project management'
    ],
    gallery: [],
    links: [
      {
        type: 'itch',
        url: 'https://itch.io/harvest-and-feast',
        label: 'Download on itch.io'
      }
    ]
  },
  {
    id: 3,
    slug: '3d-adv', // Unique slug for routing
    title: 'Avenger Legacy',
    type: 'Game Project',
    role: 'Gameplay Programmer',
    description:
      'A strategy simulation game where players build and manage colonies on distant planets, balancing resources and survival.',
    fullDescription:
      'Space Colony Simulator challenges players to establish thriving settlements across the galaxy. Manage resources, research technologies, and ensure colonist happiness while dealing with environmental hazards and alien encounters.',
    teamSize: '5',
    duration: '4 Weeks',
    tech: 'Unity (C#)',
    image: '/personal-portfolio/media/thumbnails/hex_war.png',
    features: [
      'Complex resource management systems',
      'Procedurally generated planets',
      'Tech tree with 50+ upgrades',
      'Dynamic weather and event system',
      'Multiplayer trading mechanics'
    ],
    responsibilities: [
      'Implemented resource production chains',
      'Developed colonist AI behavior systems',
      'Created UI/UX for management interfaces',
      'Balanced game economy and progression',
      'Fixed bugs and optimized performance'
    ],
    gallery: [],
    links: []
  },
  {
    id: 4,
    slug: '3d-fps', // Unique slug for routing
    title: 'First Person Shooter System',
    type: 'Game Project',
    role: 'Gameplay Programmer',
    description:
      'A strategy simulation game where players build and manage colonies on distant planets, balancing resources and survival.',
    fullDescription:
      'Space Colony Simulator challenges players to establish thriving settlements across the galaxy. Manage resources, research technologies, and ensure colonist happiness while dealing with environmental hazards and alien encounters.',
    teamSize: '5',
    duration: '4 Weeks',
    tech: 'Unity (C#)',
    image: '/personal-portfolio/media/thumbnails/hex_war.png',
    features: [
      'Complex resource management systems',
      'Procedurally generated planets',
      'Tech tree with 50+ upgrades',
      'Dynamic weather and event system',
      'Multiplayer trading mechanics'
    ],
    responsibilities: [
      'Implemented resource production chains',
      'Developed colonist AI behavior systems',
      'Created UI/UX for management interfaces',
      'Balanced game economy and progression',
      'Fixed bugs and optimized performance'
    ],
    gallery: [],
    links: []
  },
  {
    id: 4,
    slug: 'online-game', // Unique slug for routing
    title: 'Hell Cook',
    type: 'Game Project',
    role: 'Gameplay Programmer',
    description:
      'A strategy simulation game where players build and manage colonies on distant planets, balancing resources and survival.',
    fullDescription:
      'Space Colony Simulator challenges players to establish thriving settlements across the galaxy. Manage resources, research technologies, and ensure colonist happiness while dealing with environmental hazards and alien encounters.',
    teamSize: '5',
    duration: '4 Weeks',
    tech: 'Unity (C#)',
    image: '/personal-portfolio/media/thumbnails/hex_war.png',
    features: [
      'Complex resource management systems',
      'Procedurally generated planets',
      'Tech tree with 50+ upgrades',
      'Dynamic weather and event system',
      'Multiplayer trading mechanics'
    ],
    responsibilities: [
      'Implemented resource production chains',
      'Developed colonist AI behavior systems',
      'Created UI/UX for management interfaces',
      'Balanced game economy and progression',
      'Fixed bugs and optimized performance'
    ],
    gallery: [],
    links: []
  },
  {
    id: 5,
    slug: 'endless-run', // Unique slug for routing
    title: 'Endless Runner',
    type: 'Game Project',
    role: 'Gameplay Programmer',
    description:
      'A strategy simulation game where players build and manage colonies on distant planets, balancing resources and survival.',
    fullDescription:
      'Space Colony Simulator challenges players to establish thriving settlements across the galaxy. Manage resources, research technologies, and ensure colonist happiness while dealing with environmental hazards and alien encounters.',
    teamSize: '5',
    duration: '4 Weeks',
    tech: 'Unity (C#)',
    image: '/personal-portfolio/media/thumbnails/hex_war.png',
    features: [
      'Complex resource management systems',
      'Procedurally generated planets',
      'Tech tree with 50+ upgrades',
      'Dynamic weather and event system',
      'Multiplayer trading mechanics'
    ],
    responsibilities: [
      'Implemented resource production chains',
      'Developed colonist AI behavior systems',
      'Created UI/UX for management interfaces',
      'Balanced game economy and progression',
      'Fixed bugs and optimized performance'
    ],
    gallery: [],
    links: []
  },
  {
    id: 5,
    slug: 'b-gjam', // Unique slug for routing
    title: 'Magic Cookies',
    type: 'Game Project',
    role: 'Gameplay Programmer',
    description:
      'A strategy simulation game where players build and manage colonies on distant planets, balancing resources and survival.',
    fullDescription:
      'Space Colony Simulator challenges players to establish thriving settlements across the galaxy. Manage resources, research technologies, and ensure colonist happiness while dealing with environmental hazards and alien encounters.',
    teamSize: '5',
    duration: '4 Weeks',
    tech: 'Unity (C#)',
    image: '/personal-portfolio/media/thumbnails/hex_war.png',
    features: [
      'Complex resource management systems',
      'Procedurally generated planets',
      'Tech tree with 50+ upgrades',
      'Dynamic weather and event system',
      'Multiplayer trading mechanics'
    ],
    responsibilities: [
      'Implemented resource production chains',
      'Developed colonist AI behavior systems',
      'Created UI/UX for management interfaces',
      'Balanced game economy and progression',
      'Fixed bugs and optimized performance'
    ],
    gallery: [],
    links: []
  } */
]

// Art Projects
export const artProjects = [
  {
    id: 1,
    slug: '3d-model', // Unique slug for routing
    title: 'Autumn Theme Modeling',
    type: '3D Art',
    role: 'Digital Artist',
    description:
      '3D modeling project that explores an autumn-inspired fantasy environment and character.',
    fullDescription:
      'Autumn Theme Modeling is part of Harmony of Seasons, a 3D modeling course project set in a medieval-inspired fantasy world. My contribution focuses on the Autumn Castle and the Autumn Witch, designed to represent autumn as a season of transition and fading vitality. The castle features Gothic architectural elements and weathered materials to create a warm yet solemn atmosphere. The Autumn Witch complements the environment through organic forms, flowing silhouettes, and a cohesive autumnal color palette.',
    teamSize: '5',
    duration: '4 Weeks',
    tech: 'Autodesk Maya, Substance Painter, Adobe Illustrator',
    image: '/personal-portfolio/media/thumbnails/model_cover.webp',
    image2: '/personal-portfolio/media/thumbnails/model_2.webp',
    features: [],
    responsibilities: [],
    gallery: [],
    links: []
  },
/*   {
    id: 2,
    slug: 'ae-proj', // Unique slug for routing
    title: 'Short Sci-fi Production',
    type: 'VFX',
    role: 'Digital Artist',
    description:
      'A strategy simulation game where players build and manage colonies on distant planets, balancing resources and survival.',
    fullDescription:
      'Space Colony Simulator challenges players to establish thriving settlements across the galaxy. Manage resources, research technologies, and ensure colonist happiness while dealing with environmental hazards and alien encounters.',
    teamSize: '5',
    duration: '4 Weeks',
    tech: 'Unity (C#)',
    image: '/personal-portfolio/media/thumbnails/hex_war.png',
    features: [],
    responsibilities: [],
    gallery: [],
    links: []
  } */
]

// Other Projects
export const otherProjects = [
/*   {
    id: 1,
    slug: 'flutter-dev', // Unique slug for routing
    title: 'Educational Learning Platform',
    type: 'Mobile Development',
    role: 'Flutter Developer',
    description:
      'A cross-platform educational mobile application built with Flutter, featuring real-time learning progress tracking, interactive lessons, and personalized user experiences.',
    fullDescription:
      'An educational learning platform designed to make learning accessible and engaging through mobile technology. The app combines modern UI/UX design with powerful features like real-time data synchronization, secure user authentication, and smooth animations to create an intuitive learning experience for students.',
    year: '2024',
    teamSize: '4',
    duration: '8 Weeks',
    tech: 'Flutter (Dart), Firebase, REST API',
    image: '/personal-portfolio/media/thumbnails/hex_war.png',
    features: [
      'Secure user authentication with email and social login',
      'Real-time progress tracking and analytics',
      'Interactive lessons with multimedia content',
      'Smooth animations and custom UI components',
      'Offline mode with data synchronization',
      'Push notifications for reminders and updates'
    ],
    responsibilities: [
      'Developed responsive UI components using Flutter widgets',
      'Implemented user authentication and session management',
      'Integrated Firebase for real-time data synchronization',
      'Created custom animations and transitions',
      'Collaborated with backend team for API integration',
      'Conducted testing and bug fixes across iOS and Android'
    ],
    gallery: [],
    links: []
  },
  {
    id: 2,
    slug: 'web-dev', // Unique slug for routing
    title: 'Digital Marketing Website',
    type: 'VFX',
    role: 'Digital Artist',
    description:
      'A strategy simulation game where players build and manage colonies on distant planets, balancing resources and survival.',
    fullDescription:
      'Space Colony Simulator challenges players to establish thriving settlements across the galaxy. Manage resources, research technologies, and ensure colonist happiness while dealing with environmental hazards and alien encounters.',
    teamSize: '5',
    duration: '4 Weeks',
    tech: 'Unity (C#)',
    image: '/personal-portfolio/media/thumbnails/hex_war.png',
    features: [],
    responsibilities: [],
    gallery: [],
    links: []
  },
  {
    id: 3,
    slug: 'rvm-ui', // Unique slug for routing
    title: 'Reverse Vending Machine Design',
    type: 'UI prototyping',
    role: 'Digital Artist',
    description:
      'A strategy simulation game where players build and manage colonies on distant planets, balancing resources and survival.',
    fullDescription:
      'Space Colony Simulator challenges players to establish thriving settlements across the galaxy. Manage resources, research technologies, and ensure colonist happiness while dealing with environmental hazards and alien encounters.',
    teamSize: '5',
    duration: '4 Weeks',
    tech: 'Unity (C#)',
    image: '/personal-portfolio/media/thumbnails/hex_war.png',
    features: [],
    responsibilities: [],
    gallery: [],
    links: []
  }, */
  {
    id: 4,
    slug: 'thesis-project', // Unique slug for routing
    title: 'Final Year Project Thesis',
    type: 'Research Project',
    role: 'Researcher, Developer',
    description:
      'A immersive VR serious game that turns breathing exercises into an engaging story-driven experience for anxiety management. The project examined how narrative elements influence user engagement and evaluated the game\'s therapeutic effects on anxiety relief.',
    fullDescription:
      '',
    year: '2024',
    teamSize: '1',
    duration: '8 Months',
    tech: 'Unity3D, C#',
    image: '/personal-portfolio/media/thumbnails/thesis_cover.webp',
    image2: '/personal-portfolio/media/thumbnails/thesis_cover2.webp',
    features: [
    ],
    responsibilities: [
    ],
    gallery: [],
    links: []
  }
]

// Featured Projects (shown on homepage)
export const featuredProjects = [
  {
    id: 1,
    slug: 'hexagonal-war', // Unique slug for routing
    title: 'Hexagonal War: Chemical Crisis',
    type: 'Board Game Design',
    role: 'Game Designer, Project Manager',
    description:
      'Traditional learning often isolates formulas and theory from real-life application, making it hard for learners to connect with the subject. We wanted to design a board game that transforms chemistry learning into an immersive experience.',
    teamSize: '6',
    year: '2024',
    duration: '8 Weeks',
    tech: 'Paper Prototyping, Adobe Illustrator, Canva',
    image: '/personal-portfolio/media/thumbnails/hex_war.webp',
    image2: '/personal-portfolio/media/projects/hex/gallery/bottom-center.webp',
    features: [],
    responsibilities: [],
    gallery: [],
    links: []
  },
  {
    id: 2,
    slug: '3d-model', // Unique slug for routing
    title: 'Autumn Theme Modeling',
    type: '3D Art',
    role: 'Digital Artist',
    description:
      '3D modeling project that explores an autumn-inspired fantasy environment and character.',
    fullDescription:
      'Autumn Theme Modeling is part of Harmony of Seasons, a 3D modeling course project set in a medieval-inspired fantasy world. My contribution focuses on the Autumn Castle and the Autumn Witch, designed to represent autumn as a season of transition and fading vitality. The castle features Gothic architectural elements and weathered materials to create a warm yet solemn atmosphere. The Autumn Witch complements the environment through organic forms, flowing silhouettes, and a cohesive autumnal color palette.',
    teamSize: '5',
    duration: '4 Weeks',
    tech: 'Autodesk Maya, Substance Painter, Adobe Illustrator',
    image: '/personal-portfolio/media/thumbnails/model_cover.webp',
    image2: '/personal-portfolio/media/thumbnails/model_2.webp',
    features: [],
    responsibilities: [],
    gallery: [],
    links: []
  },
    {
    id: 3,
    slug: 'thesis-project', // Unique slug for routing
    title: 'Final Year Project Thesis',
    type: 'Research Project',
    role: 'Researcher, Developer',
    description:
      'A immersive VR serious game that turns breathing exercises into an engaging story-driven experience for anxiety management. The project examined how narrative elements influence user engagement and evaluated the game\'s therapeutic effects on anxiety relief.',
    fullDescription:
      '',
    year: '2024',
    teamSize: '1',
    duration: '8 Months',
    tech: 'Unity3D, C#',
    image: '/personal-portfolio/media/thumbnails/thesis_cover.webp',
    image2: '/personal-portfolio/media/thumbnails/thesis_cover2.webp',
    features: [
    ],
    responsibilities: [
    ],
    gallery: [],
    links: []
  }
  // Add more featured projects here
]
