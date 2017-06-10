import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseOverview } from '../purchase-overview/purchase-overview';
import { StaffLogin } from '../staff-login/staff-login';




/**
 * Generated class for the PurchaseCheck page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-purchase-check',
  templateUrl: 'purchase-check.html',
})
export class PurchaseCheck {

  mitarbeiter: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.mitarbeiter = navParams.get("mitarbeiter");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseCheck');
  }
openPurchaseOverview(){
  this.navCtrl.push(PurchaseOverview);
}
}
