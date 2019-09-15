import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicecenterRefertravelPage } from './servicecenter-refertravel.page';

const routes: Routes = [
  {
    path: '',
    component: ServicecenterRefertravelPage
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
  declarations: [ServicecenterRefertravelPage]
})
export class ServicecenterRefertravelPageModule {}
