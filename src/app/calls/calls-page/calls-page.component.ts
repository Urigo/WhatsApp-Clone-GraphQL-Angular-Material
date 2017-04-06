import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

import 'rxjs/add/operator/map';

import { AuthService } from '../../auth/auth.service';
import { GetAllMembersQuery } from '../../graphql';

@Component({
  selector: 'app-calls-page',
  templateUrl: './calls-page.component.html',
  styleUrls: ['./calls-page.component.scss']
})
export class CallsPageComponent implements OnInit {
  calls$: any;

  constructor(
    private apollo: Apollo,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.calls$ = this.apollo.query<GetAllMembersQuery.Result>({
      query: gql`
        query getAllMembers($member: ID!) {
          allMembers(
            filter: {
              id_not: $member
            }
          ) {
            id
            name
            title
            image
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
      `,
      variables: {
        member: this.auth.getUser().id,
      }
    }).map(result => result.data.allMembers);
  }

}
