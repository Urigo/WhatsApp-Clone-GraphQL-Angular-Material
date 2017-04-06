import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';

import gql from 'graphql-tag';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { AuthService } from '../../auth/auth.service';
import { GetAllChatsQuery } from '../../graphql';

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss']
})
export class ChatsPageComponent implements OnInit {
  chats$: ApolloQueryObservable<any>;

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
      query: gql`
        query getAllChats($member: ID!) {
          allChats(
            filter: {
              members_some: {
                id: $member
              }
            },
            orderBy: createdAt_DESC
          ) {
            id
          }
        }
      `,
      variables: {
        member: loggedInUser.id
      }
    })
      .map(result => result.data.allChats) as any;
  }

  onSelect(chat) {
    this.router.navigate(['/chat', chat.id]);
  }
}
