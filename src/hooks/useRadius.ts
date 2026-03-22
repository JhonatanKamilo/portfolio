import { useState, useLayoutEffect } from 'react';

export function useRadius() {
  const [radius, setRadius] = useState(250);
  
  useLayoutEffect(() => {
    function update() {
      if (window.innerWidth < 640) setRadius(150);
      else if (window.innerWidth < 1024) setRadius(170);
      else setRadius(250);
    }
    
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  
  return radius;
}
