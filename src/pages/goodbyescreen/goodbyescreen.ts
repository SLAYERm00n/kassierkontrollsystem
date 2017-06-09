import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { DataProvider } from '../../providers/dataprovider';
import { HomePage } from "../home/home";


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
timer: number = 10;
data: Object;
user: Object;
guthaben : number;
sumAktProducts : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataPrv: DataProvider) {
    this.data = this.dataPrv.getData();
    this.user = this.data['user'];
    this.sumAktProducts  = this.data['summe'];
    this.guthaben = this.user['amount'];
    
    //aktualisiertes Guthaben in die Datenbank laden
    this.user['amount'] = this.guthaben - this.sumAktProducts;
    this.dataPrv.updateUser(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Goodbyescreen');
     
  }

  ionViewDidEnter(){
     
    this.dataPrv.writeDataToFirebase().then(result =>{

      while(this.timer > 0){
       this.wait(1000);
       this.timer = this.timer-1
      }
      
      
      this.navCtrl.setRoot(HomePage);
    }).catch(error =>{
      alert(error);
      console.error(error);
    }) 
  }

wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
     
  }
}

}
