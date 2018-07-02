import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { TransferDetailsPage } from '../transfer-details/transfer-details';
import { TransferFilterPage } from '../transfer-filter/transfer-filter';
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
  pages : any;
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
    if(this.navParams.get('filter')) {
      this.transfers = this.navParams.get('filter').data;
      this.setTransferList();
    } else {
      this.loadingTransferList();
    }
  }

  loadingTransferList() {
    this.apiProvider.load().then(result => {

      this.transfers = result.data;

      if(this.transfers.length === 0) {
        console.log('empty screen');
      } else {
        this.setTransferList();
      }
        
    })
    return true;
  }

  setTransferList() {
    this.currentPage = 1;
    this.pages = this.transfers.length / 5 > 1 ? (this.transfers.length / 5).toFixed(0) : 1;
    this.nextText = this.pages === 1 ? '' : 'Próximo'; 
    this.transfers.forEach(item => {
        item.valor = typeof item.valor === 'string' ? item.valor : this.apiProvider.moneyFormat(item.valor.toFixed(2));
      })
    this.transferPage = this.paginateTransferList(this.elementsPage, this.currentPage);
    this.loading.dismiss();
  }

  toMenu() {
    this.navCtrl.push(MenuPage);
  }

  toFilter() {
    this.navCtrl.push(TransferFilterPage);
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
