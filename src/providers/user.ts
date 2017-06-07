import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {
 public provider: string;
  public fullName: string;
  public email: string;
  public avatar: string;
  public verified: string;
  public amount: number;
  
  userRef: any;

  constructor(public uid : string) {
    this.userRef = firebase.database().ref('users/' + uid);
    
    console.debug("Load user using uid " + this.constructor.name);
    this.userRef.on('value', (snapshot) => {
      if (snapshot.val() === null) { return; }
      this.uid = uid;
      this.fullName = snapshot.val().name;
      this.email = snapshot.val().email;
      this.verified = snapshot.val().verified; 
      this.amount = snapshot.val().amount;
    });
  }
  
  
  // Wrap firebase update
  update(object: any) {
    console.debug("update user details " + this.constructor.name);
    return this.userRef.update(object)
  }

}
