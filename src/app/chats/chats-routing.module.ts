import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsPageComponent } from './chats-page/chats-page.component';
import { NewChatComponent } from './new-chat/new-chat.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [{
  path: '', component: ChatsPageComponent,
}, {
  path: 'new', component: MembersComponent,
}, {
  path: 'new/:memberId', component: NewChatComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule { }
