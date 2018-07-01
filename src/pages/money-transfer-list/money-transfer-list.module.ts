import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoneyTransferListPage } from './money-transfer-list';

@NgModule({
  declarations: [
    MoneyTransferListPage,
  ],
  imports: [
    IonicPageModule.forChild(MoneyTransferListPage),
  ],
})
export class MoneyTransferListPageModule {}
