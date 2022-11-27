import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogServiceService {
  constructor(public dialog: Dialog) {}

  open(): DialogRef {
    return this.dialog.open(CdkDialogDataExampleDialog, {
      minWidth: '300px',
      data: {
        animal: 'panda',
      },
    });
  }
}
