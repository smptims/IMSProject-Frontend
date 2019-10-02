import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicecenterSendSmsPage } from './servicecenter-send-sms.page';

const routes: Routes = [
  {
    path: '',
    component: ServicecenterSendSmsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServicecenterSendSmsPage]
})
export class ServicecenterSendSmsPageModule {}
