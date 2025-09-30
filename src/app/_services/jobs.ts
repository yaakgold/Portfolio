import { Injectable } from '@angular/core';
import {Job} from '../_models/job';

@Injectable({
  providedIn: 'root'
})
export class Jobs {
  jobs: Job[] = [
    {
      company: 'SelectHealth',
      position: 'Full Stack Software Engineer - Staff II',
      startDate: 'November 2022',
      endDate: 'Present',
      specifics: [
        'Communicate current task progress, and keep other teams informed on total project completeness and expected completion date.',
        'Develop simultaneous full-stack development tasks through TypeScript, Angular, React, C# and SQL.',
        'Own full-stack creation of APIs and the front-end design/implementation for the users.',
        'Create, design and maintain CI/CD pipeline for multiple projects.',
        'Quickly learn and understand a diverse set of codebases to create new projects for different teams.',
        'Implement cloud systems for queue management between projects.',
      ]
    },

    {
      company: 'Motorola Solutions',
      position: 'Software Engineer Extern',
      startDate: 'June 2022',
      endDate: 'September 2022',
      specifics: [
        'Spearheaded project development as the lead developer by quickly learning React.',
        'Ensured seamless communication between my intern team, a different established intern team and the senior developers.'
      ]
    },

    {
      company: 'Level Home Inc.',
      position: 'Backend Developer Extern',
      startDate: 'March 2022',
      endDate: 'June 2022',
      specifics: [
        'Self-taught Python to develop an integrated project that interfaced with multiple large codebases.',
        'Created micro services to interact with databases and handle notifications.',
        'Participated in code reviews.'
      ]
    },

    {
      company: 'Empire Technological Group, LTD',
      position: 'Game Development Extern',
      startDate: 'January 2022',
      endDate: 'March 2022',
      specifics: [
        'Led the successful recreation of an existing game from Java to Unity without access to the source code.',
        'Focused on recreating all aspects of the UI from the original game into Unity UI system.',
        'Participated in continuous playtesting of both the original and new game to ensure both are exactly the same.'
      ]
    },
  ];

  GetJobs()
  {
    return this.jobs;
  }
}
