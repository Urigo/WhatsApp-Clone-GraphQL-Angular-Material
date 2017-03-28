import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Member as PickedMember } from '../member-pick/member-pick.models';
import { Member } from './login-form.models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Member>();
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onPick(member: PickedMember) {
    this.loginForm.setValue({
      username: member.name,
      password: member.name,
    });
  }

  submit() {
    this.onSubmit.emit({
      name: this.loginForm.value.username,
      password: this.loginForm.value.password,
    });
  }
}
