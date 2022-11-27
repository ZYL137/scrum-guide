import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss'],
})
export class CustomDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: string }
  ) {}
}
