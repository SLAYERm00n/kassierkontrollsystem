import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Goodbyescreen } from './goodbyescreen';

@NgModule({
  declarations: [
    Goodbyescreen,
  ],
  imports: [
    IonicPageModule.forChild(Goodbyescreen),
  ],
  exports: [
    Goodbyescreen
  ]
})
export class GoodbyescreenModule {}
