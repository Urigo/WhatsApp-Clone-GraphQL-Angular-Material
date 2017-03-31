import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../auth/auth.service';
import { Inputs } from '../contact-list/contact-list.component';
// import { GetAllContactsQuery } from '../../graphql-schema';

const allContactsQuery = require('graphql-tag/loader!./get-all-contacts.graphql');

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  contacts: Observable<Inputs.contacts>;

  constructor(
    private apollo: Apollo,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    const loggedInUser = this.auth.getUser();

    this.contacts = this.apollo.query<any /*GetAllContactsQuery.Result*/>({
      query: allContactsQuery,
      variables: {
        member: loggedInUser.id
      }
    })
      .map(result => result.data.allMembers);
  }
}
