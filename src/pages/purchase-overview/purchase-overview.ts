import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Payselectscreen } from '../payselectscreen/payselectscreen';
import { DataProvider } from '../../providers/dataprovider';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { CorrectPurchase } from '../correct-purchase/correct-purchase';


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
  aktProducts: Array<Object>;
  scannedProducts: Array<Object>;
  tempProduct: Object;
  started: boolean = false;
  statusColor: any = "#ededed";
  dbProducts: any;

  constructor(public navCtrl: NavController,private barcode: BarcodeScanner, private dataPrv: DataProvider, public navParams: NavParams) {
    this.data = this.dataPrv.getData();
    this.aktProducts = this.data.products;

    this.scannedProducts = [];

    console.dir(this.aktProducts);


    if(this.scannedProducts!=null){
      this.started = true;
    }
  }


  async scanBarcode() {
    await this.barcode.scan().then(result =>{

      if (!result.cancelled) {
                this.compareLists(result.text)
            }

    })
  
  }

  checkEAN(EAN): Boolean{
    var found = false;
    console.log("In Checking EAN "+this.aktProducts);
    this.aktProducts.forEach(data =>{
      if(data['productEAN']==EAN){
        console.log("Scannend Product Found in aktProducts");
        this.tempProduct = data;
        found = true;
      }
    })

    return found;

    /*
    for(let i=0;i<this.aktProducts.lenght;i++){
      console.log(this.aktProducts[i].EAN+" | "+EAN);
      if(this.aktProducts[i].EAN==EAN){
       console.log("Scannend Product Found in aktProducts");
       this.tempProduct = this.aktProducts[i];
       return i;
      }else{
        // get From DB this.tempProduct = this.aktProducts[i];
        return null;
      }
    } */
  }

  compareLists(EAN){
    this.tempProduct = null;
    var found = false;
    if(this.checkEAN(EAN)){
      console.log("Checking list");
      
      found = this.increaseCheck(EAN)

      if(!found){
        this.addToList()
        
      
      }
    }else{
      var found = false;
      console.log("Check in Database")
      this.dataPrv.getProducts().then(data =>{
          this.dbProducts = data;
          this.dbProducts.forEach(product =>{
            if(product.$key==EAN){
              
              if(!this.increaseCheck(EAN)){
                this.tempProduct = product;
                this.tempProduct['anzahl'] =1;
                this.tempProduct['productEAN'] = product.$key;
                this.addToList();
              };

              found = true;
              
            }
          })

          if(!found){
            alert("Product nicht im Sortiment: "+EAN)
          }
      });

      
    
    }

  }



  addToList(){
    let index = this.scannedProducts.length;
    this.scannedProducts.push(this.tempProduct)
    this.scannedProducts[index]['gesamt'] = this.tempProduct['anzahl'];
    this.scannedProducts[index]['anzahl'] = 1;

    this.scannedProducts[index]['status'] = this.checkColor(index);
    console.dir(this.scannedProducts[index])
  }

  increaseCheck(EAN): boolean{
    var found = false;
    for(let i=0;i<this.scannedProducts.length;i++){
        if(this.scannedProducts[i]['productEAN']==EAN){
          this.scannedProducts[i]['anzahl']+=1;
          console.log("Gefunden :)")
           this.scannedProducts[i]['status'] = this.checkColor(i);

           found = true;
           return true;
        }
    }

    if(!found){
      return false
    }
  }

  checkColor(i): String{
    if(this.scannedProducts[i]['gesamt']==this.scannedProducts[i]['anzahl']) return "#c3ff6b";
    if(this.scannedProducts[i]['gesamt']<this.scannedProducts[i]['anzahl']) return "#ff6b6b"; 
    if(this.scannedProducts[i]['gesamt']>this.scannedProducts[i]['anzahl']) return "#fffd8c"; 
  }       

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseOverview');
  }

  finishCheck(){
    this.navCtrl.push(CorrectPurchase, {
      scanned: this.scannedProducts
    });
  }
}
