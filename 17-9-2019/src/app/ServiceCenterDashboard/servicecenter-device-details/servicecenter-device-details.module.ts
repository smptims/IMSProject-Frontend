import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicecenterDeviceDetailsPage } from './servicecenter-device-details.page';

const routes: Routes = [
  {
    path: '',
    component: ServicecenterDeviceDetailsPage
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
  declarations: [ServicecenterDeviceDetailsPage]
})
export class ServicecenterDeviceDetailsPageModule {}
