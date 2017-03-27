import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthService } from '../../shared/auth.service';
import { NavigationService } from '../../shared/navigation.service';
import { Message } from '../../messages/messages/messages.component';
import { Chat } from '../chats/chats.component';
import { chatInfoFragment, AllChatsQuery } from '../chats-page/chats-page.component';

export const MemberQuery = gql`
  query getMember($member: ID!) {
    Member(id: $member) {
      name
    }
  }
`;
export interface MemberQueryResult {
  Member: {
    name: string;
  };
}

export const CreateChatMutation = gql`
  mutation createChat($members: [ID!]!, $author: ID!, $message: String!) {
    createChat(
      membersIds: $members, 
      messages: [{
        content: $message,
        authorId: $author
      }]
    ){
      members(filter: {
        id_not: $author
      }) {
        id
        name
      }
      ...ChatInfo
    }
  }

  ${chatInfoFragment}
`;

export interface CreateChatMutationResult {
  createChat: Chat;
}

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.scss']
})
export class NewChatComponent implements OnInit, OnDestroy {
  messages: Message[] = [];
  memberId: string;
  memberName: string;
  memberSub: Subscription;

  constructor(
    private apollo: Apollo,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private navigation: NavigationService,
  ) { }

  ngOnInit() {
    this.navigation.reset();

    this.route.params.subscribe((params) => {
      this.memberId = params['memberId'];

      this.apollo.query<MemberQueryResult>({
        query: MemberQuery,
        variables: {
          member: this.memberId,
        },
      }).subscribe(({data}) => {
        this.memberName = data.Member.name;
        this.navigation.setTitle(`New message to ${this.memberName}`);
      });
    });

    this.navigation.setTitle('New message');
    this.navigation.setBack(['/chats/new']);
  }

  onMessage(message: string): void {
    const author = this.auth.getUser().id;

    if (message && message.trim().length) {
      this.apollo.mutate<CreateChatMutationResult>({
        mutation: CreateChatMutation,
        variables: {
          members: [
            author,
            this.memberId,
          ],
          author,
          message,
        },
      }).subscribe(({data}) => {
        this.router.navigate(['/messages', data.createChat.id]);
      });
    }
  }

  ngOnDestroy() {
    if (this.memberSub) {
      this.memberSub.unsubscribe();
      this.memberSub = undefined;
    }
  }

}
