import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

import gql from 'graphql-tag';

import { AuthService } from '../../auth/auth.service';
import { GetAllMembersQuery } from '../../graphql';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  contacts: Observable<any[]>;

  constructor(
    private apollo: Apollo,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    const loggedInUser = this.auth.getUser();

    this.contacts = this.apollo.query<GetAllMembersQuery.Result>({
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
        member: loggedInUser.id
      }
    })
      .map(result => result.data.allMembers);
  }
}
