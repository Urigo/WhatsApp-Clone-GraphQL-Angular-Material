import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from '@kamilkisiela/apollo-angular';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { StorageService } from '../shared/storage.service';
import { GetMember } from '../graphql';

const getMemberQuery = require('graphql-tag/loader!../graphql/get-member.graphql');

export interface Credentials {
  name: string;
  password: string;
}

@Injectable()
export class AuthService {
  _member: GetMember.AllMembers;

  constructor(
    private apollo: Apollo,
    private storage: StorageService,
    private router: Router,
  ) {
    this._member = this.getUserFromStorage();
  }

  isLoggedIn(): boolean {
    return !!this._member;
  }

  getUser() {
    return this._member;
  }

  login(credentials: Credentials): Observable<GetMember.AllMembers> {
    return this.getUserByName(credentials.name)
      .do(member => {
        this._member = member;
        this.setUserInStorage(member);
      });
  }

  logout() {
    this.removeUserFromStorage();
    this.router.navigate(['/login']);
  }

  getUserByName(name: string): Observable<GetMember.AllMembers> {
    return this.apollo.query<GetMember.Query>({
      query: getMemberQuery,
      variables: {
        name,
      },
    })
      .map(result => (result.data.allMembers || [])[0]);
  }

  private getUserFromStorage() {
    return this.storage.get('auth.user');
  }

  private removeUserFromStorage() {
    this.storage.remove('auth.user');
  }

  private setUserInStorage(member: any) {
    this.storage.set('auth.user', member);
  }
}
