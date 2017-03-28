import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';

import * as update from 'immutability-helper';

import 'rxjs/add/operator/map';

import { AuthService } from '../../shared/auth.service';
import { NavigationService } from '../../navigation/navigation.service';
import { Message } from '../messages/messages.models';
import {
  ChatMembersQuery,
  ChatMembersQueryResult,
  ChatMessagesQuery,
  ChatMessagesQueryResult,
  NewMessageSubscription,
  CreateMessageMutation,
  CreateMessageMutationResult,
  DeleteChatMutation,
} from './messages-page.models';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss']
})
export class MessagesPageComponent implements OnInit, OnDestroy {
  messages: any;
  members: any[] = [];
  chat: string;
  newMessageSub: Subscription;
  chatSub: Subscription;
  navActionSub: Subscription;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private navigation: NavigationService,
  ) { }

  ngOnInit() {
    this.navigation.reset();
    this.navigation.setTitle('Chat with:');
    this.navigation.setBack(['/chats']);
    this.navigation.setAction('delete');

    this.navActionSub = this.navigation.onAction().subscribe(() => {
      this.deleteChat();
    });

    this.route.params.subscribe(({chatId}) => {
      this.chat = chatId;

      // chat info
      if (this.chatSub) {
        this.chatSub.unsubscribe();
        this.chatSub = undefined;
      }

      this.chatSub = this.apollo.watchQuery<ChatMembersQueryResult>({
        query: ChatMembersQuery,
        variables: {
          chat: chatId,
          member: this.auth.getUser().id,
        },
      })
        .subscribe(({data}) => {
          this.members = data.Chat.members;

          // set navigation bar
          this.navigation.setTitle('Chat with: ' + this.members.map(member => member.name).join(', '));
        });

      // messages
      this.messages = this.apollo.watchQuery<ChatMessagesQueryResult>({
        query: ChatMessagesQuery,
        variables: { chat: chatId },
      })
        .map(result => result.data.allMessages);

      // new messages
      if (this.newMessageSub) {
        this.newMessageSub.unsubscribe();
        this.newMessageSub = undefined;
      }

      this.newMessageSub = this.apollo.subscribe({
        query: NewMessageSubscription,
        variables: {
          chat: chatId,
        },
      }).subscribe((data) => {
        this.messages.updateQuery(
          (prev) => {
            // XXX Sometimes prev is empty...
            if (!prev || !prev.allMessages) {
              return;
            }

            return this.pushMessage(prev, data.Message.node);
          }
        );
      });
    });
  }

  onMessage(message: string): void {
    this.apollo.mutate<CreateMessageMutationResult>({
      mutation: CreateMessageMutation,
      variables: {
        author: this.auth.getUser().id,
        chat: this.chat,
        content: message,
      },
      updateQueries: {
        getChatMessages: (prev, {mutationResult}: any) => this.pushMessage(prev, mutationResult.data.createMessage)
      },
    });
  }

  deleteChat(): void {
    if (this.chat) {
      this.apollo.mutate({
        mutation: DeleteChatMutation,
        variables: {
          chat: this.chat,
        },
      }).subscribe(() => {
        this.router.navigate(['/chats']);
      });
    }
  }

  ngOnDestroy() {
    if (this.newMessageSub) {
      this.newMessageSub.unsubscribe();
      this.newMessageSub = undefined;
    }

    if (this.navActionSub) {
      this.navActionSub.unsubscribe();
      this.navActionSub = undefined;
    }
  }

  private pushMessage(prev: ChatMessagesQueryResult, message: Message): ChatMessagesQueryResult {
    if (!prev || !prev.allMessages) {
      return { allMessages: [message] };
    }

    if (prev.allMessages.some(m => m.id === message.id)) {
      return prev;
    }

    return update(prev, {
      allMessages: {
        $push: [message]
      }
    });
  }

}
