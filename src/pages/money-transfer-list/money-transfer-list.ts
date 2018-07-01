import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { ApiProvider } from './../../providers/api//api';

@IonicPage()
@Component({
  selector: 'page-money-transfer-list',
  templateUrl: 'money-transfer-list.html',
})
export class MoneyTransferListPage {

  transfers: any;
  loading = this.loadingCtrl.create({
    content: 'Por favor, espere...'
  });
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public loadingCtrl: LoadingController) {
    this.loading.present();

    this.transfers = this.apiProvider.load();
    // this.transfers.subscribe(results => {
    //   // console.log('data returned', results.data.map(item => item.valor = this.moneyFormat(item.valor.toFixed(2))));
    //   console.log('data returned', results.data.map(item => item.valor = this.moneyFormat(item.valor.toFixed(2))));
    // });
  }

  moneyFormat(value) {
    const separateValue = value.split('.');
    separateValue[0] = separateValue[0].split(/(?=(?:...)*$)/).join('.');
    return separateValue.join(',');
  }

  ionViewDidLoad() {
    this.loading.dismiss();
  }

  toMenu() {
    this.navCtrl.push(MenuPage);
  }

  doRefresh(refresher) {
    console.log('before transfers', this.transfers);
    this.transfers = this.apiProvider.load().then(data => {
      // this.transfers = data;
      console.log('after transfers', this.transfers);
      refresher.complete();
    });
    // setTimeout(() => {
    //   console.log('Async operation has ended');
    //   refresher.complete();
    // }, 2000);
  }

  previousPage() {
    console.log('previous');
  }
  nextPage() {
    console.log('next');
  }
  transferDetails(transfer) {
    console.log('details', transfer);
    // const filter = {
    //   'payer': 'pagadorTest',
    //   'recipient': 'beneficiarioTest',
    //   'type': 'tipoTest',
    //   'status': 'statusTest'
    // }

    const filter = {
      'payer': 'pagadorTest',
      'recipient': '',
      'type': 'cc',
      'status': ''
    }

    // console.log('filter test', this.apiProvider.getFilteredTransfers(filter).subscribe(data => data));

    this.apiProvider.getFilteredTransfers(filter).subscribe(data => {
      console.log('filter test', data);
    })

  }

}
