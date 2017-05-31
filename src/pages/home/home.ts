import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner'
import { Sumscreen  } from '../sumscreen/sumscreen';
import { Goodbyescreen  } from '../goodbyescreen/goodbyescreen';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

options: BarcodeScannerOptions;
result: Object;
products: any;
user : any;
fullName: string;
sumAktProducts: number = 0;
scanned: boolean = false;
guthaben: number = 20;

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
if(this.user != null){

if(this.guthaben > this.sumAktProducts){
                this.goToGoodbyescreen();
              }
else{
      this.goToSumscreen();
    }

}else{
       alert("Scan war nicht erfolgreich!");
      }

}

public goToSumscreen(){
    this.navCtrl.push(Sumscreen, {
       products: this.products,
       user :this.user, 
       sumAktProducts :this.sumAktProducts,
       guthaben : this.guthaben
     });
}

public goToGoodbyescreen(){
    this.navCtrl.push(Goodbyescreen, {
       products: this.products,
       user :this.user, 
       sumAktProducts :this.sumAktProducts,
       guthaben : this.guthaben
     });
}





getMitarbeiter(){

}
  
}

