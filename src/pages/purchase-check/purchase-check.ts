import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseOverview } from '../purchase-overview/purchase-overview';
import { StaffLogin } from '../staff-login/staff-login';
import { User } from '../../providers/user';
import { DataProvider } from '../../providers/dataprovider';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner'




/**
 * Generated class for the PurchaseCheck page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-purchase-check',
  templateUrl: 'purchase-check.html',
})
export class PurchaseCheck {

  mitarbeiter: any;
  result: Object;
  products: any;
  user : any;
  sumAktProducts: number = 0;
  guthaben: number;
  data: any;
  haveProducts: boolean = false;
  product: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public barcode: BarcodeScanner, public dataPrv: DataProvider) {

    this.mitarbeiter = navParams.get("mitarbeiter");
    this.product = navParams.get('product');
    this.user = navParams.get('user');
  }

    async openScanner() {


    await this.barcode.scan().then(data =>{
      this.result = JSON.parse(data['text']);
      this.products = this.result['products'];
      console.log("Products aus dem Warenkorb");
      console.dir(this.products);
      this.user = this.result['user'];
      console.log("User");
      console.dir(this.user);
      this.sumAktProducts = this.result['summe'];
      
      this.data = {
        user: this.user,
        products: this.products,
        summe: this.sumAktProducts
      }

        if(this.products.length>0){
            this.haveProducts = true;
        }else{
            this.haveProducts = false;
        }
        console.log("haveProducts");
        console.log(this.haveProducts);
/*
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
 */   
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseCheck');
  }
openPurchaseOverview(){
  this.navCtrl.push(PurchaseOverview);
}
}
