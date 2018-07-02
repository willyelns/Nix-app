import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiProvider } from '../../providers/api/api';
import { MoneyTransferListPage } from '../money-transfer-list/money-transfer-list';

@IonicPage()
@Component({
  selector: 'page-transfer-filter',
  templateUrl: 'transfer-filter.html',
})
export class TransferFilterPage {

  private filterForm : FormGroup;
   filter = {
      'payer': '',
      'recipient': '',
      'type': '',
      'status': ''
    }

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder : FormBuilder, private apiProvider: ApiProvider) {
    this.createFiterForm();
  }

  createFiterForm() {
    this.filterForm = this.formBuilder.group({
      'payer': [''],
      'recipient': [''],
      'type': [''],
      'status': ['']
    });
  }

  clearFilter() {
    this.createFiterForm();
  }

  toBack() {
    this.navCtrl.pop();
  }

  doFilter() {
    console.log('filter', this.filterForm.value);
    this.apiProvider.getFilteredTransfers(this.filterForm.value).then(data =>{
        console.log("data", data);
        let result = {
          'filter': data
        }
        this.navCtrl.push(MoneyTransferListPage,result);
    });
  }
}
