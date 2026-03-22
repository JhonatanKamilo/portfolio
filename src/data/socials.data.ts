import { Github, Linkedin, Whatsapp } from '@thesvg/react';
import type { Social } from '@models';

export const emailContact = 'jhonatancamilo1535@gmail.com';

export const socials: Social[] = [
  { icon: Github,   href: 'https://github.com/tu-usuario', angle: -60,  delay: 3000, bg: 'var(--blue-950)' },
  { icon: Linkedin, href: 'https://linkedin.com',          angle: 180,  delay: 3500, bg: 'var(--blue-200)' },
  { icon: Whatsapp, href: 'https://slack.com',             angle: 60,   delay: 4000, bg: 'var(--blue-50)'  },
];
