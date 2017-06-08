import { Injectable, EventEmitter, Inject } from '@angular/core';
import { AuthProviders, AngularFire, FirebaseAuthState, AuthMethods, FirebaseApp } from 'angularfire2'; //Add FirebaseApp
import { auth } from 'firebase'; //needed for the FacebookAuthProvider
import { Observable } from "rxjs/Observable";
import { Platform } from 'ionic-angular';
import { User } from './user';


@Injectable()
export class DataProvider {


  data: Object;
  user: User;

  constructor(private af: AngularFire, @Inject(FirebaseApp) firebase: any, private platform: Platform) { //Add reference to native firebase SDK
      
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
      var newKey = firebase.database().ref('/orders').push()
      firebase.database().ref('/orders/' + newKey).set(
      {
        uid: this.user['uid'],
        products : this.data['products'],
        sumProducts : this.data['summe'],
        date : new Date().getDate()
      });
      resolve();
    })
    
  }
}