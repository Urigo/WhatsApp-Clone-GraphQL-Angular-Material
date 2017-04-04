import gql from 'graphql-tag';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import * as update from 'immutability-helper';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { AuthService } from '../../auth/auth.service';
import { GetAllChatsQuery } from '../../graphql';
import { Inputs, Outputs } from '../../models/chats';

const getAllChatsQuery = require('graphql-tag/loader!../../graphql/get-all-chats.graphql');
const getNewChatSubscription = require('graphql-tag/loader!../../graphql/get-new-chat.graphql');
const getNewChatMessageSubscription = require('graphql-tag/loader!../../graphql/get-new-chat-message.graphql');
const getDeletedChatSubscription = require('graphql-tag/loader!../../graphql/get-deleted-chat.graphql');

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss']
})
export class ChatsPageComponent implements OnInit {
  chats$: ApolloQueryObservable<Inputs.chats>;
  chatIds = new Subject<String[]>();
  chatIdsSub: Subscription;
  newChatMessageSub: Subscription;

  constructor(
    private router: Router,
    private apollo: Apollo,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    const loggedInUser = this.auth.getUser();

    // TODO: Make two examples: 1. Large query no the parent 2. query on chat-item
    // TODO: Remove TypeScript stuff?
    // TODO: Inline query
    this.chats$ = this.apollo.watchQuery<GetAllChatsQuery.Result>({
      query: getAllChatsQuery,
      variables: {
        member: loggedInUser.id
      }
    })
      .map(result => result.data.allChats) as any;
  }

  onSelect(chat: Outputs.select) {
    this.router.navigate(['/chat', chat.id]);
  }
}
