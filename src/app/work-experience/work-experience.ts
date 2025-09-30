import {Component, Input} from '@angular/core';
import {Job} from '../_models/job';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-work-experience',
  imports: [
    MatDivider
  ],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss'
})
export class WorkExperience {

  @Input() public job = {} as Job;

}
