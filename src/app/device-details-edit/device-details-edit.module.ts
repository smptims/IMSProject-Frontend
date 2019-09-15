import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeviceDetailsEditPage } from './device-details-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceDetailsEditPage
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
  declarations: [DeviceDetailsEditPage]
})
export class DeviceDetailsEditPageModule {}
