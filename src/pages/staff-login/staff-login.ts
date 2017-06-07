import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner'
import { Checkscreen } from '../checkscreen/checkscreen';

/**
 * Generated class for the StaffLogin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-staff-login',
  templateUrl: 'staff-login.html',
})
export class StaffLogin {

mitarbeiterID: any;
result: any;
store: any;
store0: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcode: BarcodeScanner) {
  }

  /*
  Scanner funktion für den Mitarbeiter Login
  */
  openScanner(){
      this.barcode.scan().then((data) =>{
          this.result = JSON.parse(data['text']);
          this.store = this.result['store'];
          console.log("this.strore");
          console.dir(this.store);
          this.mitarbeiterID = this.store['MA'];
          console.log("MitarbeiterID");
          console.dir(this.mitarbeiterID);
          //this.checkMA(this.mitarbeiterID);
        }).catch((err) => {
          alert(err);
      });}

/*
Mitarbeiter überprüfen. ID aus dem Barcode gegenchecken mit der Datenbank
*/
checkMA(id){
  return new Promise((resolve, reject) =>{
    for(let i=0; i < this.store.lenght; i++){
      if(this.store[i].MA === id){
        //this.goCheckscreen();
      }
      resolve('Mitarbeiter gefunden')
      break;
    }
    reject('Mitarbeiter nicht gefunden');
      })
    }

/*
Funktion zur Weiterleitung zum Checkscreen. Wird von checkMA() verwendet
*/
    goCheckscreen(){
      this.navCtrl.setRoot(Checkscreen, {
        mitarbeiterID: this.mitarbeiterID
      });
    }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffLogin');
  }
}
