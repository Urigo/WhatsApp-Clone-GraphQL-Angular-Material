import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Apollo } from 'apollo-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthService } from '../../auth/auth.service';
import { NavigationService } from '../../navigation/navigation.service';
import { Message } from '../../messages/messages/messages.models';
import {
  MemberQuery,
  MemberQueryResult,
  CreateChatMutation,
  CreateChatMutationResult,
} from './new-chat.models';

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
