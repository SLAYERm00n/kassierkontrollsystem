import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcGoodbyescreen');
  }
  ionViewDidEnter(){
    while(this.timer > 0){
       this.wait(1000);
       this.timer = this.timer-1
    }
    this.navCtrl.popAll();
  }


wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
}
