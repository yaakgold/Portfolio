import {Tag} from './tag';
import {LinkModel} from './link-model';

export interface Project {
  id: number;
  name: string;
  subtitle: string;
  summary: string;
  description: string;
  projectLinks: LinkModel[];
  pics: string[];
  tags: Tag[];
}
