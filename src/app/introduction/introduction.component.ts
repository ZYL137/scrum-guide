import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  counter = 4;

  constructor() {}

  ngOnInit(): void {}

  dialogueContinue(): void {
    console.log('test');
  }
}
