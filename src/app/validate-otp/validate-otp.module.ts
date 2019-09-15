import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ValidateOtpPage } from './validate-otp.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateOtpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ValidateOtpPage]
})
export class ValidateOtpPageModule {}
