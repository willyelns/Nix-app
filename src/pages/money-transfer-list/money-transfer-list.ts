import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { TransferDetailsPage } from '../transfer-details/transfer-details';
import { ApiProvider } from './../../providers/api//api';

@IonicPage()
@Component({
  selector: 'page-money-transfer-list',
  templateUrl: 'money-transfer-list.html',
})
export class MoneyTransferListPage {

  elementsPage : number;
  previousText : string;
  nextText : string;
  pages : number;
  test : Array<any>;
  currentPage : number; 
  transfers: Array<any>;
  transferPage : Array<any>;
  loading = this.loadingCtrl.create({
    content: 'Por favor, espere...'
  });
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
    this.loading.present();
    this.nextText = 'Próximo';
    this.previousText = '';
    this.pages = 0;
    this.currentPage = 0;
    this.elementsPage = 5;
    this.loadingTransferList();
  }

  loadingTransferList() {
    this.apiProvider.load().then(result => {

      this.transfers = result.data;

      if(this.transfers.length === 0) {
        console.log('empty screen');
      } else {
        this.currentPage = 1;
        this.pages = this.transfers.length / 5;
        this.transfers.forEach(item => {
          item.valor = typeof item.valor === 'string' ? item.valor : this.moneyFormat(item.valor.toFixed(2));
        })
        this.transferPage = this.paginateTransferList(this.elementsPage, this.currentPage);
      }
      this.loading.dismiss();
    })
    return true;
  }

  moneyFormat(value) {
    const separateValue = value.split('.');
    separateValue[0] = separateValue[0].split(/(?=(?:...)*$)/).join('.');
    return separateValue.join(',');
  }

  toMenu() {
    this.navCtrl.push(MenuPage);
  }

  doRefresh(refresher) {
    let finished = this.loadingTransferList();
    if(finished) { refresher.complete()}
  }

  setPaginationText() {
    this.nextText = this.currentPage === this.pages ? '' : 'Próximo';
    this.previousText = this.currentPage > 1 ? 'Anterior' : '';
  }

  paginateTransferList(page_size, page_number) {
    page_number--;
    return this.transfers.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  previousPage() {
    this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 1;
    this.setPaginationText();
    this.transferPage = this.paginateTransferList(this.elementsPage, this.currentPage);
    console.log('previous', this.currentPage);
  }
  nextPage() {
    this.currentPage = this.currentPage < this.pages ? this.currentPage+1 : this.pages;
    this.setPaginationText();
    this.transferPage = this.paginateTransferList(this.elementsPage, this.currentPage);
    console.log('next', this.currentPage);
  }
  transferDetails(transfer) {
    console.log('details', transfer);
    // const filter = {
    //   'payer': 'pagadorTest',
    //   'recipient': 'beneficiarioTest',
    //   'type': 'tipoTest',
    //   'status': 'statusTest'
    // }

    // const filter = {
    //   'payer': 'pagadorTest',
    //   'recipient': '',
    //   'type': 'cc',
    //   'status': ''
    // }

    // // console.log('filter test', this.apiProvider.getFilteredTransfers(filter).subscribe(data => data));

    // this.apiProvider.getFilteredTransfers(filter).subscribe(data => {
    //   console.log('filter test', data);
    // })
    let transferObject = {
      'details': {
        'id': transfer.id,
        'recipient': transfer.beneficiario,
        'payer': transfer.pagador,
        'value': transfer.valor,
        'status': transfer.status,
        'type': transfer.tipo
      }
    }
    let transferDetailsModal = this.modalCtrl.create(TransferDetailsPage, transferObject);
    transferDetailsModal.present();
  }

}
