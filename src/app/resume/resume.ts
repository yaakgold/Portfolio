import {Component, OnInit, Renderer2} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {Jobs} from '../_services/jobs';
import {Job} from '../_models/job';
import {WorkExperience} from '../work-experience/work-experience';

@Component({
  selector: 'app-resume',
  imports: [
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatAccordion,
    MatButton,
    MatIcon,
    MatTabGroup,
    MatTab,
    WorkExperience
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume implements OnInit {

  jobs = {} as Job[];

  education =
    {
      company: 'Neumont College of Computer Science',
      position: 'Neumont College of Computer Science',
      startDate: '2019',
      endDate: '2022',
      specifics: [
        'Bachelor\'s of Science in Software and Game Development',
        'Cumulative GPA: 3.97/4.0',
        'Relevant Coursework: Unity2D/3D, AR/VR Development, Game Engines, C++ Programming, 3d Modeling'
      ]
    } as Job;

  constructor(private titleService: Title, private renderer: Renderer2, private jobService: Jobs) {
    this.titleService.setTitle('Yaakov Goldberg - Resume');
  }

  ngOnInit(): void {
    this.jobs = this.jobService.GetJobs();
  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/Yaakov Goldberg Resume.pdf');
    link.setAttribute('download', 'Yaakov Goldberg Resume.pdf');
    link.click();
    link.remove();
  }

}
