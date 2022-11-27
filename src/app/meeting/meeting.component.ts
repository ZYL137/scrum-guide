import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../components/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
})
export class MeetingComponent {
  counter = 0;

  isLevelThree = false;
  meetingItems = ['短衝檢視會議', '每日站立會議', '短衝自省會議'];
  answers: string[] = ['', '', ''];

  constructor(private dialog: MatDialog, private router: Router) {}

  startLevelThree(): void {
    this.isLevelThree = true;
    this.counter += 1;
  }

  drop(event: CdkDragDrop<string[]>) {
    // if (event.container.data.length >= 3) {
    //   event.container.data.pop();
    // }
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  checkAnswers(): void {
    if (
      this.answers[0] !== '每日站立會議' ||
      this.answers[1] !== '短衝檢視會議' ||
      this.answers[2] !== '短衝自省會議'
    ) {
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
      dialogRef
        .afterClosed()
        .subscribe(() => this.router.navigateByUrl('/reteospective'));
    }
  }

  resetDragList(): void {
    this.counter = 4;
    this.meetingItems = ['短衝檢視會議', '每日站立會議', '短衝自省會議'];
    this.answers = ['', '', ''];
  }
}
