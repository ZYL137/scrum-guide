import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit, AfterViewChecked {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement> | null = null;

  counter = 8;
  enterLevelOne = false;
  getMouseMovePosition = false;
  canvasCtx: CanvasRenderingContext2D | null = null;
  answer = [];
  selectedCharacter = '';
  selectedTeamRole = '';
  constructor() {}
  ngAfterViewChecked(): void {
    if (this.canvas) {
      this.canvasCtx = this.canvas.nativeElement.getContext('2d');
    }
  }

  ngOnInit(): void {}

  startLevelOne(): void {
    this.counter += 1;
    this.enterLevelOne = true;
  }

  getSelectedCharacter($event: MouseEvent, character: string): void {
    console.log($event, character);
    this.selectedCharacter = character;
  }

  getSelectedTeamRole($event: MouseEvent, role: string): void {
    this.selectedTeamRole = role;
  }
  onMousemove($event: MouseEvent): void {
    console.log($event);
    // if (this.canvasCtx) {
    //   this.canvasCtx.lineWidth = 2;

    //   this.canvasCtx.beginPath();
    //   this.canvasCtx.moveTo(20, 20);
    //   this.canvasCtx.lineTo($event.screenX, $event.screenY);
    //   // this.canvasCtx.rect(40, 40, 70, 70);
    //   this.canvasCtx.stroke();
    //   this.canvasCtx.closePath();
    // }
  }
}
