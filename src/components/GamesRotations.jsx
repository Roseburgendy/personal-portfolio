import { useEffect, useRef, useState } from "react";

export const GamesRotations = ({ games }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPos = 0;
    const baseSpeed = 24; // px per second (NOT per frame)

    const animate = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      // When hovered, freeze motion but keep frame updates so delta stays stable
      const speed = scrollContainer.matches(":hover") ? 0 : baseSpeed;

      scrollPos += (speed * delta) / 1000;

      const maxScroll = scrollContainer.scrollHeight / 2;

      // Smooth wrap-around instead of snapping back
      if (scrollPos >= maxScroll) {
        scrollPos = scrollPos - maxScroll + 0.0001; // tiny offset to avoid visual "jump"
      }

      // Smooth interpolation for scrollTop
      scrollContainer.scrollTop += (scrollPos - scrollContainer.scrollTop) * 0.08;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [games]);

  const duplicatedGames = [...games, ...games];

  return (
    <div className="w-full h-full overflow-hidden">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div
        ref={scrollRef}
        className="flex flex-col gap-4 overflow-y-scroll hide-scrollbar py-6 h-full"
      >
        {duplicatedGames.map((game, index) => (
          <div
  key={`game-${index}`}
  className="flex-shrink-0 relative group snap-center flex items-center justify-center"
  onMouseEnter={() => setHoveredIndex(index)}
  onMouseLeave={() => setHoveredIndex(null)}
>
  <div className="w-[200px] aspect-[2/3] rounded-2xl overflow-hidden flex items-center justify-center bg-black/10">
    <img
      src={game.cover}
      alt={game.title}
      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-105"
    />
  </div>

  {/* Hover Gradient */}
  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

  {/* Hover Title */}
  <div
    className={`absolute inset-0 flex items-end justify-center p-5 transition-all duration-300 ${
      hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    }`}
  >
    <h4 className="text-white font-bold text-center text-base leading-tight">
      {game.title}
    </h4>
  </div>
</div>


        ))}
      </div>
    </div>
  );
};
