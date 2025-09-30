import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-nav',
  imports: [
    MatToolbar,
    RouterLink,
    MatButton,
    RouterLinkActive
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {

}
