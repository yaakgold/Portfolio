import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [RouterModule, RouterOutlet, MatSidenavContainer, MatSidenav, MatSidenavContent, MatIcon, MatFabButton, MatMiniFabButton],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Ya\'akov Goldberg';
  events: string[] = [];
  opened = false;
}
