import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcode: BarcodeScanner) {
  }

async scanBarcode() {


  await this.barcode.scan().then(data =>{
    this.result = JSON.parse(data['text']);
    this.store = this.result['store'];
    console.log(this.store);
    //this.products = this.result['products'];
    //this.user = this.result['user'];
    //this.sumAktProducts = this.result['summe'];
    //console.dir(this.result);
    //console.dir(this.products);
    //this.scanned = true;

  
  })
}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffLogin');
  }

}
