import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { MoneyTransferListPage } from '../pages/money-transfer-list/money-transfer-list';
import { TransferDetailsPage } from '../pages/transfer-details/transfer-details';
import { ApiProvider } from '../providers/api/api';
import { PersonProvider } from '../providers/person/person';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    MoneyTransferListPage,
    TransferDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    MoneyTransferListPage,
    TransferDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    PersonProvider
  ]
})
export class AppModule {}
