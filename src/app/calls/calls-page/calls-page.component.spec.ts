import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsPageComponent } from './calls-page.component';

describe('CallsPageComponent', () => {
  let component: CallsPageComponent;
  let fixture: ComponentFixture<CallsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
