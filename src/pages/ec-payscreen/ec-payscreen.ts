import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EcGoodbyescreen } from '../ec-goodbyescreen/ec-goodbyescreen';
/**
 * Generated class for the EcPayscreen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ec-payscreen',
  templateUrl: 'ec-payscreen.html',
})
export class EcPayscreen {
products: any;
user : any;
fullName: string;
sumAktProducts: number = 0;
scanned: boolean = false;
guthaben: number = 0;
aufladeBetrag:number;
wurdeAufgeladen: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    this.products = navParams.get("products");
    this.sumAktProducts = navParams.get("sumAktProducts");
    this.guthaben = navParams.get("guthaben");
    this.aufladeBetrag = navParams.get("aufladeBetrag");
    if(this.aufladeBetrag == 0)
    { 
        this.wurdeAufgeladen = false;
        }
    else{
      this.wurdeAufgeladen = true;
        }
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcPayscreen');
  }

EcFinalPayed(){

  this.navCtrl.push(EcGoodbyescreen)
}

}
