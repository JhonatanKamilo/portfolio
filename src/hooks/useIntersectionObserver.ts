import { useEffect, useState, type RefObject } from 'react';

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options: IntersectionObserverInit = { threshold: 0 }
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options.threshold, options.root, options.rootMargin]);

  return isIntersecting;
}
