import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerEditPage } from './customer-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerEditPage
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
  declarations: [CustomerEditPage]
})
export class CustomerEditPageModule {
  
}
