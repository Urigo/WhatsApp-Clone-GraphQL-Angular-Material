import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

import * as update from 'immutability-helper';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { AuthService } from '../../auth/auth.service';
import { Inputs, Outputs } from '../../contacts/contact-list/contact-list.component';
// import { GetAllContactsQuery, CreateNewChatMutation, GetAllChatsQuery } from '../../graphql-schema';

const allContactsQuery = require('graphql-tag/loader!../../contacts/contacts-page/get-all-contacts.graphql');
const allChatsQuery = require('graphql-tag/loader!../chats-page/get-all-chats.graphql');
const createChatMutation = require('graphql-tag/loader!./create-new-chat.graphql');

@Component({
  selector: 'app-new-chat-page',
  templateUrl: './new-chat-page.component.html',
  styleUrls: ['./new-chat-page.component.scss']
})
export class NewChatPageComponent implements OnInit {
  contacts: Observable<Inputs.contacts>;
  allMembers: any /*GetAllContactsQuery.AllMembers[]*/;
  loggedInUser: any;
  selectDisabled = false;

  constructor(
    private router: Router,
    private apollo: Apollo,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    this.loggedInUser = this.auth.getUser();

    this.contacts = this.apollo.query<any /*GetAllContactsQuery.Result*/>({
      query: allContactsQuery,
      variables: {
        member: this.loggedInUser.id
      }
    })
      .do(result => this.allMembers = result.data.allMembers)
      .map(result => result.data.allMembers);
  }

  onSelect(contact: Outputs.select) {
    this.selectDisabled = true;

    const member = this.findMember(contact.id);

    if (!member) {
      this.selectDisabled = false;
      return;
    }

    if (member.chats && member.chats.length) {
      // go to the chat that already exists
      this.navigateToChat(member.chats[0].id);
      return;
    }

    // create a new chat
    const variables: any /*CreateChatMutation.Variables*/ = {
      members: [
        this.loggedInUser.id,
        member.id
      ],
      author: this.loggedInUser.id,
    };

    this.apollo.mutate<any /*CreateChatMutation.Result*/>({
      mutation: createChatMutation,
      variables,
      update: (proxy, result: any) => {
        const options: {
          query: any;
          variables: any /*GetAllChatsQuery.Variables*/;
        } = {
          query: allChatsQuery,
          variables: {
            member: this.loggedInUser.id,
          },
        };
        const data = proxy.readQuery(options);

        proxy.writeQuery({
          ...options,
          data: update(data, {
            allChats: {
              $unshift: [result.data.createChat],
            },
          }),
        });
      },
    }).subscribe(({data}) => {
      this.navigateToChat(data.createChat.id);
    });
  }

  private navigateToChat(id: string) {
    this.router.navigate(['/chat', id]);
  }

  private findMember(id: string) {
    return this.allMembers.find(member => member.id === id);
  }

}
