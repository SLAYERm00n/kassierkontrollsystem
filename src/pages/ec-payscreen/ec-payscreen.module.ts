import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EcPayscreen } from './ec-payscreen';

@NgModule({
  declarations: [
    EcPayscreen,
  ],
  imports: [
    IonicPageModule.forChild(EcPayscreen),
  ],
  exports: [
    EcPayscreen
  ]
})
export class EcPayscreenModule {}
