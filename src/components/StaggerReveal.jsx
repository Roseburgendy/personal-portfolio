import { useEffect, useRef } from "react";

export const StaggerReveal = ({ children, staggerDelay = 100 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const childElements = ref.current.querySelectorAll('.stagger-item');
          childElements.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * staggerDelay);
          });
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [staggerDelay]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};
