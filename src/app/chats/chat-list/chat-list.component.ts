import { Component, Input, Output, EventEmitter } from '@angular/core';


export interface Member {
  id: string;
  name: string;
}
export interface Message {
  content: string;
  author: Member;
}
export interface Chat {
  id: string;
  members: Member[];
  date: string;
  message: Message;
}

export namespace Inputs {
  export type chats = Chat[];
}

export namespace Outputs {
  export type select = Chat;
}

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  @Input() chats: Inputs.chats = [];
  @Output() select = new EventEmitter<Outputs.select>();
}
