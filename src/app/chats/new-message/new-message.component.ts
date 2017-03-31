import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export namespace Outputs {
  export type message = string;
}

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  @Output() message = new EventEmitter<Outputs.message>();
  messageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: ['', Validators.required],
    });
  }

  submit() {
    if (this.messageForm.value.message && this.messageForm.value.message.trim().length) {
      this.message.emit(this.messageForm.value.message);
      this.messageForm.setValue({
        message: '',
      });
    }
  }
}
