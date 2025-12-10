import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const MovieRotations = ({ movies = [] }) => {
  if (!movies || movies.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const len = movies.length;

  // auto-roll
  useEffect(() => {
    if (len <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % len);
    }, 3000);

    return () => clearInterval(timer);
  }, [len, isHovered]);

  // position of each movie relative to current center: -1, 0, 1, others ignored
  const getRelativePosition = (index) => {
    let diff = index - currentIndex;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
  };

  const CARD_OFFSET = 230; // horizontal distance between cards in px

  return (
    <div className="relative w-full h-full">
      {/* Title */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <h3 className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-gray-500">
          My movie rotations
        </h3>
      </div>

      {/* Poster area */}
      <div
        className="absolute inset-x-0 top-8 bottom-2 flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-full">
          {movies.map((movie, index) => {
            const pos = getRelativePosition(index);

            // only render center and its 2 neighbours
            if (Math.abs(pos) > 1) return null;

            const isCenter = pos === 0;

            return (
              <motion.div
                key={movie.title + index}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[32px] overflow-hidden shadow-2xl bg-black/5 aspect-[3/4] cursor-pointer"
                style={{
                  height: isCenter ? "88%" : "70%", // center fits fully in the square
                }}
                initial={false}
                animate={{
                  x: pos * CARD_OFFSET, // -offset, 0, +offset
                  scale: isCenter ? 1 : 0.9,
                  opacity: isCenter ? 1 : 0.55,
                  y: isCenter ? 0 : 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 26,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />

                {/* gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  initial={false}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* title */}
                <motion.div
                  className="absolute inset-0 flex items-end justify-center p-4"
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 16,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-white font-bold text-center text-base leading-tight">
                    {movie.title}
                  </h4>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>


      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {movies.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-5 bg-gray-800" : "w-2 bg-gray-400/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
