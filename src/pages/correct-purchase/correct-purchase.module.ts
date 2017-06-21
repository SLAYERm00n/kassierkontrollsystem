import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CorrectPurchase } from './correct-purchase';

@NgModule({
  declarations: [
    CorrectPurchase,
  ],
  imports: [
    IonicPageModule.forChild(CorrectPurchase),
  ],
  exports: [
    CorrectPurchase
  ]
})
export class CorrectPurchaseModule {}
