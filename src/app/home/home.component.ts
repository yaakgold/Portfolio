import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule, NgOptimizedImage, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  animationSpeed = 500;
  autoPlay = false;
  autoPlaySpeed = 3000;
  currentSlide = 0;
  hidden = false;
  @Input() slides: any[] = [];


  next() {
    const currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  previous() {
    const currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  ngOnInit() {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlaySpeed);
    }
  }
}
