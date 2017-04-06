import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Contact {
  id: string;
  name: string;
  title: string;
  platform?: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() contacts: any[] = [];
  @Input() disabled = false;
  @Output() select = new EventEmitter<any>();

  doSelect(contact: Contact) {
    if (this.disabled === false) {
      this.select.emit(contact);
    }
  }
}
