import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicecenterSendMailPage } from './servicecenter-send-mail.page';

const routes: Routes = [
  {
    path: '',
    component: ServicecenterSendMailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServicecenterSendMailPage]
})
export class ServicecenterSendMailPageModule {}
