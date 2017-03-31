import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calls-page',
  templateUrl: './calls-page.component.html',
  styleUrls: ['./calls-page.component.scss']
})
export class CallsPageComponent implements OnInit {
  calls: any = [{
    from: 'Joe',
    video: false,
  }, {
    from: 'Aaron',
    video: true,
  }, {
    from: 'Tom',
    video: false,
  }];

  constructor() { }

  ngOnInit() {
  }

}
