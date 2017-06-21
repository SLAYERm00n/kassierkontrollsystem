import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Payselectscreen } from '../payselectscreen/payselectscreen';
import { DataProvider } from '../../providers/dataprovider';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'


/**
 * Generated class for the PurchaseOverview page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-purchase-overview',
  templateUrl: 'purchase-overview.html',
})
export class PurchaseOverview {


  data: any;
  aktProducts: any;
  scannedProducts: any
  tempProduct: Object;

  constructor(public navCtrl: NavController,private barcode: BarcodeScanner, private dataPrv: DataProvider, public navParams: NavParams) {
    this.data = this.dataPrv.getData();
    this.aktProducts = this.data.products;
  }


  async scanBarcode() {
    await this.barcode.scan().then(result =>{

      if (!result.cancelled) {
                this.compareLists(result.text)
            }

    })
  
  }

  checkEAN(EAN): Number{
    for(let i=0;i<this.aktProducts.lenght;i++){
      if(this.aktProducts[i].EAN==EAN){
       this.tempProduct = this.aktProducts[i];
       return i;
      }else{
        // get From DB this.tempProduct = this.aktProducts[i];
        return null;
      }
    }
  }

  compareLists(EAN){
    var found = false;
    if(this.checkEAN!=null){
      for(let i;i<this.scannedProducts.lenght;i++){
        if(this.scannedProducts[i].EAN==EAN){
          this.scannedProducts[i].anzahl++;
          this.scannedProducts[i].ueber--;
          found = true;
          break;
        }
      }

      if(!found){
        let index = this.scannedProducts.lenght;
        this.scannedProducts.push(this.tempProduct)
        this.scannedProducts[index].anzahl = 1;
        this.scannedProducts[index].ueber = this.tempProduct['anzahl'];
      }
    }

  }            

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseOverview');
  }
openPaySelectScreen(){
  this.navCtrl.push(Payselectscreen);
}
}
