import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as material from '@angular/material';

import { RandomAvatarPipe } from './random-avatar.pipe';
import { ShortTimePipe } from './short-time.pipe';
import { StorageService } from './storage.service';

const MATERIAL = [
  material.MatInputModule,
  material.MatIconModule,
  material.MatFormFieldModule,
  material.MatLineModule,
  material.MatListModule,
  material.MatButtonModule,
  material.MatToolbarModule,
  material.MatMenuModule,
];

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
    FlexLayoutModule,
    ...MATERIAL
  ],
})
export class SharedModule { }
