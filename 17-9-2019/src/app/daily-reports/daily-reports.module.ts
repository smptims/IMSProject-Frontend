import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DailyReportsPage } from './daily-reports.page';
//import { File } from '@ionic-native/file/ngx';
//import { FileOpener } from '@ionic-native/file-opener/ngx';

const routes: Routes = [
  {
    path: '',
    component: DailyReportsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes) 
  ],
  declarations: [DailyReportsPage]
})
export class DailyReportsPageModule {}
