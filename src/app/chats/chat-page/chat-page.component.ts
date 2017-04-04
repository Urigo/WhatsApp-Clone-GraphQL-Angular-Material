import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';

import * as update from 'immutability-helper';

import 'rxjs/add/operator/map';

import { Inputs } from '../message-list/message-list.component';
import { Outputs } from '../new-message/new-message.component';
import { AuthService } from '../../auth/auth.service';
import {
  GetAllChatsQuery, GetChatQuery, GetNewChatMessageSubscription,
  RemoveChatMutation,
  SendMessageMutation
} from '../../graphql';
import Messages = GetChatQuery.Messages;

const sendMessageMutation = require('graphql-tag/loader!../../graphql/send-message.graphql');
const getNewMessageSubscription = require('graphql-tag/loader!../../graphql/get-new-message.graphql');
const removeChatMutation = require('graphql-tag/loader!../../graphql/remove-chat.graphql');
const getAllChatsQuery = require('graphql-tag/loader!../../graphql/get-all-chats.graphql');
const getChatQuery = require('graphql-tag/loader!../../graphql/get-chat.graphql');

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {
  chatId: string;
  chat$: ApolloQueryObservable<Inputs.messages>;
  loggedInUser: any;
  newMessageSub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apollo: Apollo,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.loggedInUser = this.auth.getUser();

    this.route.paramMap.subscribe(paramMap => {
      this.chatId = paramMap.get('chatId');

      this.chat$ = this.apollo.watchQuery<GetChatQuery.Result>({
        query: getChatQuery,
        variables: {
          chat: this.chatId,
          member: this.loggedInUser.id,
        },
      }).map(result => result.data.Chat) as any;
    });

    this.initNewMessagesSubscription();
  }

  initNewMessagesSubscription() {
    if (this.newMessageSub) {
      this.newMessageSub.unsubscribe();
      this.newMessageSub = undefined;
    }

    this.newMessageSub = this.apollo.subscribe({
      query: getNewMessageSubscription,
      variables: {
        chat: this.chatId,
      },
    }).subscribe(({ Message }) => {
      if (Message.node.author.id !== this.loggedInUser.id) {
        this.chat$.updateQuery(prev => this.addToLocalStore(prev, Message.node));
      }
    });
  }

  onMessage(message: Outputs.message) {
    this.apollo.mutate<SendMessageMutation.Result>({
      mutation: sendMessageMutation,
      variables: {
        chat: this.chatId,
        author: this.loggedInUser.id,
        content: message,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        createMessage: {
          __typename: 'Message',
          id: null,
          content: message,
          author: {
            __typename: 'Member',
            id: this.loggedInUser.id,
            name: this.loggedInUser.name,
          },
        },
      },
    }).subscribe(({ data }) => this.chat$.updateQuery(prev => this.addToLocalStore(prev, data.createMessage)));
  }

  // TODO: refactor and trigger parent in order to remove chat
  delete() {
    this.apollo.mutate<RemoveChatMutation.Result>({
      mutation: removeChatMutation,
      variables: {
        chat: this.chatId,
      },
      update: (proxy, result: any) => {
        const options: {
          query: any;
          variables: GetAllChatsQuery.Variables
        } = {
          query: getAllChatsQuery,
          variables: {
            member: this.loggedInUser.id,
          },
        };

        const data: any = proxy.readQuery(options);

        proxy.writeQuery({
          ...options,
          data: update(data, {
            allChats: {
              $set: data.allChats.filter(chat => chat.id !== result.data.deleteChat.id),
            },
          }),
        });
      }
    }).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  addToLocalStore(prev, newMessage) {
    if (!prev || !prev.Chat || !prev.Chat.messages) {
      return prev;
    }

    return update(prev, {
      Chat: {
        messages: { $push: [newMessage] }
      }
    });
  }

  ngOnDestroy() {
    if (this.newMessageSub) {
      this.newMessageSub.unsubscribe();
      this.newMessageSub = undefined;
    }
  }
}
