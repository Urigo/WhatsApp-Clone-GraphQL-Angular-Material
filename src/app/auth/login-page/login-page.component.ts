import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { Outputs } from '../login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  login(member: Outputs.login) {
    this.auth.login(member).subscribe((memberData) => {
      if (memberData) {
        this.router.navigate(['/home']);
      } else {
        console.error('Login failed. Try again');
      }
    });
  }

}
