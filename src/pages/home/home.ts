import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { MoneyTransferListPage } from '../money-transfer-list/money-transfer-list';

import { PersonProvider } from './../../providers/person/person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  person = {
    'name': {
      'first': '',
      'last': ''
    },
    'picture': '',
    'ag': '',
    'acc': ''
  };

  constructor(public navCtrl: NavController, public personProvider: PersonProvider) {
    this.loadingPerson();
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
  }

  toMenu() {
    this.navCtrl.push(MenuPage);
  }

  toMoneyTransferList() {
    this.navCtrl.push(MoneyTransferListPage);
  }

}
