import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { SprintItem } from '../basic.model';
import { CustomDialogComponent } from '../components/custom-dialog/custom-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss'],
})
export class SprintComponent implements OnInit {
  counter = 11;
  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  todo: SprintItem[] = [
    { points: 5, text: '提升外在' },
    { points: 8, text: '提升內涵' },
    { points: 8, text: '拓展交際圈' },
    { points: 13, text: '讓口袋變深' },
  ];

  sprint: SprintItem[] = [];

  drop(event: CdkDragDrop<SprintItem[]>) {
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

  checkSprint(): void {
    // dialogRef.closed.subscribe((result) => {
    //   console.log('vlosed');
    // });
    if (this.sprint.length < 2) return;

    const totalPoints = this.sprint.reduce(
      (accumulator, currentValue) => accumulator + currentValue.points,
      0
    );
    if (totalPoints > 20) {
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
        .subscribe(() => this.router.navigateByUrl('/meeting'));
    }
  }
}
