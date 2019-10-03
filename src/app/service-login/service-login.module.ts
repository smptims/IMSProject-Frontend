import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// import { IonicModule } from '@ionic/angular';

import { ServiceLoginPage } from './service-login.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceLoginPage
  }
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   //  IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceLoginPage]
})
export class ServiceLoginPageModule {}
