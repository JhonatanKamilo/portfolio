import { useState, useEffect } from 'react';
import type { Phase } from '@models';

export function useSocialIconPhase(delay: number): Phase {
  const [phase, setPhase] = useState<Phase>('hidden');
  
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('launch'), delay);
    const t2 = setTimeout(() => setPhase('float'), delay + 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [delay]);

  return phase;
}