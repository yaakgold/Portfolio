import {Component, Renderer2} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-resume',
  imports: [
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatAccordion,
    MatButton,
    MatIcon
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume {

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Yaakov Goldberg - Resume');
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
