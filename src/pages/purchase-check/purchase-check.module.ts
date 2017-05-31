import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseCheck } from './purchase-check';

@NgModule({
  declarations: [
    PurchaseCheck,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseCheck),
  ],
  exports: [
    PurchaseCheck
  ]
})
export class PurchaseCheckModule {}
