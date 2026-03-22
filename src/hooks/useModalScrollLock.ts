import { useEffect } from 'react';

export function useModalScrollLock(isOpen: boolean) {
  // Bloquear el scroll de fondo cuando el modal esta abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);
}