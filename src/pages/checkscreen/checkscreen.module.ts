import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Checkscreen } from './checkscreen';

@NgModule({
  declarations: [
    Checkscreen,
  ],
  imports: [
    IonicPageModule.forChild(Checkscreen),
  ],
  exports: [
    Checkscreen
  ]
})
export class CheckscreenModule {}
