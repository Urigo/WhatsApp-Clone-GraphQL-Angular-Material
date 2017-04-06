import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';

import gql from 'graphql-tag';

import { AuthService } from '../../auth/auth.service';
import { GetChatItemQuery } from '../../graphql';

@Component({
  selector: 'app-chats-page-item',
  templateUrl: './chats-page-item.component.html',
  styleUrls: ['./chats-page-item.component.scss']
})
export class ChatsPageItemComponent implements OnInit, OnDestroy {
  @Input() chatId: string;
  @Output() select = new EventEmitter<any>();
  chat: any;
  chatSub: Subscription;

  constructor(
    private apollo: Apollo,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    this.chatSub = this.apollo.watchQuery<GetChatItemQuery.Result>({
      query: gql`
        query getChatItem($chat: ID!, $member: ID!) {
          Chat(id: $chat) {
            members(filter: {
              id_not: $member
            }) {
              id
              name
              image
            }
            id
            date: createdAt
            messages(last: 1) {
              content
              author {
                id
                name
                image
              }
            }
          }
        }
      `,
      variables: {
        chat: this.chatId,
        member: this.auth.getUser().id,
      },
    }).subscribe(result => {
      this.chat = result.data.Chat;
    });
  }

  ngOnDestroy() {
    if (this.chatSub) {
      this.chatSub.unsubscribe();
      this.chatSub = undefined;
    }
  }
}
