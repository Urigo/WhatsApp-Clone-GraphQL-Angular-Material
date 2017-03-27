import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '', redirectTo: 'chats', pathMatch: 'full',
}, {
  path: 'chats', loadChildren: './chats/chats.module#ChatsModule'
}, {
  path: 'messages', loadChildren: './messages/messages.module#MessagesModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
