import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, QueryRef } from '@kamilkisiela/apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as update from 'immutability-helper';

import 'rxjs/add/operator/map';

import { Inputs, Message } from '../message-list/message-list.component';
import { Outputs } from '../new-message/new-message.component';
import { AuthService } from '../../auth/auth.service';
import {
  GetChatMessages,
  GetAllChats,
  RemoveChat,
  SendMessage,
  GetChatMembers,
} from '../../graphql';

const getChatMessagesQuery = require('graphql-tag/loader!../../graphql/get-chat-messages.graphql');
const sendMessageMutation = require('graphql-tag/loader!../../graphql/send-message.graphql');
const getNewMessageSubscription = require('graphql-tag/loader!../../graphql/get-new-message.graphql');
const removeChatMutation = require('graphql-tag/loader!../../graphql/remove-chat.graphql');
const getAllChatsQuery = require('graphql-tag/loader!../../graphql/get-all-chats.graphql');
const getChatMembers = require('graphql-tag/loader!../../graphql/get-chat-members.graphql');

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {
  chatId: string;
  messages: Observable<Inputs.messages>;
  messagesRef: QueryRef<GetChatMessages.Query>;
  members: Observable<ApolloQueryResult<any>>;
  membersRef: QueryRef<any>;
  loggedInUser: any;
  newMessageSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    this.loggedInUser = this.auth.getUser();

    this.route.paramMap.subscribe(paramMap => {
      this.chatId = paramMap.get('chatId');

      // members
      this.membersRef = this.apollo.watchQuery<GetChatMembers.Query>({
        query: getChatMembers,
        variables: {
          chat: this.chatId,
          member: this.loggedInUser.id,
        },
      })

      this.members = this.membersRef
        .valueChanges
        .map(result => result.data.Chat.members);

      // messages
      this.messagesRef = this.apollo.watchQuery<GetChatMessages.Query>({
        query: getChatMessagesQuery,
        variables: {
          chat: this.chatId,
        },
        fetchPolicy: 'cache-and-network',
      });

      this.messages = this.messagesRef
        .valueChanges
        .map(result => result.data ? result.data.allMessages : [])
        .map(messages => messages.map(m => this.transformMessage(m)));

        // new messages
        if (this.newMessageSub) {
          this.newMessageSub.unsubscribe();
          this.newMessageSub = undefined;
        }

        this.newMessageSub = this.apollo.subscribe({
          query: getNewMessageSubscription,
          variables: {
            chat: this.chatId,
          },
        }).subscribe(({data}) => {
          this.messagesRef.updateQuery(
            (prev) => {
              // XXX Sometimes prev is empty...
              if (!prev || !prev.allMessages) {
                return;
              }

              console.log('SUB', data.Message.node);
              console.log('has', prev.allMessages.length);
              return this.pushMessage(prev, data.Message.node);
            }
          );
        });
    });
  }

  onMessage(message: Outputs.message) {
    this.apollo.mutate<SendMessage.Mutation>({
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
      update: (proxy, result) => {
        // prepare
        const options: {
          query: any;
          variables: GetChatMessages.Variables;
        } = {
          query: getChatMessagesQuery,
          variables: {
            chat: this.chatId,
          },
        };

        // read
        // BUG: readQuery returns the result instead of {result, complete}
        // apollographql/apollo-client#2308
        const data: any = proxy.readQuery<GetChatMessages.Query>(options);

        console.log('Mutation', result.data.createMessage);
        console.log('has', data.allMessages.length);

        // write
        proxy.writeQuery({
          ...options,
          data: this.pushMessage(data, result.data.createMessage),
        });
      },
    }).subscribe(() => {
      //
    });
  }

  delete() {
    this.apollo.mutate<RemoveChat.Mutation>({
      mutation: removeChatMutation,
      variables: {
        chat: this.chatId,
      },
      update: (proxy, result) => {
        const options: {
          query: any;
          variables: GetAllChats.Variables
        } = {
          query: getAllChatsQuery,
          variables: {
            member: this.loggedInUser.id,
          },
        };

        // BUG: readQuery returns the result instead of {result, complete}
        // apollographql/apollo-client#2308
        const data: any = proxy.readQuery<GetAllChats.Query>(options);

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

  private transformMessage(message: GetChatMessages.AllMessages): Message {
    if (!message) {
      return;
    }

    return {
      ...message,
      author: message.author,
      own: message.author.id === this.loggedInUser.id,
    };
  }

  private pushMessage(prev: GetChatMessages.Query, message: Message): GetChatMessages.Query {
    if (!prev || !prev.allMessages) {
      return { allMessages: [message] };
    }

    const prevMessages = prev.allMessages.filter(m => m.id);

    if (prevMessages.some(m => m.id === message.id)) {
      return prev;
    }

    return {
      ...prev,
      allMessages: [...prevMessages, message]
    };
  }

  ngOnDestroy() {
    if (this.newMessageSub) {
      this.newMessageSub.unsubscribe();
      this.newMessageSub = undefined;
    }
  }
}
