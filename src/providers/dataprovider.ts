import { Injectable, EventEmitter, Inject } from '@angular/core';
import { AuthProviders, AngularFire, FirebaseAuthState, AuthMethods, FirebaseApp, FirebaseListObservable } from 'angularfire2'; //Add FirebaseApp
import { auth } from 'firebase'; //needed for the FacebookAuthProvider
import { Observable } from "rxjs/Observable";
import { Platform } from 'ionic-angular';
import { User } from './user';
import { StaffLogin } from '../pages/staff-login/staff-login';
import { Checkscreen } from '../pages/checkscreen/checkscreen';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';


@Injectable()
export class DataProvider {

  
  data: Object;
  user: User;
  firebase: any;
  datum: String;
  storeMitarbeiterNode: FirebaseListObservable<any>;;
  db: any;
  storeid: any;
  mitarbeiter: any;


  constructor(private af: AngularFire, @Inject(FirebaseApp) firebase: any, private platform: Platform) { //Add reference to native firebase SDK
      this.firebase = firebase;
      this.db = this.af.database;  
      this.storeMitarbeiterNode = this.db.list;
  }

  setData(data){
    return new Promise(resolve=>{
      this.data = data;
      var aktUser = data['user'];
      this.setUser(aktUser);
      resolve(this.getUser());
    })
  }

  getData(){
    return this.data;
  }

  getUser(): User {
        return this.user;
  }

  setUser(user): void {
    this.user = new User(user.uid);
  }
  
  updateUser(object){
      this.user.update(object)
  }

  loginWithEmail(credentials) {
      return Observable.create(observer => {
          this.af.auth.login(credentials, {
              provider: AuthProviders.Password,
              method: AuthMethods.Password
          }).then((authData) => {
              //console.log(authData);
              observer.next(authData);
          }).catch((error) => {
              observer.error(error);
          });
      });
  }

  writeDataToFirebase(){
    return new Promise(resolve =>{
      
      this.firebase.database().ref('orders/').push().set(
      
      {
        uid: this.user['uid'],
        products : this.data['products'],
        sumProducts : this.data['summe'],        
        date : this.getDate()
      });
      resolve();
    })
    
  }

  setDate(){
    var d = new Date();
    var tag  = d.getDate();
    var monat = d.getMonth()+1;
    var jahr = d.getFullYear();
    return this.datum = tag+'-'+monat+'-'+jahr;  


  }

  getDate(){
        this.setDate();
        return this.datum;

  }

  /*
  Mitarbeiter aus dem richtigen Store werden hier geladen
  */
  getMA(store){
     return new Promise((resolve, reject) =>{
       this.storeMitarbeiterNode = this.db.list('/store/'+store['store']+"/MA/");
        this.storeMitarbeiterNode.forEach(element=>{
          resolve(element);
          this.mitarbeiter = element;
          this.checkMA(store, this.mitarbeiter);
        }
      );
     })
  } 
     
    /*
  Passwort aus dem QR Code wird mit Passwort aus der Datenbank verglichen
  */
  checkMA(store, mitarbeiter){

    return new Promise((resolve, reject) =>{
      for(let i=0; i < mitarbeiter.length; i++){
        console.log("Schleifendurchgang: " +i)
        if(this.mitarbeiter[i]['password'] === store['pw']){        
          console.log("Mitarbeiter gefunden");
          //this.login.goCheckscreen(store);
          break;
      }
      else {
        console.log("nicht gefunden");
      }
    }
    })
}

}