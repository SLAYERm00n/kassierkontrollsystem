import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner'
import { Checkscreen } from '../checkscreen/checkscreen';
import { DataProvider } from '../../providers/dataprovider';
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

password: String;
name: String;
result: any;
store: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, private barcode: BarcodeScanner, private data: DataProvider) {

  }

  /*
  Scanner funktion für den Mitarbeiter Login
  */
  openScanner(){
      this.barcode.scan().then((data) =>{
          this.result = JSON.parse(data['text']);
          this.store = this.result['store'];
          this.data.getMA(this.store).then(data =>{
            alert(data)
            this.goCheckscreen(data);
          }).catch(error=>{
            alert(error);
          })
        }).catch((err) => {
          alert(err);
      });}

      goCheckscreen(mitarbeiter){
   this.navCtrl.setRoot(Checkscreen, {
    mitarbeiter: mitarbeiter
  }
   )}
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffLogin');
  }
}