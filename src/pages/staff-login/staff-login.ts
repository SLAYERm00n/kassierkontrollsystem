import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { DataProvider } from '../../providers/dataprovider';
import { PurchaseCheck } from '../purchase-check/purchase-check'
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
            this.goPurchaseCheck(data);
            }).catch(error=>{
              alert(error);
            })
      }).catch((err) => {
         alert(err);
        });
  }

  /*
  Weiter zu PurchaseCheck. Mitarbeiter wird übergeben
  */
  goPurchaseCheck(mitarbeiter){
    this.navCtrl.setRoot(PurchaseCheck, {
    mitarbeiter: mitarbeiter
    }) 
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffLogin');
  }
}