import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Payselectscreen } from '../payselectscreen/payselectscreen';
import {EcPayscreen } from '../ec-payscreen/ec-payscreen';
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
guthaben: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  this.products = navParams.get("products");
    this.sumAktProducts = navParams.get("sumAktProducts");
    this.user = navParams.get("user");
    this.guthaben = navParams.get("guthaben");
  }
wantToLoad(){

 this.navCtrl.push(Payselectscreen, {
       user: this.user,
       products: this.products,
       sumAktProducts :this.sumAktProducts,
       guthaben : this.guthaben
 }
 );
    } 
    dontWantToLoad(){
 this.navCtrl.push(EcPayscreen,{
          user: this.user,
       products: this.products,
       sumAktProducts :this.sumAktProducts,
       guthaben : this.guthaben,
       aufladeBetrag : 0
    }
  
  );

    }
}
