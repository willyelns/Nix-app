import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MoneyTransferListPage } from '../money-transfer-list/money-transfer-list';
import { PersonProvider } from '../../providers/person/person';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  person = {
    'name': {
      'first': '',
      'last': ''
    },
    'picture': '',
    'ag': '',
    'acc': ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public personProvider: PersonProvider) {
    this.loadingPerson();
  }

  toBack() {
    this.navCtrl.pop();
  }
  toHome() {
    this.navCtrl.push(HomePage);
  }
  toTransfer() {
    this.navCtrl.push(MoneyTransferListPage);
  }
  toLogout() {
    this.navCtrl.setRoot(LoginPage);
  }

  loadingPerson() {
    this.personProvider.load().then(data => {
      this.person = {
        'name' : {
          'first': data.results[0].name.first,
          'last':  data.results[0].name.last
        },
        'picture': data.results[0].picture.large,
        'ag': '12340',
        'acc': '123456-7'   
      }
    })
  }

}
