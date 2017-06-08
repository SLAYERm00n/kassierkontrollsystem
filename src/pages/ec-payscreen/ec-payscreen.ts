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

guthaben: number = 0;
aufladeBetrag:number;
wurdeAufgeladen: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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

  this.navCtrl.push(EcGoodbyescreen,{aufladeBetrag: this.aufladeBetrag})
}

}
