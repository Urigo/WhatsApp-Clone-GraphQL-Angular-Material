import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthService } from '../../shared/auth.service';
import { NavigationService } from '../../shared/navigation.service';

export const MembersQuery = gql`
  query getAllMembers($member: ID!) {
    allMembers(
      filter: {
        id_not: $member
      }
    ) {
      id
      name
      chats(
        filter: {
          members_some: {
            id: $member
          }
        }, first: 1
      ) {
        id
      }
    }
  }

`;

export interface MembersQueryResult {
  allMembers: Member[];
}

export interface Member {
  id: string;
  name: string;
  chats?: {id: string}[];
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: any;

  constructor(
    private apollo: Apollo,
    private auth: AuthService,
    private router: Router,
    private navigation: NavigationService,
  ) { }

  ngOnInit() {
    this.navigation.reset();
    this.navigation.setTitle('Pick contact');
    this.navigation.setBack(['/chats']);

    this.members = this.apollo.watchQuery<MembersQueryResult>({
      query: MembersQuery,
      fetchPolicy: 'network-only',
      variables: {
        member: this.auth.getUser().id,
      },
    })
      .map(result => result.data.allMembers);
  }

  chatWith(member: Member): void {
    if (member.chats && member.chats.length) {
      this.router.navigate(['/messages', member.chats[0].id]);
    } else {
      this.router.navigate(['/chats/new', member.id]);
    }
  }

}
