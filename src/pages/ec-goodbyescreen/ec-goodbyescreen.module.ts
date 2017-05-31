import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EcGoodbyescreen } from './ec-goodbyescreen';

@NgModule({
  declarations: [
    EcGoodbyescreen,
  ],
  imports: [
    IonicPageModule.forChild(EcGoodbyescreen),
  ],
  exports: [
    EcGoodbyescreen
  ]
})
export class EcGoodbyescreenModule {}
