import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../components/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-reteospective',
  templateUrl: './reteospective.component.html',
  styleUrls: ['./reteospective.component.scss'],
})
export class ReteospectiveComponent {
  @ViewChild('dialog') dialogContent: TemplateRef<HTMLElement> | null = null;

  counter = 0;
  answer = '';
  constructor(private dialog: MatDialog) {}

  checkAnswer(): void {
    if (this.answer !== 'correct') {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        hasBackdrop: true,
        data: {
          type: 'wrong',
        },
      });
    } else {
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        hasBackdrop: true,
        data: {
          type: 'correct',
        },
      });

      dialogRef.afterClosed().subscribe(() => (this.counter += 1));
    }
  }

  openDialog(): void {
    if (this.dialogContent) {
      this.dialog.open(this.dialogContent, {
        hasBackdrop: true,
      });
    }
  }
}
