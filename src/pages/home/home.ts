import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { MoneyTransferListPage } from '../money-transfer-list/money-transfer-list';
import { ApiProvider } from '../../providers/api/api';
import { PersonProvider } from './../../providers/person/person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  totalTransfer;
  totalMoney;

  person = {
    'name': {
      'first': '',
      'last': ''
    },
    'picture': '',
    'ag': '',
    'acc': ''
  };
  loading = this.loadingCtrl.create({
    content: 'Por favor, espere...'
  });

  constructor(public navCtrl: NavController, public personProvider: PersonProvider, public loadingCtrl: LoadingController, public apiProvider: ApiProvider) {
    this.loading.present();
    this.totalMoney = 0.0;
    this.transferInfo();
    this.loadingPerson();
  }

  transferInfo() {
    this.apiProvider.load().then(result => {
      this.totalTransfer = result.data.length;
      result.data.forEach(item => {
        this.totalMoney += parseFloat(item.valor); 
      });
      this.totalMoney = typeof this.totalMoney === 'string' ? this.totalMoney : this.apiProvider.moneyFormat(this.totalMoney.toFixed(2));
      console.log('variables', this.totalMoney, this.totalTransfer);
      console.log('data', result);
    });
  }

  toTransferList() {
    this.navCtrl.push(MoneyTransferListPage);
  }

  loadingPerson() {
    this.personProvider.load().then(data => {
      this.person = {
        'name' : {
          'first': data.results[0].name.first,
          'last': data.results[0].name.last
        },
        'picture': data.results[0].picture.large,
        'ag': '12340',
        'acc': '123456-7'   
      }
    })
    this.loading.dismiss();
  }

  toMenu() {
    this.navCtrl.push(MenuPage);
  }

  toMoneyTransferList() {
    this.navCtrl.push(MoneyTransferListPage);
  }

}
