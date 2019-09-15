import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RefertravelViewPage } from './refertravel-view.page';

const routes: Routes = [
  {
    path: '',
    component: RefertravelViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RefertravelViewPage]
})
export class RefertravelViewPageModule {}
