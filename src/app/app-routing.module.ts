import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { CallsPageComponent } from './calls/calls-page/calls-page.component';
import { ChatsPageComponent } from './chats/chats-page/chats-page.component';
import { NewChatPageComponent } from './chats/new-chat-page/new-chat-page.component';
import { ChatPageComponent } from './chats/chat-page/chat-page.component';
import { ContactsPageComponent } from './contacts/contacts-page/contacts-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home',  pathMatch: 'full',  },
  // home
  { path: 'home', component: HomePageComponent,
    canActivate: [AuthGuardService],
    children:
    [
      { path: '', redirectTo: 'chats', pathMatch: 'full' },
      { path: 'calls', component: CallsPageComponent },
      { path: 'chats', component: ChatsPageComponent },
      { path: 'contacts', component: ContactsPageComponent },
    ],
  },
  // new
  { path: 'new', component: NewChatPageComponent, canActivate: [AuthGuardService] },
  // chat
  { path: 'chat/:chatId', component: ChatPageComponent, canActivate: [AuthGuardService] },
  // auth
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
