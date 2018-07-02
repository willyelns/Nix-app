import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferFilterPage } from './transfer-filter';

@NgModule({
  declarations: [
    TransferFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferFilterPage),
  ],
})
export class TransferFilterPageModule {}
