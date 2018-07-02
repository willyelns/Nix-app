import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  person = {
    'name' : {
      'first': '',
      'last': '',
    },
    'picture': '',
    'ag': '12340',
    'acc': '123456-7'   
  }

  loading = this.loadingCtrl.create({
    content: 'Por favor, espere...'
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, private personProvider : PersonProvider, private loadingCtrl : LoadingController) {
    this.loading.present();
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
    this.loading.dismiss();
  }

  login(){
    this.navCtrl.setRoot(HomePage);
  }

}
