import { useState } from 'react'
import { BaseProjectDetail } from './BaseProjectDetail'
import { RevealOnScroll } from '../../components/RevealOnScroll'
import { StaggerReveal } from '../../components/StaggerReveal'
import { gameProjects } from '../../data/projects'

export const VRFarmDetail = () => {
  const project = gameProjects.find(p => p.slug === 'vr-farm')
  const [activeTab, setActiveTab] = useState(0)
  const [expandedCode, setExpandedCode] = useState({})

  const toggleCode = (index) => {
    setExpandedCode(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

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

  // Key Mechanics data
  const mechanics = [
    {
      id: 'cultivation',
      title: '🌱 Cultivation',
      video: '/personal-portfolio/media/projects/vr-farm/mechanics/cultivation.gif',
      description: 'Players use VR controllers to dig holes and plant seeds in designated farming areas.',
      highlights: [
        'Intuitive grab-and-plant interaction using XR Direct Interactor',
        'Visual feedback with particle effects when planting',
        'Haptic feedback confirms successful seed placement',
        'Collision detection ensures proper planting zones'
      ]
    },
    {
      id: 'watering',
      title: '💧 Watering',
      video: '/personal-portfolio/media/projects/vr-farm/mechanics/watering.gif',
      description: 'A watering can with physics-based liquid simulation allows players to water their crops naturally.',
      highlights: [
        'Tilt-based water flow using transform rotation detection',
        'Particle system simulates realistic water stream',
        'Trigger zones detect crops in watering range',
        'Visual feedback shows plants receiving water'
      ]
    },
    {
      id: 'growth',
      title: '🌿 Growth System',
      video: '/personal-portfolio/media/projects/vr-farm/mechanics/growth.gif',
      description: 'Plants grow through multiple stages with smooth transitions and visual indicators.',
      highlights: [
        'Coroutine-based time progression system',
        'Smooth scale transitions between growth stages',
        'Color gradients indicate plant health and maturity',
        'Sequential unlocking prevents skipping growth phases'
      ]
    },
    {
      id: 'puzzle',
      title: '🧩 Puzzle Mechanic',
      video: '/personal-portfolio/media/projects/vr-farm/mechanics/puzzle.gif',
      description: 'Level 2 introduces recipe-based puzzles where players must grow specific ingredients.',
      highlights: [
        'Recipe cards display required ingredients visually',
        'Dynamic UI updates as ingredients are collected',
        'Ingredient validation system checks completion',
        'Unlocks new cooking stations upon puzzle completion'
      ]
    },
    {
      id: 'inventory',
      title: '🎒 Inventory System',
      video: '/personal-portfolio/media/projects/vr-farm/mechanics/inventory.gif',
      description: 'Harvested crops are automatically added to an accessible inventory interface.',
      highlights: [
        'Scriptable Object architecture for item data management',
        'Grid-based UI shows collected items with icons',
        'Real-time inventory updates using Observer pattern',
        'Item stacking and quantity tracking'
      ]
    },
    {
      id: 'cooking',
      title: '🍳 Cooking Stations',
      video: '/personal-portfolio/media/projects/vr-farm/mechanics/cooking.gif',
      description: 'Multiple cooking stations allow players to combine ingredients and create dishes.',
      highlights: [
        'Drag-and-drop ingredient placement system',
        'Recipe matching algorithm validates combinations',
        'Cooking animations with visual and audio feedback',
        'Final dish presentation with celebratory effects'
      ]
    }
  ]

  // Game Flow Steps
  const gameFlowSteps = {
    level1: [
      { id: 1, title: 'Tutorial: Learn Controls', myContribution: true },
      { id: 2, title: 'Plant Seeds', myContribution: true },
      { id: 3, title: 'Water Crops', myContribution: true },
      { id: 4, title: 'Wait for Growth', myContribution: true },
      { id: 5, title: 'Harvest Vegetables', myContribution: true },
      { id: 6, title: 'Unlock Cooking Area', myContribution: true },
      { id: 7, title: 'Place Ingredients', myContribution: true },
      { id: 8, title: 'Cook Simple Dish', myContribution: true },
      { id: 9, title: 'Serve and Complete', myContribution: true },
      { id: 10, title: 'Level 1 Complete', myContribution: true }
    ],
    level2: [
      { id: 11, title: 'Receive Recipe Card', myContribution: false },
      { id: 12, title: 'Grow Required Ingredients', myContribution: false },
      { id: 13, title: 'Solve Ingredient Puzzle', myContribution: false },
      { id: 14, title: 'Unlock Advanced Station', myContribution: false },
      { id: 15, title: 'Create Final Feast', myContribution: false }
    ]
  }

  // Technical Systems
  const technicalSystems = [
    {
      title: 'Sequential Interaction System',
      thumbnail: '/personal-portfolio/media/projects/vr-farm/tech/sequential.png',
      description: 'A state machine that guides players through ordered gameplay steps',
      implementation: 'Event-driven architecture with Unity Events and ScriptableObject states',
      codeSnippet: `public class SequentialInteractionManager : MonoBehaviour
{
    [SerializeField] private List<InteractionStep> steps;
    private int currentStepIndex = 0;

    public void CompleteCurrentStep()
    {
        steps[currentStepIndex].OnComplete?.Invoke();
        currentStepIndex++;

        if (currentStepIndex < steps.Count)
        {
            steps[currentStepIndex].Activate();
            UpdateUIPrompt(steps[currentStepIndex].promptText);
        }
        else
        {
            OnAllStepsComplete?.Invoke();
        }
    }

    public bool CanInteractWith(string objectID)
    {
        return steps[currentStepIndex].allowedObjects.Contains(objectID);
    }
}`
    },
    {
      title: 'Dual-Mode XR Control',
      thumbnail: '/personal-portfolio/media/projects/vr-farm/tech/xr-control.png',
      description: 'Seamless switching between ray-based and direct hand interaction',
      implementation: 'XR Interaction Toolkit with custom interactor toggle system',
      codeSnippet: `public class DualModeController : MonoBehaviour
{
    [SerializeField] private XRRayInteractor rayInteractor;
    [SerializeField] private XRDirectInteractor directInteractor;
    [SerializeField] private float switchDistance = 0.5f;

    private void Update()
    {
        Transform hand = transform;
        XRInteractable nearestObj = FindNearestInteractable();

        if (nearestObj != null)
        {
            float distance = Vector3.Distance(hand.position, nearestObj.transform.position);

            if (distance < switchDistance)
            {
                EnableDirectMode();
            }
            else
            {
                EnableRayMode();
            }
        }
    }

    private void EnableDirectMode()
    {
        rayInteractor.enabled = false;
        directInteractor.enabled = true;
        // Show hand model
    }

    private void EnableRayMode()
    {
        rayInteractor.enabled = true;
        directInteractor.enabled = false;
        // Show ray visual
    }
}`
    },
    {
      title: 'Coroutine-Based Growth Simulation',
      thumbnail: '/personal-portfolio/media/projects/vr-farm/tech/growth.png',
      description: 'Realistic plant growth over time with smooth visual transitions',
      implementation: 'Coroutine system with lerp-based scaling and state management',
      codeSnippet: `public class PlantGrowth : MonoBehaviour
{
    [SerializeField] private GrowthStage[] stages;
    [SerializeField] private float stageInterval = 10f;
    private int currentStage = 0;

    private IEnumerator GrowthCycle()
    {
        while (currentStage < stages.Length - 1)
        {
            yield return new WaitForSeconds(stageInterval);

            currentStage++;
            yield return StartCoroutine(TransitionToStage(currentStage));

            OnStageComplete?.Invoke(currentStage);
        }

        isFullyGrown = true;
        EnableHarvest();
    }

    private IEnumerator TransitionToStage(int stageIndex)
    {
        GrowthStage stage = stages[stageIndex];
        float elapsed = 0f;
        Vector3 startScale = transform.localScale;

        while (elapsed < stage.transitionDuration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / stage.transitionDuration;

            transform.localScale = Vector3.Lerp(startScale, stage.targetScale, t);
            materialRenderer.material.color = Color.Lerp(
                stages[stageIndex - 1].color,
                stage.color,
                t
            );

            yield return null;
        }
    }

    public void StartGrowth()
    {
        StartCoroutine(GrowthCycle());
    }
}`
    }
  ]

  // Reflection questions
  const reflections = [
    {
      icon: '🎯',
      question: 'Main Contribution',
      answer: 'As Lead Programmer, I designed and implemented the core interaction framework that made the VR experience intuitive and engaging. The sequential interaction system ensures players are never lost, while the dual-mode XR controls provide flexibility between precise and comfortable interactions. I\'m particularly proud of the coroutine-based growth system, which creates a satisfying sense of progression and patience.'
    },
    {
      icon: '⚠️',
      question: 'Biggest Challenge',
      answer: 'The most challenging aspect was balancing realism with fun in VR. Early iterations had realistic plant growth times (hours), which tested poorly. Finding the right balance required rapid prototyping and user testing. We ultimately settled on accelerated but still meaningful time intervals, maintaining the meditative farming experience without the wait. Performance optimization for Meta Quest was also demanding, requiring careful LOD management and draw call reduction.'
    },
    {
      icon: '🚀',
      question: 'Future Improvements',
      answer: 'Given more time, I would add multiplayer support for cooperative farming, implement procedural garden generation for replayability, and expand the recipe system with more complex cooking mechanics. I\'d also explore hand-tracking support for more natural planting interactions and add seasonal variations that affect crop growth patterns. Voice commands for inventory management would further enhance accessibility.'
    }
  ]

  const customSections = (
    <div>
      {/* Section 1: Overview */}
      <RevealOnScroll>
        <section className='py-20'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-center' style={{ color: 'var(--brand-scale-12-light)' }}>
            Overview
          </h2>
          <p className='text-xl text-center mb-12' style={{ color: 'var(--muted)' }}>
            A glimpse of our game
          </p>

          {/* Game GIF/Video */}
          <div className='card-glass rounded-3xl overflow-hidden max-w-5xl mx-auto'>
            <div className='aspect-video bg-[var(--brand-scale-3-light)] flex items-center justify-center'>
              <div className='text-center p-8'>
                <div className='text-8xl mb-4'>🎮</div>
                <p className='text-lg font-semibold mb-2' style={{ color: 'var(--brand-scale-12-light)' }}>
                  Game Overview GIF Placeholder
                </p>
                <p className='text-sm' style={{ color: 'var(--muted)' }}>
                  Place looping gameplay GIF or video here
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className='text-center mt-12 animate-bounce'>
            <div className='text-3xl' style={{ color: 'var(--accent-600)' }}>
              ↓
            </div>
            <p className='text-sm mt-2' style={{ color: 'var(--muted)' }}>
              Scroll to explore
            </p>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 2: Inspiration */}
      <RevealOnScroll>
        <section className='py-32'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            {/* Left: Image */}
            <div className='card-glass rounded-3xl overflow-hidden'>
              <div className='aspect-[4/3] bg-[var(--brand-scale-3-light)] flex items-center justify-center'>
                <div className='text-center p-8'>
                  <div className='text-6xl mb-4'>🌾</div>
                  <p style={{ color: 'var(--muted)' }}>Inspiration Image</p>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6' style={{ color: 'var(--brand-scale-12-light)' }}>
                Inspiration & Story
              </h2>
              <p className='text-lg mb-6 leading-relaxed' style={{ color: 'var(--muted)' }}>
                In a world increasingly disconnected from the origins of our food, Harvest & Feast offers
                a return to the roots of agriculture through immersive VR technology. We wanted to create
                an experience that celebrates the full farm-to-table journey.
              </p>
              <p className='text-lg mb-6 leading-relaxed' style={{ color: 'var(--muted)' }}>
                Inspired by cozy farming games like Stardew Valley and the tactile satisfaction of VR
                cooking experiences, our team set out to combine the meditative nature of gardening with
                the creative joy of cooking—all within a fully immersive virtual environment.
              </p>
              <p className='text-lg leading-relaxed' style={{ color: 'var(--muted)' }}>
                The result is a relaxing yet engaging VR experience that transforms simple farming tasks
                into meaningful interactions, rewarding patience and care with the satisfaction of creating
                a feast from seeds you planted yourself.
              </p>
            </div>
          </div>
        </section>
      </RevealOnScroll>


      {/* Section 4: Key Mechanics */}
      <RevealOnScroll>
        <section className='py-32'>
          <h2 className='text-3xl md:text-5xl font-bold mb-16 text-center' style={{ color: 'var(--accent-600)' }}>
            KEY MECHANICS
          </h2>

          {/* Tab Navigation */}
          <div className='flex flex-wrap justify-center gap-3 mb-12'>
            {mechanics.map((mechanic, index) => (
              <button
                key={mechanic.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === index
                    ? 'shadow-lg scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
                style={{
                  background: activeTab === index
                    ? 'var(--accent-600)'
                    : 'var(--brand-scale-3-light)',
                  color: activeTab === index ? 'white' : 'var(--brand-scale-12-light)'
                }}
              >
                {mechanic.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className='grid md:grid-cols-5 gap-8 items-start'>
            {/* Left: Video/GIF (40%) */}
            <div className='md:col-span-2'>
              <div className='card-glass rounded-3xl overflow-hidden sticky top-8'>
                <div className='aspect-video bg-[var(--brand-scale-3-light)] flex items-center justify-center'>
                  <div className='text-center p-8'>
                    <div className='text-6xl mb-4'>🎬</div>
                    <p style={{ color: 'var(--muted)' }}>
                      {mechanics[activeTab].title} Demo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Details (60%) */}
            <div className='md:col-span-3'>
              <div className='card-glass rounded-3xl p-8'>
                <h3 className='text-2xl font-bold mb-4' style={{ color: 'var(--brand-scale-12-light)' }}>
                  {mechanics[activeTab].title}
                </h3>

                <div className='mb-6'>
                  <h4 className='text-lg font-semibold mb-3 flex items-center gap-2' style={{ color: 'var(--brand-scale-12-light)' }}>
                    <span>📌</span> What It Does
                  </h4>
                  <p className='text-base leading-relaxed' style={{ color: 'var(--muted)' }}>
                    {mechanics[activeTab].description}
                  </p>
                </div>

                <div>
                  <h4 className='text-lg font-semibold mb-4 flex items-center gap-2' style={{ color: 'var(--brand-scale-12-light)' }}>
                    <span>⚙️</span> Design Highlights
                  </h4>
                  <ul className='space-y-3'>
                    {mechanics[activeTab].highlights.map((highlight, idx) => (
                      <li key={idx} className='flex items-start gap-3'>
                        <span className='text-lg' style={{ color: 'var(--accent-600)' }}>•</span>
                        <span style={{ color: 'var(--muted)' }}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 5: Technical Implementation */}
      <section className='py-32 bg-[var(--brand-scale-2-light)] -mx-6 px-6 md:-mx-12 md:px-12'>
        <h2 className='text-3xl md:text-5xl font-bold mb-16 text-center' style={{ color: 'var(--accent-600)' }}>
          TECHNICAL IMPLEMENTATION
        </h2>

        <div className='space-y-24 max-w-6xl mx-auto'>
          {technicalSystems.map((system, index) => (
            <RevealOnScroll key={system.title}>
              <div className={`grid md:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Left/Right: Thumbnail */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className='card-glass rounded-3xl overflow-hidden'>
                    <div className='aspect-video bg-[var(--brand-scale-3-light)] flex items-center justify-center'>
                      <div className='text-center p-8'>
                        <div className='text-6xl mb-4'>⚙️</div>
                        <p className='font-semibold' style={{ color: 'var(--brand-scale-12-light)' }}>
                          {system.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right/Left: Implementation Details */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className='text-2xl font-bold mb-4' style={{ color: 'var(--brand-scale-12-light)' }}>
                    {system.title}
                  </h3>
                  <p className='text-lg mb-6 leading-relaxed' style={{ color: 'var(--muted)' }}>
                    {system.description}
                  </p>

                  <div className='mb-6'>
                    <h4 className='font-semibold mb-2' style={{ color: 'var(--accent-600)' }}>
                      Implementation Approach:
                    </h4>
                    <p style={{ color: 'var(--muted)' }}>{system.implementation}</p>
                  </div>

                  {/* Code Snippet - Collapsible */}
                  <div className='bg-[#1e1e1e] rounded-2xl overflow-hidden'>
                    <button
                      onClick={() => toggleCode(index)}
                      className='w-full p-4 flex items-center justify-between hover:bg-[#252525] transition-colors'
                    >
                      <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded-full bg-red-500'></div>
                        <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                        <div className='w-3 h-3 rounded-full bg-green-500'></div>
                        <span className='ml-4 text-sm text-gray-400'>C# Implementation</span>
                      </div>
                      <span className='text-gray-400 text-sm'>
                        {expandedCode[index] ? '▼ Collapse' : '▶ Expand Code'}
                      </span>
                    </button>
                    {expandedCode[index] && (
                      <div className='px-6 pb-6 overflow-x-auto'>
                        <pre className='text-sm text-gray-300'>
                          <code>{system.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Section 6: Gameplay Video */}
      <RevealOnScroll>
        <section className='py-32'>
          <div className='max-w-5xl mx-auto'>
            <h2 className='text-3xl md:text-5xl font-bold mb-8 text-center' style={{ color: 'var(--accent-600)' }}>
              GAMEPLAY VIDEO
            </h2>
            <p className='text-center text-lg mb-12' style={{ color: 'var(--muted)' }}>
              Watch the complete farm-to-feast experience
            </p>

            {/* Video Player */}
            <div className='card-glass rounded-3xl overflow-hidden mb-8'>
              <div className='aspect-video bg-[var(--brand-scale-3-light)] flex items-center justify-center'>
                <div className='text-center p-8'>
                  <div className='text-8xl mb-4'>▶️</div>
                  <p className='text-xl font-semibold' style={{ color: 'var(--brand-scale-12-light)' }}>
                    Gameplay Video Placeholder
                  </p>
                  <p style={{ color: 'var(--muted)' }}>
                    Embed YouTube/Vimeo video here
                  </p>
                </div>
              </div>
            </div>

            {/* Video Chapters */}
            <div className='flex flex-wrap gap-3 justify-center mb-12'>
              {[
                { time: '0:00', label: 'Introduction' },
                { time: '0:15', label: 'Planting' },
                { time: '0:45', label: 'Watering' },
                { time: '1:20', label: 'Harvesting' },
                { time: '2:00', label: 'Cooking' },
                { time: '2:45', label: 'Final Feast' }
              ].map((chapter) => (
                <button
                  key={chapter.time}
                  className='px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all'
                  style={{ background: 'var(--brand-scale-3-light)', color: 'var(--brand-scale-12-light)' }}
                >
                  {chapter.time} - {chapter.label}
                </button>
              ))}
            </div>

            {/* Download Button */}
            <div className='text-center'>
              <a
                href='https://itch.io/harvest-and-feast'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block px-8 py-4 rounded-full font-bold text-lg text-white shadow-xl hover:scale-105 transition-all'
                style={{ background: 'linear-gradient(135deg, var(--accent-600) 0%, var(--accent-500) 100%)' }}
              >
                🎮 Download the Game on itch.io
              </a>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Section 7: Results & Reflection */}
      <RevealOnScroll>
        <section className='py-32'>
          <h2 className='text-3xl md:text-5xl font-bold mb-16 text-center' style={{ color: 'var(--accent-600)' }}>
            RESULTS & REFLECTION
          </h2>

          {/* Reflection Cards - Horizontal Layout */}
          <StaggerReveal staggerDelay={150}>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
              {reflections.map((reflection) => (
                <div key={reflection.question} className='stagger-item card-glass rounded-3xl p-6 flex flex-col'>
                  <div
                    className='w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4'
                    style={{ background: 'var(--accent-600)', color: 'white' }}
                  >
                    {reflection.icon}
                  </div>
                  <h3 className='text-xl font-bold mb-4' style={{ color: 'var(--brand-scale-12-light)' }}>
                    {reflection.question}
                  </h3>
                  <blockquote
                    className='text-base leading-relaxed italic border-l-4 pl-4 py-2 flex-1'
                    style={{
                      color: 'var(--muted)',
                      borderColor: 'var(--accent-600)'
                    }}
                  >
                    {reflection.answer}
                  </blockquote>
                </div>
              ))}
            </div>
          </StaggerReveal>
        </section>
      </RevealOnScroll>
    </div>
  )

  return <BaseProjectDetail project={project} customSections={customSections} />
}
