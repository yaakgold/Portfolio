import {Component, inject, model} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContainer,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {DialogData} from '../portfolio/portfolio';
import {MatChip, MatChipSet} from '@angular/material/chips';

@Component({
  selector: 'app-dialog-project',
  templateUrl: '../dialog-project/dialog-project.html',
  styleUrl: '../dialog-project/dialog-project.scss',
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatChip,
    MatChipSet,
  ],
})
export class DialogProject {
  readonly dialogRef = inject(MatDialogRef<DialogProject>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly project = model(this.data.project);

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
