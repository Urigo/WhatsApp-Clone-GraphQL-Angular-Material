import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ContactListComponent,
  ],
  declarations: [
    ContactListComponent,
    ContactsPageComponent,
  ]
})
export class ContactsModule { }
