import { Injectable } from '@angular/core';
import {Project} from '../_models/project';
import {Tag} from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class Projects {
  projects: Project[] = [
    { id: 0, name: 'First sample project',  subtitle: 'Ludum Dare 1', summary: 'This is a short summary for the first sample project', description: 'This is a much longer description for the first sample project Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis earum enim optio, similique sint voluptas? Animi nobis officia quis quisquam recusandae. Blanditiis dicta id minima modi nulla tenetur totam?', projectLink: '', tags: [ Tag.UNITY, Tag.CSHARP ], pics: [] },
    { id: 1, name: 'Second sample project', subtitle: 'Ludum Dare 2', summary: 'This is a short summary for the first sample project', description: 'This is a much longer description for the second sample project Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis earum enim optio, similique sint voluptas? Animi nobis officia quis quisquam recusandae. Blanditiis dicta id minima modi nulla tenetur totam?', projectLink: '', tags: [ Tag.UNITY ], pics: [] },
    { id: 2, name: 'Third sample project',  subtitle: 'Ludum Dare 3', summary: 'This is a short summary for the third sample project', description: 'This is a much longer description for the first sample project Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis earum enim optio, similique sint voluptas? Animi nobis officia quis quisquam recusandae. Blanditiis dicta id minima modi nulla tenetur totam?', projectLink: '', tags: [ Tag.CSHARP ], pics: [] },
    { id: 3, name: 'Fourth sample project', subtitle: 'Ludum Dare 4', summary: 'This is a short summary for the first sample project', description: 'This is a much longer description for the fourth sample project Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis earum enim optio, similique sint voluptas? Animi nobis officia quis quisquam recusandae. Blanditiis dicta id minima modi nulla tenetur totam?', projectLink: '', tags: [ Tag.GODOT ], pics: [] },
    { id: 4, name: 'Fifth sample project',  subtitle: 'Ludum Dare 5', summary: 'This is a short summary for the fifth sample project', description: 'This is a much longer description for the fourth sample project Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis earum enim optio, similique sint voluptas? Animi nobis officia quis quisquam recusandae. Blanditiis dicta id minima modi nulla tenetur totam?', projectLink: '', tags: [ Tag.GODOT, Tag.CSHARP ], pics: [] },
  ];

  GetProjects() {
    return this.projects;
  }

  GetProjectById(projectId: number) : Project {
    return <Project>this.projects.find((p) => p.id === projectId);
  }
}
