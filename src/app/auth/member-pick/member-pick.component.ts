import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

import { AllMembersQuery, AllMembersQueryResult, Member } from './member-pick.models';

@Component({
  selector: 'app-member-pick',
  templateUrl: './member-pick.component.html',
  styleUrls: ['./member-pick.component.scss']
})
export class MemberPickComponent implements OnInit {
  @Output() onPick = new EventEmitter();
  members: Observable<Member[]>;

  constructor(
    private apollo: Apollo,
  ) { }

  ngOnInit() {
    this.members = this.apollo.query<AllMembersQueryResult>({
      query: AllMembersQuery,
    })
      .map(result => result.data.allMembers);
  }

  pick(member: Member) {
    this.onPick.emit(member);
  }
}
