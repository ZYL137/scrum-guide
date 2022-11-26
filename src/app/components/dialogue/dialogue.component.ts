import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
})
export class DialogueComponent {
  @Input() title = '';
  @Input() showBtn = false;
  @Output() continue = new EventEmitter();

  onOontinue(): void {
    this.continue.emit();
  }
}
