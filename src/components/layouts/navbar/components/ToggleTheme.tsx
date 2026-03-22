import { useTheme } from '@contexts';
import { MoonStars, SunDim } from '@boxicons/react'

export function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200 hover:bg-[var(--color-secondary)] active:bg-[var(--color-surface)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
      aria-label="Cambiar tema"
      title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      {theme === 'light' ? (
        <>
          <MoonStars className="cursor-pointer"/>
        </>
      ) : (
        <>
        <SunDim className="cursor-pointer"/>
        </>
      )}
    </button>
  );
}
