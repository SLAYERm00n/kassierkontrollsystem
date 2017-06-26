import { Injectable, EventEmitter, Inject } from '@angular/core';
import { AuthProviders, FirebaseAuthState, AngularFire, AuthMethods, FirebaseApp, FirebaseListObservable } from 'angularfire2'; //Add FirebaseApp
import { Observable } from "rxjs/Observable";
import { Platform } from 'ionic-angular';
import { User } from './user';


@Injectable()
export class DataProvider {

  
  data: Object;
  user: User;
  firebase: any;
  datum: String;
  storeMitarbeiterNode: FirebaseListObservable<any>;;
  storeProductsNode: FirebaseListObservable<any>;;

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

  getProducts(){
    return new Promise((resolve, reject) =>{
      this.storeProductsNode = this.db.list('/store/'+1+"/products");
      this.storeProductsNode.forEach(element=>{
        resolve(element);
      });
    })
  }

  writeDataToFirebase(){
    return new Promise(resolve =>{
      
      this.firebase.database().ref('orders/').push().set(
      
      {
        uid: this.user['uid'],
        products : this.data['products'],
        sumProducts : this.data['summe'],        
        date : new Date().toISOString(),
        store: this.data['store']
      });
      resolve();
    })
  }

  randomCheck(){
    return new Promise((reject, resolve) =>{
      resolve(Math.floor(Math.random() * 2) + 1);
    })
  }
  

  /*
  Mitarbeiter aus dem richtigen Store werden hier geladen
  */
  getMA(store){
     return new Promise((resolve, reject) =>{
       this.storeMitarbeiterNode = this.db.list('/store/'+store['store']+"/MA/");
        this.storeMitarbeiterNode.forEach(element=>{
          console.log("Element in foreach")
          console.dir(element);
          for(var i=0;i<element.length;i++){
            if(element[i].password == store['pw']){
              console.log
              console.dir(element[i].password);
              resolve(element[i]);
            }
          }
          reject("Mitarbeiter nicht gefunden")
        }
      );
     })
  } 
}