import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginPageComponent } from './login-page/login-page.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { MemberPickComponent } from './member-pick/member-pick.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [LoginPageComponent, LoginFormComponent, MemberPickComponent],
  providers: [AuthService, AuthGuardService]
})
export class AuthModule { }
