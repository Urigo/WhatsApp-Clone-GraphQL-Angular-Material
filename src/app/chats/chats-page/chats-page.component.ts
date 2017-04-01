import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import * as update from 'immutability-helper';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Inputs, Outputs, Chat } from '../chat-list/chat-list.component';
import { AuthService } from '../../auth/auth.service';
import { GetAllChatsQuery } from '../../graphql';

const getAllChatsQuery = require('graphql-tag/loader!../../graphql/get-all-chats.graphql');
const getNewChatSubscription = require('graphql-tag/loader!../../graphql/get-new-chat.graphql');
const getNewChatMessageSubscription = require('graphql-tag/loader!../../graphql/get-new-chat-message.graphql');
const getDeletedChatSubscription = require('graphql-tag/loader!../../graphql/get-deleted-chat.graphql');

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss']
})
export class ChatsPageComponent implements OnInit, OnDestroy {
  chats: ApolloQueryObservable<Inputs.chats>;
  chatIds = new Subject<String[]>();
  chatIdsSub: Subscription;
  newChatSub: Subscription;
  newChatMessageSub: Subscription;
  deletedChatSub: Subscription;

  constructor(
    private router: Router,
    private apollo: Apollo,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    const loggedInUser = this.auth.getUser();

    this.chats = this.apollo.watchQuery<GetAllChatsQuery.Result>({
      query: getAllChatsQuery,
      variables: {
        member: loggedInUser.id
      },
      fetchPolicy: 'cache-and-network',
    })
      .map(result => result.data ? result.data.allChats : [])
      .map(chats => chats.map(chat => {
        return this.transformChat(chat);
      }))
      .do((chats) => {
        // emit new set of ids
        const ids = chats.map((chat) => chat.id);
        this.chatIds.next(ids);
      }) as any;

    // new Chat
    this.newChatSub = this.apollo.subscribe({
      query: getNewChatSubscription,
      variables: {
        member: loggedInUser.id,
      }
    }).subscribe((data) => {
      // XXX graph.cool sends an empty node when someone deletes a chat...
      if (!data.Chat.node) {
        return;
      }

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

    // deleted Chat
    // XXX Fix it, no responses
    this.deletedChatSub = this.apollo.subscribe({
      query: getDeletedChatSubscription,
      variables: {
        member: loggedInUser.id,
      }
    }).subscribe((data) => {
      console.log('deleted', data);
      // XXX graph.cool sends an empty node
      if (!data.Chat.previousValues) {
        return;
      }

      this.chats.updateQuery((prev) => {
        if (!prev.allChats || prev.allChats.length === 0) {
          return prev;
        }

        const allChats = prev.allChats.filter((c) => data.Chat.previousValues.id !== c.id);

        return update(prev, {
          allChats: { $set: allChats }
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
        query: getNewChatMessageSubscription,
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
                    $set: [data.Message.node],
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

  onSelect(chat: Outputs.select) {
    this.router.navigate(['/chat', chat.id]);
  }

  // to match the `message` property with that from `chat-list`
  transformChat(chat: GetAllChatsQuery.AllChats): Chat {
    return Object.assign({}, chat, {
      message: (chat.messages || [])[0],
    });
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

    if (this.chatIdsSub) {
      this.chatIdsSub.unsubscribe();
      this.chatIdsSub = undefined;
    }

    if (this.deletedChatSub) {
      this.deletedChatSub.unsubscribe();
      this.deletedChatSub = undefined;
    }
  }
}
