import { Component, Input } from '@angular/core';

import { Inputs as MessageInputs } from '../message/message.component';

export interface Message extends MessageInputs.message {
  own: boolean;
}

export namespace Inputs {
  export type messages = MessageInputs.message[];
}

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {
  @Input() messages: Inputs.messages = [];
}
