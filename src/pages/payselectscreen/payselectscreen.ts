import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Payselectscreen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payselectscreen',
  templateUrl: 'payselectscreen.html',
})
export class Payselectscreen {
user : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Payselectscreen');
  }
payed(){}
}
