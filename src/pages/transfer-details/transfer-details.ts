import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transfer-details',
  templateUrl: 'transfer-details.html',
})
export class TransferDetailsPage {

  transferDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.transferDetails = this.navParams.get('details');
    console.log('details', this.transferDetails);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferDetailsPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
