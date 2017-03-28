import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { NavigationService } from '../../navigation/navigation.service';
import { Member } from '../login-form/login-form.models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private navigation: NavigationService,
  ) { }

  ngOnInit() {
    this.navigation.reset();
    this.navigation.setTitle('Login');
  }

  onSubmit(member: Member) {
    this.auth.login(member).subscribe((memberData) => {
      if (memberData) {
        this.router.navigate(['/chats']);
      } else {
        console.error('Login failed. Try again');
      }
    });
  }

}
