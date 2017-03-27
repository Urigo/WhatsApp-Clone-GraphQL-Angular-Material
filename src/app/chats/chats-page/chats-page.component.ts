import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { filter } from 'graphql-anywhere';

import * as update from 'immutability-helper';
import gql from 'graphql-tag';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { AuthService } from '../../shared/auth.service';
import { NavigationService } from '../../shared/navigation.service';
import { Chat, Message } from '../chats/chats.component';

export const messageInfoFragment = gql`
  fragment MessageInfo on Message {
    content
    author {
      id
    }
  }
`;

export const chatInfoFragment = gql`
  fragment ChatInfo on Chat {
    id
    messages(last: 1) {
      ...MessageInfo
    }
  }

  ${messageInfoFragment}
`;

export const AllChatsQuery = gql`
  query getAllChats($member: ID!) {
    allChats(filter: {
      members_some: {
        id: $member
      }
    }) {
      members(filter: {
        id_not: $member
      }) {
        id
        name
      }
      ...ChatInfo
    }
  }

  ${chatInfoFragment}
`;

export const NewChatSubscription = gql`
  subscription getNewChat {
    Chat(filter: { mutation_in: CREATED }) {
      node {
        ...ChatInfo
      }
    }
  }

  ${chatInfoFragment}
`;

export const NewChatMessageSubscription = gql`
  subscription getNewChatMessage($chats: [ID!]!) {
    Message(filter: {
      AND: [
        { mutation_in: CREATED },
        { node: { chat: { id_in: $chats } } }
      ]
    }) {
      node {
        ...MessageInfo
        chat {
          id
        }
      }
    }
  }

  ${messageInfoFragment}
`;

export interface AllChatsQueryResult {
  allChats: Chat[];
}

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss']
})
export class ChatsPageComponent implements OnInit, OnDestroy {
  chats: any;
  chatIds = new Subject<String[]>();
  chatIdsSub: Subscription;
  newChatSub: Subscription;
  newChatMessageSub: Subscription;
  onActionSub: Subscription;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private auth: AuthService,
    private navigation: NavigationService,
  ) {}

  ngOnInit() {
    // set navigation bar
    this.navigation.reset();
    this.navigation.setTitle('whatsapp');
    this.navigation.setAction('add');
    this.onActionSub = this.navigation.onAction().subscribe(() => {
      this.router.navigate(['/chats/new']);
    });

    // chats
    this.chats = this.apollo.watchQuery<AllChatsQueryResult>({
      query: AllChatsQuery,
      variables: {
        member: this.auth.getUser().id,
      },
      fetchPolicy: 'network-only',
    })
      .map(result => result.data.allChats)
      .do((chats) => {
        // emit new set of ids
        const ids = chats.map(({id}) => id);
        this.chatIds.next(ids);
      });

    // new Chat
    this.newChatSub = this.apollo.subscribe({
      query: NewChatSubscription
    }).subscribe((data) => {
      this.chats.updateQuery((prev) => {
        let action = '$unshift';

        if (!prev.allChats || prev.allChats.length === 0) {
          action = '$set';
        }

        return update(prev, {
          allChats: { [action]: [data.Chat.node] }
        });
      });
    });

    // new chat message
    this.chatIdsSub = this.chatIds.subscribe(chatIds => {
      if (this.newChatMessageSub) {
        this.newChatMessageSub.unsubscribe();
        this.newChatMessageSub = undefined;
      }

      this.newChatMessageSub = this.apollo.subscribe({
        query: NewChatMessageSubscription,
        variables: {
          chats: chatIds,
        },
      })
      .subscribe((data) => {
        // push new message
        this.chats.updateQuery(
          (prev) => {
            const chatId = data.Message.node.chat.id;
            const allChats = prev.allChats.map(c => {
              if (chatId === c.id) {
                return update(c, {
                  messages: {
                    $set: [filter(messageInfoFragment, data.Message.node)],
                  },
                });
              }

              return c;
            });

            return update(prev, { allChats: { $set: allChats } });
          }
        );
      });
    });

    this.chatIds.next([]);
  }

  ngOnDestroy() {
    if (this.newChatSub) {
      this.newChatSub.unsubscribe();
      this.newChatSub = undefined;
    }

    if (this.newChatMessageSub) {
      this.newChatMessageSub.unsubscribe();
      this.newChatMessageSub = undefined;
    }

    if (this.onActionSub) {
      this.onActionSub.unsubscribe();
      this.onActionSub = undefined;
    }

    if (this.chatIdsSub) {
      this.chatIdsSub.unsubscribe();
      this.chatIdsSub = undefined;
    }
  }

}
