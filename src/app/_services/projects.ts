import { Injectable } from '@angular/core';
import {Project} from '../_models/project';
import {Tag} from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class Projects {
  projects: Project[] = [
    {
      id: 0,
      name: 'Aligeon',
      subtitle: 'Ludum Dare 50',
      summary: 'Aligeon is a project made for the 48-hour compo Ludum Dare gme jam competition. I created my own random room generation system as the main component I learned for this project.',
      description: '',
      projectLink: 'https://github.com/yaakgold/LD50',
      tags: [ Tag.UNITY, Tag.SOLO ],
      pic: '/AligeonMainMenu.png'
    },

    {
      id: 1,
      name: 'POST Your Game',
      subtitle: 'GMTK \'24',
      summary: 'POST Your Game is a short game used as an opportunity for me to learn the Godot game engine. I attempted to use as many different parts of the engine as I could, including teaching myself how to play video files.',
      description: '',
      projectLink: '',
      tags: [ Tag.GODOT, Tag.SOLO ],
      pic: '/POSTYourGame.png'
    },

    {
      id: 2,
      name: 'Severed Odyssey',
      subtitle: 'SkillsUSAA 2018 Interactive Media and Video Game Design',
      summary: 'This was my first foray in Unity, and working on a very long project. I was responsible for a large majority of the coding, even having to go so far as to have my teammate on the project teach my calculous concepts I hadn\'t learned yet, so we could make the shooting feel better.',
      description: '',
      projectLink: '',
      tags: [ Tag.UNITY, Tag.TEAM ],
      pic: '/SeveredOdysseyMainMenu.png'
    },

    {
      id: 3,
      name: 'Hell Manager',
      subtitle: 'Ludum Dare 33',
      summary: 'Hell Manager is the first game I ever made. I only had 12 hours to work on it due to other responsibilities, and the only code I knew at the time was Visual Basic. I didn\'t even understand events or anything beyond what a method was at the time, so I am very proud of this game, and the feedback I received from it.',
      description: '',
      projectLink: '',
      tags: [ Tag.VB, Tag.SOLO ],
      pic: '/HellManagerMainMenu.png'
    },
  ];

  GetProjects() {
    return this.projects;
  }

  GetProjectById(projectId: number) : Project {
    return <Project>this.projects.find((p) => p.id === projectId);
  }
}
