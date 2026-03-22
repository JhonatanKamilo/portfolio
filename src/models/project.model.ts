export type ProjectStatus = 'public' | 'private' | 'in-progress';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  stats: { label: string; value: string }[];
  href: string;
  status: ProjectStatus;
}
