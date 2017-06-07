import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';
/**
 * Generated class for the EcGoodbyescreen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ec-goodbyescreen',
  templateUrl: 'ec-goodbyescreen.html',
})
export class EcGoodbyescreen {
timer: number = 10;
user: any;
sumAktProducts: number = 0;
products: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.user = navParams.get("user");
    this.sumAktProducts = navParams.get("sumAktProducts");
    this.products = navParams.get("products");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcGoodbyescreen');
  }
  ionViewDidEnter(){
    while(this.timer > 0){
       this.wait(1000);
       this.timer = this.timer-1
    }
    
    //this.writeDataToFirebase();
    this.navCtrl.setRoot(HomePage);
  }


wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

writeDataToFirebase(){
var newKey = firebase.database().ref('/orders').push()
firebase.database().ref('/orders/' + newKey).set(
{
  uid: this.user.uid,
  products : this.products,
  sumProducts : this.sumAktProducts,
  date : new Date().getDate()

});
}
}
