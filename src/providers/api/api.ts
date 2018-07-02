import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  data: any;

   private apiLink : string;

  constructor(public http: HttpClient) {
    this.apiLink = 'https://nix-bank-qa.cloudint.nexxera.com/v1/transactions';
  }
  getFilteredTransfers(filter) {

    return new Promise(resolve => {

      let type = filter.type ? 'tipo=' + filter.type : '';
      let payer = filter.payer ? '&nome_pagador=' + filter.payer : '';
      let recipient = filter.recipient ? '&nome_beneficiario=' + filter.recipient : '';
      let status = filter.status ? '&status=' + filter.status : '';

      this.http.get(this.apiLink + '?' + type + payer + recipient + status)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  load() {
    if(this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this.apiLink)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    });
  }

}
