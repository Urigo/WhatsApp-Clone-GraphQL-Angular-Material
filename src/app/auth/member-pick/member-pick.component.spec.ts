import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPickComponent } from './member-pick.component';

describe('MemberPickComponent', () => {
  let component: MemberPickComponent;
  let fixture: ComponentFixture<MemberPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
