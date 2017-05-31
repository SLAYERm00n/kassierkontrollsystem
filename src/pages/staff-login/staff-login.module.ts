import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffLogin } from './staff-login';

@NgModule({
  declarations: [
    StaffLogin,
  ],
  imports: [
    IonicPageModule.forChild(StaffLogin),
  ],
  exports: [
    StaffLogin
  ]
})
export class StaffLoginModule {}
