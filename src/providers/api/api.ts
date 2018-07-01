import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

   private apiLink : string;

  constructor(public http: HttpClient) {
    this.apiLink = 'https://nix-bank-qa.cloudint.nexxera.com/v1/transactions';
  }
  getTransfers() {
    return this.http.get(this.apiLink);
  }
  getFilteredTransfers(filter) {

    return this.http.get(this.apiLink + '?tipo=' + filter.type + '&nome_pagador=' + filter.payer + '&nome_beneficiario=' + filter.recipient + '&status=' + filter.status);
  }

}
