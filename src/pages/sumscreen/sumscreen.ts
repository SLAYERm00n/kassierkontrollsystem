import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Payselectscreen } from '../payselectscreen/payselectscreen';
import {EcPayscreen } from '../ec-payscreen/ec-payscreen';
import { DataProvider } from '../../providers/dataprovider';
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
data: Object;
user: Object;
sumAktProducts: number;
guthaben: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public dataPrv : DataProvider) {
    this.data = this.dataPrv.getData();
    this.user = this.data['user'];
    this.sumAktProducts  = this.data['summe'];
    this.guthaben = this.user['amount'];
  }

  wantToLoad(){
    this.navCtrl.push(Payselectscreen);
  } 


  dontWantToLoad(){
    this.navCtrl.push(EcPayscreen,{aufladeBetrag : 0});
  }
}
