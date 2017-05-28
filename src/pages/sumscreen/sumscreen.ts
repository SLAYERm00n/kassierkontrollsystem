import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Payselectscreen } from '../payselectscreen/payselectscreen';

/**
 * Generated class for the Sumscreen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sumscreen',
  templateUrl: 'sumscreen.html',
})
export class Sumscreen {
result: Object;
products: any;
user : any;
fullName: string;
sumAktProducts: number = 0;
scanned: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  this.products = navParams.get("products");
    this.sumAktProducts = navParams.get("sumAktProducts");
    this.user = navParams.get("user");
    this.scanned = true;
  }
finalPayment(){

 this.navCtrl.push(Payselectscreen, {
   user: this.user
 }
 );
    } 
}
