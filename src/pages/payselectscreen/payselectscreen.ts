import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EcPayscreen} from '../ec-payscreen/ec-payscreen';
import { DataProvider } from '../../providers/dataprovider';
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

data: Object;
user: Object;
sumAktProducts: number;
guthaben: number;

aufladeBetrag:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,private dataPrv: DataProvider) {
    this.data = this.dataPrv.getData();
    this.user = this.data['user'];
    this.sumAktProducts  = this.data['summe'];
    this.guthaben = this.user['amount'];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Payselectscreen');
  }
//Auswahl Menge Aufladung wird uebergeben
payedGuthaben(aufladGuthaben: number){

 this.aufladeBetrag = aufladGuthaben;
 
  this.navCtrl.push(EcPayscreen,{
      guthaben : this.guthaben,
      aufladeBetrag: aufladGuthaben
    }
  
  );
}
}
