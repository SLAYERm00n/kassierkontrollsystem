import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sumscreen } from './sumscreen';

@NgModule({
  declarations: [
    Sumscreen,
  ],
  imports: [
    IonicPageModule.forChild(Sumscreen),
  ],
  exports: [
    Sumscreen
  ]
})
export class SumscreenModule {}
