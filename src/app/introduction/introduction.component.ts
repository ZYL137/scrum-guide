import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomDialogComponent } from '../components/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  counter = 0;
  enterLevelOne = false;

  roles = ['po', 'sm', 'team'];
  selectedCharacter = '';
  selectedTeamRole = '';

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  startLevelOne(): void {
    this.counter += 1;
    this.enterLevelOne = true;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.roles, event.previousIndex, event.currentIndex);
  }

  checkAnswer(): void {
    if (
      this.roles[0] !== 'sm' ||
      this.roles[1] !== 'team' ||
      this.roles[2] !== 'po'
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
        .subscribe(() => this.router.navigateByUrl('/sprint'));
    }
  }
  // getSelectedCharacter(character: string): void {
  //   console.log($event, character);
  //   this.selectedCharacter = character;
  //   // this.getStartPoints($event);
  // }

  // getSelectedTeamRole(role: string): void {
  //   this.selectedTeamRole = role;
  // }
}
