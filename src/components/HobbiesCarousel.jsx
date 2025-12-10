import { useEffect, useRef } from 'react';

export const HobbiesCarousel = ({ images }) => {
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
  }, [images]);

  // Duplicate images array for seamless loop
  const duplicatedImages = [...images, ...images];

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
        className="flex gap-3 overflow-x-scroll hide-scrollbar pl-8"
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`image-${index}`}
            className="flex-shrink-0"
          >
            <img
              src={image}
              alt={`Hobby ${index + 1}`}
              className="h-[400px] w-auto object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
