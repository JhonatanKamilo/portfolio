import type { Project } from './project.model';

export interface ProjectCardProps {
  project: Project;
  index: number;
  isLast: boolean;
}