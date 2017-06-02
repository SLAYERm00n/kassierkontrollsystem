import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaffLogin } from '../staff-login/staff-login';


/**
 * Generated class for the Checkscreen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-checkscreen',
  templateUrl: 'checkscreen.html',
})
export class Checkscreen {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Checkscreen');
  }


openStaffLogin(){
this.navCtrl.push(StaffLogin);
}
}
