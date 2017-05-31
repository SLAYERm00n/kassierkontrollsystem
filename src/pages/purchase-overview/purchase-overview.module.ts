import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseOverview } from './purchase-overview';

@NgModule({
  declarations: [
    PurchaseOverview,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseOverview),
  ],
  exports: [
    PurchaseOverview
  ]
})
export class PurchaseOverviewModule {}
