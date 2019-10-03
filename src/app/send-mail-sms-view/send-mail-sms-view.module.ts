import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// import { IonicModule } from '@ionic/angular';

import { SendMailSmsViewPage } from './send-mail-sms-view.page';

const routes: Routes = [
  {
    path: '',
    component: SendMailSmsViewPage
  }
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
   // IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SendMailSmsViewPage]
})
export class SendMailSmsViewPageModule {}
