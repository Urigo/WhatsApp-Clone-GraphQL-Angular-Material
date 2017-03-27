import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsComponent } from './chats/chats.component';
import { NewChatComponent } from './new-chat/new-chat.component';
import { MembersComponent } from './members/members.component';
import { MessagesModule } from '../messages/messages.module';
import { ChatsPageComponent } from './chats-page/chats-page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ChatsRoutingModule,
    MessagesModule,
  ],
  declarations: [ChatsComponent, NewChatComponent, MembersComponent, ChatsPageComponent]
})
export class ChatsModule { }
