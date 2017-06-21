import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AngularFireModule } from 'angularfire2';

//Seiten
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Payselectscreen  } from '../pages/payselectscreen/payselectscreen';
import { Sumscreen  } from '../pages/sumscreen/sumscreen';
import { Goodbyescreen } from '../pages/goodbyescreen/goodbyescreen';
import { EcPayscreen } from '../pages/ec-payscreen/ec-payscreen';
import { EcGoodbyescreen } from '../pages/ec-goodbyescreen/ec-goodbyescreen';
import { StaffLogin } from '../pages/staff-login/staff-login';
import { PurchaseCheck } from '../pages/purchase-check/purchase-check';
import { Checkscreen } from '../pages/checkscreen/checkscreen';
import { PurchaseOverview } from '../pages/purchase-overview/purchase-overview';
import { CorrectPurchase } from '../pages/correct-purchase/correct-purchase';

//Module
import {CorrectPurchaseModule } from '../pages/correct-purchase/correct-purchase.module';

//provider
import { DataProvider } from '../providers/dataprovider';


const config = {
    apiKey: "AIzaSyC795AMc1eDvOBj0t3JYnF8eJBqr2Ug6yM",
    authDomain: "schoppingapp.firebaseapp.com",
    databaseURL: "https://schoppingapp.firebaseio.com",
    projectId: "schoppingapp",
    storageBucket: "schoppingapp.appspot.com",
    messagingSenderId: "253317345252"
  };



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Payselectscreen,
    Sumscreen,
    Goodbyescreen,
    EcPayscreen,
    EcGoodbyescreen,
    StaffLogin,
    PurchaseCheck,
    Checkscreen,
    PurchaseOverview,
    CorrectPurchase
  ],
  imports: [
   BrowserModule,
   IonicModule.forRoot(MyApp),
   AngularFireModule.initializeApp(config)
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Sumscreen,
    Payselectscreen,
    Goodbyescreen,
    EcPayscreen,
    EcGoodbyescreen,
    StaffLogin,
    PurchaseCheck,
    Checkscreen,
    PurchaseOverview,
    CorrectPurchase
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, DataProvider,
    BarcodeScanner
  ]
})
export class AppModule {}
