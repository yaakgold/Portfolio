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
      name: "The Problematic Programmer",
      subtitle: "Brackeys Game Jam 2026.2",
      summary: "For this project, I wanted to focus on creating a multiplayer game, even though that is usually a death sentence in jam projects. I utilized Unity's new Multiplayer Services API as my backend system.",
      description: "I had learned a lot from older multiplayer games I had worked on, but this one was different because I was handling a lot more interaction than I had dealt with previously. However, for me, that ended up making the development process more fun. I enjoyed falling into new issues that I would have never had in a single player game, but now had to solve. For instance, I spent about 2 hours trying to figure out a method to share the networked object between two different components. After a lot of testing, I figured out Unity had an updated way of passing network object data. Once I realized this, not only was I able to solve this issue, but I now had a better solution for other problems. I also now have a much more robust architecture in mind for future multiplayer projects knowing this.",
      projectLinks: [
        { name: 'Github', location: 'https://github.com/yaakgold/Brackeys-2026.2', icon: null },
        { name: 'Brackeys Game Jam 2026.2', location: 'https://itch.io/jam/brackeys-16/rate/4952461', icon: null },
        { name: 'Windows', location: 'games/The Problematic Programmer.zip', icon: 'download' },
        { name: 'Linux', location: 'games/The Problematic Programmer_Linux.zip', icon: 'download' },
      ],
      pics: ['./The Problematic ProgrammerMain.png', './TPP_1.png', './TPP_2.png', './TPP_3.png'],
      tags: [ Tag.UNITY, Tag.SOLO ]
    },
    {
      id: 1,
      name: 'The Collector\'s Horde',
      subtitle: 'Ludum Dare 58',
      summary: 'The plan for this Ludum Dare competition was to use my new process for drawing to see what I could create fully on my own with hand drawn assets. It did not go to plan, but I learned a lot from this process.',
      description: 'One of the biggest things I learned from this, is that art takes a lot longer than I expected it to. Even though my art isn\'t the highest quality, and surely won\'t win me any awards, it took a lot longer to create than I expected. I had a lot of fun with this jam, and I plan to continue working on my art skills, both in terms of speed and design work. Hopefully next time, I will plan better so I can add audio to the game',
      projectLinks: [
        { name: 'Github', location: 'https://github.com/yaakgold/LD-58', icon: null },
        { name: 'Ludum Dare 58', location: 'https://ldjam.com/events/ludum-dare/58/the-collectors-horde', icon: null },
        { name: 'Download', location: '/games/TCH_Windows.zip', icon: 'download' },
      ],
      tags: [ Tag.VB, Tag.SOLO ],
      pics: ['/TCH_1.png', '/TCH_2.png'],
    },
    {
      id: 2,
      name: 'Aligeon',
      subtitle: 'Ludum Dare 50',
      summary: 'Aligeon is a project made for the 48-hour compo Ludum Dare game jam competition. I created my own random room generation system as the main component I learned for this project.',
      description: 'This system was really important to me to get right, and it was the first thing I worked on as I thought it would also take me the longest to complete. I was wrong, because I was able to design and develop a robust room generation system that when new challenges appeared later in the development of Aligeon, I was able to easily adapt and utilize the pre-existing system.',
      projectLinks: [
        { name: 'Github', location: 'https://github.com/yaakgold/LD50', icon: null },
        { name: 'Ludum Dare 50', location: 'https://ldjam.com/events/ludum-dare/50/aligeon', icon: null },
        { name: 'Download', location: '/games/Aligeon_Windows.zip', icon: 'download' }
      ],
      tags: [ Tag.UNITY, Tag.SOLO ],
      pics: ['/AligeonMainMenu.png', '/AligeonTutorialPage.png', '/AligeonDeathScreen.png'],
    },

    {
      id: 3,
      name: 'POST Your Game',
      subtitle: 'GMTK \'24',
      summary: 'POST Your Game is a short game used as an opportunity for me to learn the Godot game engine. I attempted to use as many different parts of the engine as I could, including teaching myself how to play video files.',
      description: 'I decided to work with a new engine because I found myself needing a new spark for making games. While I am still making new games in Unity, I found this process enlightening because it required me to learn the entire engine on my own. With Godot being a relatively young engine, especially when compared to Unity, there weren\'t a lot of answers for very specific questions I had. This process was really good for me, and helped me reignite my love for making games, and has helped me look for new and exciting ideas.',
      projectLinks: [
        { name: 'Github', location: 'https://github.com/yaakgold/GMTK24', icon: null },
        { name: 'GMTK 2024', location: 'https://itch.io/jam/gmtk-2024/rate/2907100', icon: null },
        { name: 'Download', location: '/games/POST Your Game.zip', icon: 'download' }
      ],
      tags: [ Tag.GODOT, Tag.SOLO ],
      pics: ['/POSTYourGame.png', '/PYGScreen1.png', '/PYGScreen2.png'],
    },

    {
      id: 4,
      name: 'Severed Odyssey',
      subtitle: 'SkillsUSA 2018 Interactive Media and Video Game Design',
      summary: 'This was my first foray into Unity, and working on a large project. I was responsible for a large majority of the coding, even having to go so far as to have my teammate on the project teach me calculous concepts I hadn\'t learned yet.',
      description: 'Severed Odyssey was a once in a lifetime opportunity for me, and I am so glad I took it and ran with it. Working with one of my friends on the game, who helped me learn a lot about math, proper teamwork, and programming as he was older than me, was something I will forever cherish. As well, I will always remember taking this game to Louisville, Kentucky for the National level of the competition. During the State level, we received a note saying to add more to the game itself, so I had a great idea of adding multiplayer, with 2 weeks until the presentation event. Even though I had never programmed multiplayer before, I managed to finish it up 2 nights before we were set to present. In the end, we achieved 9th place at the National level!',
      projectLinks: [
        { name: 'Github', location: 'https://github.com/yaakgold/SkillsGameCode', icon: null },
        { name: 'Download', location: '/games/Severed Odyssey.zip', icon: 'download' }
      ],
      tags: [ Tag.UNITY, Tag.TEAM ],
      pics: ['/SeveredOdysseyMainMenu.png', '/SeveredOdysseyGame1.png', '/SeveredOdysseyGame2.png']
    },

    {
      id: 5,
      name: 'Hell Manager',
      subtitle: 'Ludum Dare 33',
      summary: 'Hell Manager is the first game I ever made. I only had 12 hours to work on it due to other responsibilities, and the only code I knew at the time was Visual Basic. I didn\'t even understand events or anything beyond what a method was at the time, so I am very proud of this game, and the feedback I received from it.',
      description: 'Sadly, I no longer have access to the code for this game, and it appears that Ludum Dare is no longer showing the page with all of the comments I received for the game. Despite no longer having the records of it, I will always talk about this project, and will always want to remember it because it was the first game I ever made without following a tutorial.',
      projectLinks: [
        { name: 'Download', location: '/games/HellManager.exe', icon: 'download' },
      ],
      tags: [ Tag.VB, Tag.SOLO ],
      pics: ['/HellManagerMainMenu.png']
    },
  ];

  GetProjects() {
    return this.projects;
  }

  GetProjectById(projectId: number) : Project {
    return <Project>this.projects.find((p) => p.id === projectId);
  }
}
