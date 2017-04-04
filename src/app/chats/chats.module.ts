import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '../shared/shared.module';
import { ContactsModule } from '../contacts/contacts.module';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatsPageComponent } from './chats-page/chats-page.component';
import { NewChatPageComponent } from './new-chat-page/new-chat-page.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageComponent } from './message/message.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { ChatsPageItemComponent } from './chat-item/chats-page-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    ContactsModule,
  ],
  declarations: [
    ChatPageComponent,
    ChatsPageComponent,
    NewChatPageComponent,
    MessageListComponent,
    MessageComponent,
    NewMessageComponent,
    ChatsPageItemComponent,
  ],
})
export class ChatsModule { }
