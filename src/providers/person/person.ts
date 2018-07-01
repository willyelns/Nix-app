import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PersonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonProvider {

  data: any;

  constructor(public http: HttpClient) {
  }

  load() {
    if(this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=1')
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, err => {
        console.error('api error',err);
      });
    });
  }

}
