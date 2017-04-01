import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomAvatarPipe } from './random-avatar.pipe';
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
    RandomAvatarPipe,
    ShortTimePipe,
  ],
  exports: [
    RandomAvatarPipe,
    ShortTimePipe,
  ],
})
export class SharedModule { }
