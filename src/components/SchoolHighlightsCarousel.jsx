import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SchoolHighlightsCarousel = ({ highlights }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === highlights.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, highlights.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === highlights.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? highlights.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="card-glass-gradient rounded-3xl overflow-hidden relative h-full min-h-[350px]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >

      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {/* Slides */}
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image */}
            <img
              src={highlight.image}
              alt={highlight.title}
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h4 className="text-xl font-bold text-white mb-1">
                {highlight.title}
              </h4>
              {highlight.subtitle && (
                <p className="text-sm text-white/80">
                  {highlight.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all flex items-center justify-center group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all flex items-center justify-center group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute top-10 left-0 right-0 flex justify-center gap-2 z-20">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/75'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
