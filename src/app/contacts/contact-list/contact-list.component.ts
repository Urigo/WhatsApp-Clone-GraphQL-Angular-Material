import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Contact {
  id: string;
  name: string;
  title: string;
  platform?: string;
}

export namespace Inputs {
  export type contacts = Contact[];
  export type disabled = boolean;
}

export namespace Outputs {
  export type select = Contact;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() contacts: Inputs.contacts = [];
  @Input() disabled: Inputs.disabled = false;
  @Output() select = new EventEmitter<Outputs.select>();

  doSelect(contact: Contact) {
    if (this.disabled === false) {
      this.select.emit(contact);
    }
  }
}
