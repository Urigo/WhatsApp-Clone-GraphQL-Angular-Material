import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  title: string;
  back: any;
  action: any;
  navigationSub: Subscription;

  constructor(
    private navigation: NavigationService,
  ) { }

  ngOnInit() {
    this.navigation.observe().subscribe((data) => {
      this.title = data.title;
      this.back = data.back;
      this.action = data.action;
    });
  }

  doAction() {
    this.navigation.doAction();
  }

}
