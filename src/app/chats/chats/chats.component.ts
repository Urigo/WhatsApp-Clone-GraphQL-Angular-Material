import { Component, Input } from '@angular/core';

export interface Message {
  content: string;
}
export interface Chat {
  id: string;
  name: string;
  members: any[];
  messages: Message[];
}

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent {
  @Input() chats: Chat[];
}
