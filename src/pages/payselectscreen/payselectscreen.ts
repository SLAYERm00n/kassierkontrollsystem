import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EcPayscreen} from '../ec-payscreen/ec-payscreen';
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

result: Object;
products: any;
user : any;
fullName: string;
sumAktProducts: number = 0;
scanned: boolean = false;
guthaben: number = 0;
aufladeBetrag:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    this.products = navParams.get("products");
    this.sumAktProducts = navParams.get("sumAktProducts");
    this.guthaben = navParams.get("guthaben");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Payselectscreen');
  }

payedGuthaben(aufladGuthaben: number){

 this.aufladeBetrag = aufladGuthaben;
 
  this.navCtrl.push(EcPayscreen,{
      guthaben : this.guthaben,
      aufladeBetrag: aufladGuthaben
    }
  
  );
}
}
