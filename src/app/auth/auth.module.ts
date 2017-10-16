import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
  ],
  providers: [
    AuthService,
    AuthGuardService,
  ]
})
export class AuthModule { }
