import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatActionList, MatListItem } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { Slide } from './models/slide.model';

@Component({
  standalone: true,
  imports: [RouterModule, RouterOutlet, MatSidenavContainer, MatSidenav, MatSidenavContent, MatIcon, MatFabButton, MatMiniFabButton, MatActionList, MatListItem, HomeComponent, GameComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Ya\'akov Goldberg';
  events: string[] = [];
  opened = false;
  showGame = true;

  slides: Slide[] = [
    {
      url: 'assets/images/HellManagerMainMenu.png',
      title: 'Hell Manager',
      subtitle: 'Ludum Dare 33',
      linkToCode: "https://yaakgold.itch.io/hellmanager",
      description: "Hell Manager was the first game I had ever made. I made it in Visual Basic and honestly the only thing" +
        " I learned was that I enjoyed making games, and how not to make games. It took me about 12 hours to make the game" +
        " and since I no longer have access to the original code, all I can remember was I made a lot of incorrect decisions," +
        " including not understanding methods yet, the only thing I really understood at the time was if-statements.",
      shortDescription: ""
    },
    {
      url: 'assets/images/SeveredOdysseyMainMenu.png',
      title: 'Severed Odyssey',
      subtitle: 'SkillsUSA 2018 Interactive Media and Video Game Design',
      linkToCode: "https://github.com/yaakgold/SkillsGameCode",
      description: "Severed Odyssey may be the second most important game I have made to get me to be a game developer. This" +
        " is because it was the first game that I built that took longer than a weekend to make. This also showed me a few things" +
        " about myself, including that I really enjoy making games full time. For this game, I made a lot of systems for the first" +
        " time. It was my first 3D game, so making movement and a camera controller was new to me. I also made the firing system, but" +
        " we ran into some issues where we decided to use calculus to make the firing of the weapon work properly. The problem was" +
        " I was still only in pre-calculus at the time, so my teammate, who was taking calculus taught me as much as I needed to know" +
        " to code the system. I also made my first inventory, which entailed a lot more UI work than I had ever done before. The reason" +
        " this game was so important, was because we won at the State level (by the skin of our teeth, which taught me an important lesson" +
        " about timing of work), and we were then able to move on to the National level, at which my team and I received the 9th place award." +
        " During this competition I learned that I could make games, not just for fun, but also for a career.",
      shortDescription: ""
    },
    {
      url: 'assets/images/AligeonMainMenu.png',
      title: 'Aligeon',
      subtitle: 'Ludum Dare 50',
      linkToCode: "https://github.com/yaakgold/LD50",
      description: "Aligeon is a rogue-like made in 48 hours for the Ludum Dare 50 game jam. I made the entire game," +
        " including audio, graphics and scripts. The biggest thing I learned while making the game was how quickly I can make" +
        " a random room generation system. I hand programmed the entire system in about the first two hours of working on" +
        " the game. I knew it would be important for this system to be as strong as possible, and I was correct. By me " +
        "coding it correctly, and with future plans in thought, it made adding features to the generation system easier.",
      shortDescription: ""
    },
    {
      url: 'assets/images/EverClockMainMenu.png',
      title: 'EverClock',
      subtitle: 'Brackeys Jam 2020.2',
      linkToCode: "https://github.com/yaakgold/Brackeys-Game-Jam-Rewind",
      description: "Everclock was a platformer created for the Brackeys 2020.2 game jam. The theme was 'rewind', so my teammate" +
        " and I decided to make the game have a \"rewind time\" ability. I learned two major things with this game: 1) Github," +
        " I had previously used it, but this was one of the first times I truly used it with another person. 2) Enemy code," +
        " I had, again, previously made enemy code, but this was a little more involved as there were multiple types of enemies" +
        " to be coded. I managed to make a system that I could adapt easily, and quickly make new enemies without having to" +
        " completely rewrite code.",
      shortDescription: ""
    },
    {
      url: 'assets/images/LettuceBeFriendsMainMenu.png',
      title: 'Lettuce Be Friends',
      subtitle: 'Ludum Dare 46',
      linkToCode: "https://github.com/yaakgold/Lettuce-Be-Friends",
      description: "Lettuce Be Friends was a game made for the Ludum Dare 46 game jam. The idea was to make a farming game." +
        " This was the first time I had made an animation that connected with other assets and that wasn't just ripped from" +
        " other public assets I could find online. I also had complete control over the camera for the first time. Previously" +
        " when I made games, I used the Unity provided camera systems, but for this game, I created a system similar to the" +
        " multi-cam system we can now use from Cinemachine.",
      shortDescription: ""
    },
    {
      url: 'assets/images/ProGamerMovesMainMenu.png',
      title: 'Pro Gamer Moves',
      subtitle: 'GMTK 2020 Game Jam',
      linkToCode: "",
      description: "Pro Gamer Moves was made for the GMTK 2020 Game Jam. We decided to make a game that was top-down, but" +
        " used 3D assets for the game. For this game, I made almost all of the code for the game. I learned a lot during the" +
        " creation of this game. A few of the things I learned was how to make a save system, which I made last minute, so I" +
        " had to adjust the code to fit the save system, but that wasn't as difficult as I was expecting it to be. Another" +
        " piece of code I learned how to write was camera to mouse interactions. Due to the game being top-down, but with a 3D" +
        " view the mouse was not a 1-to-1 world position to screen position, while also having to account for the objects the player" +
        " is dragging around on screen changes height when plugged in, I had to truly understand the difference between screen space" +
        " and world space.",
      shortDescription: ""
    }
  ];
}
