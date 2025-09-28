import {Component, inject, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {
  MatCard, MatCardActions,
  MatCardContent, MatCardFooter,
  MatCardHeader, MatCardMdImage,
  MatCardSubtitle,
  MatCardTitle, MatCardTitleGroup
} from '@angular/material/card';
import {NgOptimizedImage} from '@angular/common';
import {Projects} from '../_services/projects';
import {Project} from '../_models/project';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {MatButton} from '@angular/material/button';
import {DialogProject} from '../dialog-project/dialog-project';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardHeader,
    NgOptimizedImage,
    MatCardMdImage,
    MatCardTitleGroup,
    MatCardFooter,
    MatChip,
    MatChipSet,
    MatButton,
    MatCardActions
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  readonly dialog = inject(MatDialog)

  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectService: Projects) {
    this.titleService.setTitle('Yaakov Goldberg - Home');
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogProject, {
      data: { project: this.featuredProject },
      minWidth: '90vw',
      height: '90vh',
    });
  }
}
