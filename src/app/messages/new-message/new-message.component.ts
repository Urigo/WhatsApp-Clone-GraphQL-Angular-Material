import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  @Output() onMessage: EventEmitter<string> = new EventEmitter<string>();
  messageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.messageForm.value.message && this.messageForm.value.message.trim().length) {
      this.onMessage.emit(this.messageForm.value.message);
      this.messageForm.setValue({
        message: '',
      });
    }
  }
}
