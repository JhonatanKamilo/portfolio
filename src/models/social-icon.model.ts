import type { Social } from './social.model';

export interface SocialIconProps extends Social {
  radius: number;
}

export type Phase = 'hidden' | 'launch' | 'float';