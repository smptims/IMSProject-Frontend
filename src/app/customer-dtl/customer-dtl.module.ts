import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerDtlPage } from './customer-dtl.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerDtlPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes) 
  ],
  declarations: [CustomerDtlPage]
})
export class CustomerDtlPageModule {}
