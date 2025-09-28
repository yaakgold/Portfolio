import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Nav} from './nav/nav';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Nav,
    MatDivider,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
