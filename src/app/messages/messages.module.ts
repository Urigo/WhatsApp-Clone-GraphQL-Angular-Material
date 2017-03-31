import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { MessageComponent } from './message/message.component';
import { MessageTimePipe } from './message-time.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MessagesRoutingModule,
  ],
  exports: [
    MessagesComponent,
    NewMessageComponent,
  ],
  declarations: [
    MessagesComponent,
    NewMessageComponent,
    MessagesPageComponent,
    MessageComponent,
    MessageTimePipe,
  ]
})
export class MessagesModule { }
