import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './auth/login-page/login-page.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [{
  path: '', redirectTo: 'login', pathMatch: 'full',
}, {
  path: 'login', component: LoginPageComponent,
}, {
  path: 'chats', loadChildren: './chats/chats.module#ChatsModule',
  canActivate: [AuthGuardService],
}, {
  path: 'messages', loadChildren: './messages/messages.module#MessagesModule',
  canActivate: [AuthGuardService],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
