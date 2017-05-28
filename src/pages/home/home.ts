import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

options: BarcodeScannerOptions;
haveProducts:boolean;
result: Object;
products: any;
user : any;
fullName: string;
sumAktProducts: number = 0;
scanned: boolean = false;

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner) {

  }
async scanBarcode() {


  await this.barcode.scan().then(data =>{
    this.result = JSON.parse(data['text']);
    this.products = this.result['products'];
    this.user = this.result['user'];
    this.sumAktProducts = this.result['summe'];
    console.dir(this.result);
    console.dir(this.products);
    this.scanned = true;
  })

}



/*
parseToJson(){
  var data = this.results;
  console.log(data);
  var jsObject = this.barcode.scan().then((data) =>{
JSON.stringify(data);
  });}
 */ 

  
}

