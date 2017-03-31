import { Component, Input } from '@angular/core';

export interface Author {
  id: string;
  name: string;
}
export interface Message {
  id: string;
  content: string;
  author: Author;
}

export namespace Inputs {
  export type message = Message;
  export type own = boolean;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message: Inputs.message;
  @Input() own: Inputs.own;
}
