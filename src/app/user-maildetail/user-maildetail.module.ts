import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserMaildetailPage } from './user-maildetail.page';

const routes: Routes = [
  {
    path: '',
    component: UserMaildetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserMaildetailPage]
})
export class UserMaildetailPageModule {}
