import { Component, Input } from '@angular/core';

export interface Message {
  id: string;
  content: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  @Input() messages: Message[];
}
