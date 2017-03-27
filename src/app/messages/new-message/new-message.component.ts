import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent {
  @Output() onMessage: EventEmitter<string> = new EventEmitter<string>();
  message: string;

  submit(): void {
    if (this.message && this.message.trim().length) {
      this.onMessage.emit(this.message);
      this.message = '';
    }
  }
}
