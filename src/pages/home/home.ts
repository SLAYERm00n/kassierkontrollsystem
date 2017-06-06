import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner'
import { Sumscreen  } from '../sumscreen/sumscreen';
import { Goodbyescreen  } from '../goodbyescreen/goodbyescreen';
import { StaffLogin } from '../staff-login/staff-login';
import { PurchaseCheck } from '../purchase-check/purchase-check';
import { Checkscreen } from '../checkscreen/checkscreen';
import { User } from '../../providers/user';
//import { AuthProviders, AngularFire, FirebaseAuthState, AuthMethods, FirebaseApp } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
useridget : any;
options: BarcodeScannerOptions;
result: Object;
products: any;
user : any;
fullName: string;
sumAktProducts: number = 0;
scanned: boolean = false;
guthaben: number = 20;
uid:any;
userRef:any;
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

//this.useridget = new User(this.user.uid);

 /* this.userRef = firebase.database().ref('users/' + this.user.uid);
    
    console.debug("Load user using uid " + this.constructor.name);
    this.userRef.on('value', (snapshot) => {
      if (snapshot.val() === null) { return; }
      this.guthaben = snapshot.val().amount});
*/


//this.guthaben = this.useridget.User.amount;



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
  this.navCtrl.push(StaffLogin);
}
  
}

