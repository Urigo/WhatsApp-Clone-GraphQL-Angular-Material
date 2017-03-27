import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MessagesRoutingModule
  ],
  exports: [
    MessagesComponent,
    NewMessageComponent,
  ],
  declarations: [
    MessagesComponent,
    NewMessageComponent,
    MessagesPageComponent,
  ]
})
export class MessagesModule { }
