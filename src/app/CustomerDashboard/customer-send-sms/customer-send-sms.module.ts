import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { CustomerSendSmsPage } from "./customer-send-sms.page";

const routes: Routes = [
  {
    path: "",
    component: CustomerSendSmsPage
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
  declarations: [CustomerSendSmsPage]
})
export class CustomerSendSmsPageModule {}
