import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

options: BarcodeScannerOptions;
results: {};
haveProducts:boolean;

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner) {

  }
async scanBarcode() {
  this.results = await this.barcode.scan();
  var toJason = this.results["text"];
  console.log("toJason");
  console.log(toJason); 
  var jsonData = JSON.parse(toJason);
  console.log("jsonData");
  console.log(jsonData);
   this.haveProducts = true;
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

