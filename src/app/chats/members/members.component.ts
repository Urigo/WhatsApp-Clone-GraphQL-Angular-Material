import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthService } from '../../auth/auth.service';
import { NavigationService } from '../../navigation/navigation.service';
import { MembersQueryResult, MembersQuery, Member } from './members.models';

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
