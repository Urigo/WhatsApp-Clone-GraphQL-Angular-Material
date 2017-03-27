import { Component, Input } from '@angular/core';

import { Chat } from './chats.models';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent {
  @Input() chats: Chat[];
}
