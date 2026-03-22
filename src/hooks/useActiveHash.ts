import { useEffect, useState } from 'react';

export function useActiveHash(to: string) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsActive(window.location.hash === to);
    };

    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [to]);

  return isActive;
}