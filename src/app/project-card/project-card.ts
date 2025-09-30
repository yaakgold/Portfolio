import {Component, inject, Input, model} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader, MatCardImage,
  MatCardTitle
} from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {Project} from '../_models/project';
import {
  MAT_DIALOG_DATA, MatDialog,
  MatDialogActions,
  MatDialogClose, MatDialogContainer,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {DialogData} from '../portfolio/portfolio';
import {DialogProject} from '../dialog-project/dialog-project';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardFooter,
    MatChipSet,
    MatChip,
    NgOptimizedImage,
    MatCardImage
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  readonly dialog = inject(MatDialog)

  @Input() public project = {} as Project;

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogProject, {
      data: { project: this.project },
      minWidth: '90vw',
      height: '90vh',
    });
  }
}
