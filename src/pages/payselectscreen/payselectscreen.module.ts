import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Payselectscreen } from './payselectscreen';

@NgModule({
  declarations: [
    Payselectscreen,
  ],
  imports: [
    IonicPageModule.forChild(Payselectscreen),
  ],
  exports: [
    Payselectscreen
  ]
})
export class PayselectscreenModule {}
