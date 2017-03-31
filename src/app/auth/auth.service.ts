import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

// import { GetMemberQuery } from '../graphql-schema';

const getMemberQuery = require('graphql-tag/loader!./get-member.graphql');

export interface Credentials {
  name: string;
  password: string;
}

@Injectable()
export class AuthService {
  _member: any; // GetMemberQuery.AllMembers;

  constructor(
    private apollo: Apollo,
  ) { }

  isLoggedIn(): boolean {
    return !!this._member;
  }

  getUser() {
    return this._member;
  }

  login(credentials: Credentials): Observable<any /*GetMemberQuery.AllMembers*/> {
    return this.getUserByName(credentials.name)
      .do(member => {
        this._member = member;
      });
  }

  getUserByName(name: string): Observable<any /*GetMemberQuery.AllMembers*/> {
    return this.apollo.query<any /*GetMemberQuery.Result*/>({
      query: getMemberQuery,
      variables: {
        name,
      },
    })
      .map(result => (result.data.allMembers || [])[0]);
  }
}
