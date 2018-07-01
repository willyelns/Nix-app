import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MoneyTransferListPage } from '../money-transfer-list/money-transfer-list';
import { PersonProvider } from '../../providers/person/person';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  toBack() {
    this.navCtrl.pop();
  }
  toHome() {
    console.log('home');
    this.navCtrl.push(HomePage);
  }
  toTransfer() {
    console.log('transfer');
    this.navCtrl.push(MoneyTransferListPage);
  }
  toLogout() {
    console.log('Logout');
    // this.navCtrl.push();
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
