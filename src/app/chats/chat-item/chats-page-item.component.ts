import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chat, Outputs } from '../../models/chats';

@Component({
  selector: 'app-chats-page-item',
  templateUrl: './chats-page-item.component.html',
  styleUrls: ['./chats-page-item.component.scss']
})
export class ChatsPageItemComponent {
  @Input() chat: Chat;
  @Output() select = new EventEmitter<Outputs.select>();
}
