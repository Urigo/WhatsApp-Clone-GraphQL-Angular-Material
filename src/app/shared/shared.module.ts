import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortTimePipe } from './short-time.pipe';
import { StorageService } from './storage.service';
import { ScrollableDirective } from './scrollable.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    StorageService,
  ],
  declarations: [
    ShortTimePipe,
    ScrollableDirective,
  ],
  exports: [
    ShortTimePipe,
    ScrollableDirective,
  ],
})
export class SharedModule { }
