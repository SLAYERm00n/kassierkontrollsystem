import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Payselectscreen } from '../payselectscreen/payselectscreen';

/**
 * Generated class for the PurchaseOverview page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-purchase-overview',
  templateUrl: 'purchase-overview.html',
})
export class PurchaseOverview {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseOverview');
  }
openPaySelectScreen(){
  this.navCtrl.push(Payselectscreen);
}
}
