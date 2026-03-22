import type { NavItem } from '@models';
import { smoothScroll } from '@utilities';
import { useActiveHash } from '@hooks';

export function NavLink({ label, to }: NavItem) {
  const isActive = useActiveHash(to);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to.startsWith('#')) {
      e.preventDefault();
      
      if (to === '#top') {
        window.location.hash = '';
        smoothScroll(0, 1200);
      } else {
        const element = document.querySelector(to);
        if (element) {
          window.location.hash = to;
          const targetY = element.getBoundingClientRect().top + window.scrollY - 20;
          smoothScroll(targetY, 1200);
        }
      }
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`relative text-sm tracking-widest uppercase font-medium transition-colors duration-300 group
        ${isActive
          ? 'text-(--color-accent)'
          : 'text-(--color-text-muted) hover:text-(--color-text)'
        }`}
    >
      {label}

      {/* Underline indicator */}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-(--color-accent) transition-all duration-300
          ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'}`}
      />
    </a>
  )
}