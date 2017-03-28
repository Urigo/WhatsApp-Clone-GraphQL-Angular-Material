import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Member, Credentials, UserQuery, UserQueryResult } from './auth.models';

@Injectable()
export class AuthService {
  _member: Member;

  constructor(
    private apollo: Apollo,
  ) { }

  isLoggedIn(): boolean {
    return !!this._member;
  }

  getUser() {
    return this._member;
  }

  login(credentials: Credentials): Observable<Member> {
    return this.getUserByName(credentials.name)
      .do(member => {
        this._member = member;
      });
  }

  getUserByName(name: string): Observable<Member> {
    return this.apollo.query<UserQueryResult>({
      query: UserQuery,
      variables: {
        name,
      },
    })
      .map(result => (result.data.allMembers || [])[0]);
  }

}
