import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseOverview } from '../purchase-overview/purchase-overview';
import { DataProvider } from '../../providers/dataprovider';
import { HomePage } from '../home/home';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'




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
  products: any;
  user : any;
  data: any;
  haveProducts: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public barcode: BarcodeScanner, public dataPrv: DataProvider) {

    
  }




    ionViewDidLoad() {
       this.data = this.dataPrv.getData();
        console.log(this.data);
        this.mitarbeiter = this.navParams.get("mitarbeiter");
        this.products = this.data.products;
        this.user = this.data.user;

        if(this.products.lenght!=0){
          this.haveProducts= true;
        }
    }

    openPurchaseOverview(){
      this.navCtrl.push(PurchaseOverview);
    }
}
