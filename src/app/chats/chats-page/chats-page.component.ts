import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { filter } from 'graphql-anywhere';

import * as update from 'immutability-helper';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { AuthService } from '../../shared/auth.service';
import { NavigationService } from '../../navigation/navigation.service';
import { chatsMessageInfoFragment } from '../chats/chats.models';
import {
  AllChatsQueryResult,
  AllChatsQuery,
  NewChatSubscription,
  NewChatMessageSubscription,
  DeletedChatSubscription,
} from './chats-page.models';

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
  deletedChatSub: Subscription;
  newChatMessageSub: Subscription;
  onActionSub: Subscription;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private auth: AuthService,
    private navigation: NavigationService,
  ) {}

  ngOnInit() {
    const memberId = this.auth.getUser().id;

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
        member: memberId,
      },
      fetchPolicy: 'network-only',
    })
      .map(result => result.data.allChats)
      .do((chats) => {
        // emit new set of ids
        const ids = chats.map((chat) => chat.id);
        this.chatIds.next(ids);
      });

    // new Chat
    this.newChatSub = this.apollo.subscribe({
      query: NewChatSubscription,
      variables: {
        member: memberId,
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
    // XXX Fix it, no results
    this.deletedChatSub = this.apollo.subscribe({
      query: DeletedChatSubscription,
      variables: {
        member: memberId,
      }
    }).subscribe((data) => {
      console.log('deleted', data);
      // XXX graph.cool sends an empty node
      if (!data.Chat.node) {
        return;
      }

      this.chats.updateQuery((prev) => {
        if (!prev.allChats || prev.allChats.length === 0) {
          return prev;
        }

        const allChats = prev.allChats.filter((c) => data.Chat.node.id !== c.id);

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
                    $set: [filter(chatsMessageInfoFragment, data.Message.node)],
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

    if (this.deletedChatSub) {
      this.deletedChatSub.unsubscribe();
      this.deletedChatSub = undefined;
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
