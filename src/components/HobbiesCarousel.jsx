import { useEffect, useRef } from 'react';

export const HobbiesCarousel = ({ hobbies }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // Pixels per frame

    const animate = () => {
      if (!scrollContainer) return;

      scrollPosition += scrollSpeed;

      // Reset scroll position when reaching halfway (since we duplicate content)
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hobbies]);

  // Duplicate hobbies array for seamless loop
  const duplicatedHobbies = [...hobbies, ...hobbies];

  return (
    <div className="w-full overflow-hidden py-8">
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
        className="flex gap-6 overflow-x-scroll scroll-smooth hide-scrollbar"
      >
        {duplicatedHobbies.map((hobby, index) => (
          <div
            key={`${hobby.id}-${index}`}
            className="flex-shrink-0 group relative"
          >
            <div className="relative w-[300px] h-[200px] rounded-2xl overflow-hidden">
              {/* Image */}
              <img
                src={hobby.image}
                alt={hobby.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h4 className="text-xl font-bold text-white">
                  {hobby.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
