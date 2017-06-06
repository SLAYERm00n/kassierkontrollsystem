import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';



/**
 * Generated class for the Goodbyescreen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-goodbyescreen',
  templateUrl: 'goodbyescreen.html',
})
export class Goodbyescreen {
user: any;
guthaben: number = 0;
sumAktProducts: number = 0;
timer: number = 10;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
    this.guthaben = navParams.get("guthaben");
    this.sumAktProducts = navParams.get("sumAktProducts");
  this.timer = 10;

  this.writeDataToFirebase();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Goodbyescreen');
     
  }

  ionViewDidEnter(){
    while(this.timer > 0){
       this.wait(1000);
       this.timer = this.timer-1
    }
    this.navCtrl.pop();
  }
wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
     
  }
}

writeDataToFirebase(){
firebase.database().ref('users/' + 'epTFLpw9bFUNpFKma5Gxa3dLs6C3' + '/orders/').push().set({
  uid: 'epTFLpw9bFUNpFKma5Gxa3dLs6C3',
  /**products : dataPrv.getAktProducts(),**/
  date : new Date().getDate()

});
}

}
