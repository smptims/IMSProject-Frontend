import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerDailyReportsPage } from './customer-daily-reports.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerDailyReportsPage
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
  declarations: [CustomerDailyReportsPage]
})
export class CustomerDailyReportsPageModule {}
