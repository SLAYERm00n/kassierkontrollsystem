import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Goodbyescreen  } from '../goodbyescreen/goodbyescreen';

/**
 * Generated class for the CorrectPurchase page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-correct-purchase',
  templateUrl: 'correct-purchase.html',
})
export class CorrectPurchase {

  scannedProducts: Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.scannedProducts = this.navParams.get('scanned');
      
      for(let i = 0;i<this.scannedProducts.length;i++){
        var status = this.scannedProducts[i]['gesamt'] - this.scannedProducts[i]['anzahl'];
        if(status>0){
          this.scannedProducts[i]['statustext'] = status+" zu wenig";
        }

        if(status<0){
          this.scannedProducts[i]['statustext'] = Math.abs(status)+" zu viel";
        }

        if(status==0){
          this.scannedProducts[i]['statustext'] = "ok";
        }

        console.dir(this.scannedProducts[i]);
      }
  }

  changeProductCount(EAN, amount){
    for(let i=0;i<this.scannedProducts.length;i++){

      if(this.scannedProducts[i]['productEAN']==EAN){
        this.scannedProducts[i]['anzahl'] += amount;
        this.scannedProducts[i]['status'] = this.checkColor(i);
        this.checkStatus(i);
      }
    }
  }

  checkColor(i): String{
    if(this.scannedProducts[i]['gesamt']==this.scannedProducts[i]['anzahl']) return "#c3ff6b";
    if(this.scannedProducts[i]['gesamt']<this.scannedProducts[i]['anzahl']) return "#ff6b6b"; 
    if(this.scannedProducts[i]['gesamt']>this.scannedProducts[i]['anzahl']) return "#fffd8c"; 
  }

  checkStatus(i){
        var status = this.scannedProducts[i]['gesamt'] - this.scannedProducts[i]['anzahl'];
        if(status>0){
          this.scannedProducts[i]['statustext'] = status+" zu wenig";
        }

        if(status<0){
          this.scannedProducts[i]['statustext'] = Math.abs(status)+" zu viel";
        }

        if(status==0){
          this.scannedProducts[i]['statustext'] = "ok";
        }
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorrectPurchase');
  }

  goToReady(){
        this.navCtrl.push(Goodbyescreen);
  }

}
