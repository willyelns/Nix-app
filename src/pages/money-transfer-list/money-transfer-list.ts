import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-money-transfer-list',
  templateUrl: 'money-transfer-list.html',
})
export class MoneyTransferListPage {

  transfers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
    // this.transfers = this.httpClient.get('https://nix-bank-qa.cloudint.nexxera.com/v1/transactions');
    this.transfers = this.httpClient.get('https://swapi.co/api/films/');
    // this.transfers.subscribe(data => {
    //   console.log('data returned', data);
    // });
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoneyTransferListPage');
  }

  toMenu() {
    this.navCtrl.push(MenuPage);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  previousPage() {
    console.log('previous');
  }
  nextPage() {
    console.log('next');
  }
  transferDetails() {
    console.log('details');
  }

}
