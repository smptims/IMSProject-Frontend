import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerSendMailPage } from './customer-send-mail.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerSendMailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerSendMailPage]
})
export class CustomerSendMailPageModule {}
