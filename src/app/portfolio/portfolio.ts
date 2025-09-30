import {Component, inject, model, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ProjectCard} from '../project-card/project-card';
import {NgClass} from '@angular/common';
import {Projects} from '../_services/projects';
import {Project} from '../_models/project';

export interface DialogData {
  project: Project;
}

@Component({
  selector: 'app-portfolio',
  imports: [
    ProjectCard,
    NgClass
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements OnInit {

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: Projects) {
    this.titleService.setTitle('Yaakov Goldberg - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
