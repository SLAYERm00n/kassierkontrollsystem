import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';
import { DataProvider } from '../../providers/dataprovider';

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

data: Object;
user: Object;
guthaben: number;
aufladeBetrag: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataPrv: DataProvider) {

    this.data = this.dataPrv.getData();
    this.user = this.data['user'];
  
    this.guthaben = this.user['amount'];
    this.aufladeBetrag = navParams.get("aufladeBetrag");

    // aktualisiertes Guthaben in die Datenbank schreiben
    this.guthaben = this.guthaben + this.aufladeBetrag
    this.user['amount'] = this.guthaben;
    
      this.dataPrv.updateUser(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcGoodbyescreen');
  }

  ionViewDidEnter(){

    // BestellungsFunktion @ Phil
   /* this.dataPrv.writeDataToFirebase().then(result =>{

      while(this.timer > 0){
       this.wait(1000);
       this.timer = this.timer-1
      }
      
      //this.writeDataToFirebase();
      this.navCtrl.setRoot(HomePage);
    }).catch(error =>{

    }) */
    
  }


  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
  }
  
}
