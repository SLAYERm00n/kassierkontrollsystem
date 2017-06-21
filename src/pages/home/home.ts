import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { Sumscreen  } from '../sumscreen/sumscreen';
import { Goodbyescreen  } from '../goodbyescreen/goodbyescreen';
import { Checkscreen } from '../checkscreen/checkscreen';
import { DataProvider } from '../../providers/dataprovider';
import { PurchaseCheck } from '../purchase-check/purchase-check';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

result: Object;
products: any;
user : any;
sumAktProducts: number = 0;
guthaben: number;

data: any;
  constructor(public navCtrl: NavController, private barcode: BarcodeScanner, private dataPrv: DataProvider) {
    this.dataPrv.loginWithEmail({email: 'statususer@shoppingapp.de', password: 'status1234'}).subscribe(data =>{
      console.log("Login erfolgreich")
    })

    this.result = JSON.parse('{"user":{"uid":"05SHxBhSLOX1CTRxZPfiFclHUYB3","userRef":"https://schoppingapp.firebaseio.com/users/05SHxBhSLOX1CTRxZPfiFclHUYB3","fullName":"Philip Wangler","email":"philip.wangler@hs-furtwangen.de","amount":95.20000000000002},"products":[{"anzahl":1,"price":0.8,"productName":"Saskia Minearlwasser","productEAN":"42143574","productCat":"Lebensmittel"}],"summe":0.8,"store":"Kiosk am Bahnhof"}');
    
     this.products = this.result['products'];
      this.user = this.result['user'];
      this.sumAktProducts = this.result['summe'];
      
      this.data = {
        user: this.user,
        products: this.products,
        summe: this.sumAktProducts,
	      store: this.result['store']
      }
      this.dataPrv.setData(this.data).then(result =>{
            this.navCtrl.push(PurchaseCheck)
      })
  }


  async scanBarcode() {
    await this.barcode.scan().then(data =>{
      this.result = JSON.parse(data['text']);
      this.products = this.result['products'];
      this.user = this.result['user'];
      this.sumAktProducts = this.result['summe'];
      
      this.data = {
        user: this.user,
        products: this.products,
        summe: this.sumAktProducts,
	      store: this.result['store']
      }
      this.dataPrv.setData(this.data).then(result =>{
        var user = result;
        if(user != null){  
            if(this.user['amount'] > this.sumAktProducts){
              this.goToGoodbyescreen();
            }
            else{
              this.goToSumscreen();
            }
        }else{
          alert("Scan war nicht erfolgreich!");
        }
      });
    
    })
  }

public goToSumscreen(){
    this.navCtrl.push(Sumscreen);
}

public goToGoodbyescreen(){
    this.navCtrl.push(Goodbyescreen);
}

getMitarbeiter(){
  this.navCtrl.push(Checkscreen);
}

ionViewDidLoad() {
    console.log('ionViewDidLoad Homescreen');
  }
  
}

