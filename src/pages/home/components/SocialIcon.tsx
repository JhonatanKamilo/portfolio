import type { SocialIconProps } from '@models';
import { calculateRadialPosition } from '@utilities';
import { useSocialIconPhase } from '@hooks';

export function SocialIcon({ icon: Icon, href, angle, delay, radius, bg }: SocialIconProps) {
  const phase = useSocialIconPhase(delay);

  const { tx, ty } = calculateRadialPosition(angle, radius);

  if (phase === 'hidden') { return null; }

  const cssVars = { '--tx': `calc(${tx}px - 50%)`, '--ty': `calc(${ty}px - 50%)`, backgroundColor: bg } as React.CSSProperties;
  const cls = ['absolute left-1/2 top-1/2', 'w-12 h-12 flex items-center justify-center', 'rounded-full border border-(--color-border)/40', 'shadow-lg hover:scale-105 transition-transform duration-200', phase === 'launch' ? 'icon-launch' : 'icon-float'].join(' ');

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={cssVars}>
      <Icon className="w-6 h-6 text-(--color-accent)" />
    </a>
  );
}
