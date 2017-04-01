import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  links: string[] = ['calls', 'chats', 'contacts'];

  constructor(
    private auth: AuthService,
  ) {}

  logout() {
    this.auth.logout();
  }
}
