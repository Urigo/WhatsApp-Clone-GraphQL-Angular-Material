import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortTimePipe } from './short-time.pipe';
import { StorageService } from './storage.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    StorageService,
  ],
  declarations: [
    ShortTimePipe,
  ],
  exports: [
    ShortTimePipe,
  ],
})
export class SharedModule { }
