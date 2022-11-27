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

  pos = {
    isStart: false,
    startPos: {
      x: 180,
      y: 50,
    },
    endPos: {
      x: 20,
      y: 50,
    },
  };

  constructor() {}
  ngAfterViewChecked(): void {
    if (this.canvas) {
      this.canvasCtx = this.canvas.nativeElement.getContext('2d');
      if (!this.canvasCtx) return;
      this.canvasCtx.lineWidth = 1;
      // this.canvasCtx.lineCap = 'round';
      this.canvasCtx.strokeStyle = '#c0392b';
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
    // this.getStartPoints($event);
  }

  getSelectedTeamRole($event: MouseEvent, role: string): void {
    this.selectedTeamRole = role;
    if (!this.canvasCtx) return;

    // this.getEndPoints($event);
    // this.canvasCtx.beginPath();

    // this.canvasCtx.moveTo(this.startX, 0);
    // this.canvasCtx.lineTo(this.endX, this.endY);
    // // this.canvasCtx.moveTo(0, 0);
    // // this.canvasCtx.lineTo(1000, 1241);
    // this.canvasCtx.stroke();
  }

  // getStartPoints($event: MouseEvent): void {
  //   if (!this.canvas) return;
  //   this.startX = this.canvas.nativeElement.getBoundingClientRect().left;
  //   this.startY = $event.clientY;
  // }

  // getEndPoints($event: MouseEvent): void {
  //   if (!this.canvas) return;
  //   this.endX = this.canvas.nativeElement.getBoundingClientRect().right;
  //   this.endY =
  //     this.canvas.nativeElement.getBoundingClientRect().bottom - $event.clientY;
  // }

  //   data.canvas.addEventListener('mousedown', function(e) {
  //     data.start = true
  //     checkForDot(e);
  //   });
  //   data.canvas.addEventListener('mouseup', function(e) {
  //     data.start = false
  //     checkForDot(e);
  //   });
  // }

  // function drawLine(toDot) {
  //   this.canvasCtx.beginPath();
  //   this.canvasCtx.moveTo(data.clickedDot.x, data.clickedDot.y);
  //   this.canvasCtx.lineTo(toDot.x, toDot.y);
  //   this.canvasCtx.lineWidth = 5;
  //   this.canvasCtx.stroke();
  //   this.canvasCtx.closePath();
  // }

  // function checkForDot(e) {
  //   var i = 0,
  //     col = null;
  //   for (; i < data.dots.length; i++) {
  //     var d = data.dots[i],
  //       c1 = {
  //         x: d.x,
  //         y: d.y,
  //         r: 50
  //       },
  //       c2 = {
  //         x: e.pageX,
  //         y: e.pageY,
  //         r: 50
  //       };

  // drawLine(col);
  //     data.clickedDot = col;
  //     obj = col;
  //   } else data.clickedDot = null;
  // }
}
