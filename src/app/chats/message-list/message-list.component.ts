import { Component, Input, OnInit } from '@angular/core';
import { Inputs as MessageInputs } from '../message/message.component';
import { AuthService } from '../../auth/auth.service';
import { GetMemberQuery } from '../../graphql/index';

export namespace Inputs {
  export type messages = MessageInputs.message[];
}

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  private loggedInUser: GetMemberQuery.AllMembers;
  @Input() messages: Inputs.messages = [];

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.loggedInUser = this.auth.getUser();
  }
}
