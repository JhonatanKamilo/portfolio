// Efecto de easing para el desplazamiento suave
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Efecto de smooth scroll
export const smoothScroll = (targetY: number, duration: number = 1000) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let start: number | null = null;

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const progress = (currentTime - start) / duration;

    if (progress < 1) {
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, targetY);
    }
  };

  requestAnimationFrame(animation);
};