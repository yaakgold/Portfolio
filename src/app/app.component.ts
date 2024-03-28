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
      url: 'assets/images/AligeonMainMenu.png',
      title: 'Aligeon',
      subtitle: 'Ludum Dare 50',
      description: "This is the game Aligeon, that I made completely solo in 48 hours"
    },
    {
      url: 'assets/images/ElementalMainMenu.png',
      title: 'Elemental',
      subtitle: 'Capstone Project',
      description: "This is the game Elemental, that I made for my senior project"
    },{
      url: 'assets/images/EverClockMainMenu.png',
      title: 'EverClock',
      subtitle: 'Brackeys Jam 2020.2',
      description: "This is the game EverClock, that I made for the Brackeys Game Jam 2020.2"
    },{
      url: 'assets/images/HellManagerMainMenu.png',
      title: 'Hell Manager',
      subtitle: 'Ludum Dare 33',
      description: "This is the game Hell Manager, that was the first game I ever made"
    },
    {
      url: 'assets/images/LettuceBeFriendsMainMenu.png',
      title: 'Lettuce Be Friends',
      subtitle: 'Ludum Dare 46',
      description: "This is the game Lettuce Be Friends, that I made on a team in 72 hours"
    },
    {
      url: 'assets/images/ProGamerMovesMainMenu.png',
      title: 'Pro Gamer Moves',
      subtitle: 'GMTK 2020 Game Jam',
      description: "This is the game Pro Gamer Moves, that I made that I made on a team in 72 hours"
    },
    {
      url: 'assets/images/SeveredOdysseyMainMenu.png',
      title: 'Severed Odyssey',
      subtitle: 'SkillsUSA 2018 Interactive Media and Video Game Design',
      description: "This is the game Severed Odyssey"
    }
  ];
}
