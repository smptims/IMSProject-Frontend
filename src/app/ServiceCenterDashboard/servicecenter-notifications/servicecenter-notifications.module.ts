import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicecenterNotificationsPage } from './servicecenter-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: ServicecenterNotificationsPage
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
  declarations: [ServicecenterNotificationsPage]
})
export class ServicecenterNotificationsPageModule {}
