import { Component, Inject, Input } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatListItem } from '@angular/material/list';
import { Slide } from '../models/slide.model';
import { MatCardModule } from '@angular/material/card';
import { MatAnchor, MatButton } from '@angular/material/button';

export interface DialogData {
  slide: Slide;
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [MatDialogModule, MatListItem],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  @Input() slide: Slide | undefined;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    openDialog(this.dialog, this.slide);
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog-data.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatCardModule, MatButton, MatAnchor]
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

export function openDialog(dialog: MatDialog, slide: Slide | undefined) {
  dialog.open(DialogComponent, {
    data: {
      slide: slide
    },
  });
}