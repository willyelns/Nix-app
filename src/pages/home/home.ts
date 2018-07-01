import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { MoneyTransferListPage } from '../money-transfer-list/money-transfer-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toMenu() {
    this.navCtrl.push(MenuPage);
  }

  toMoneyTransferList() {
    this.navCtrl.push(MoneyTransferListPage);
  }

}
