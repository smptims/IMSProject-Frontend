import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerRefertravelPage } from './customer-refertravel.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerRefertravelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerRefertravelPage]
})
export class CustomerRefertravelPageModule {}
