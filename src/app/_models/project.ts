import {Tag} from './tag';

export interface Project {
  id: number;
  name: string;
  subtitle: string;
  summary: string;
  description: string;
  projectLink: string;
  pics: string[];
  tags: Tag[];
}
