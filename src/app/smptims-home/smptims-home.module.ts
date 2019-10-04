import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { SmptimsHomePage } from "./smptims-home.page";

const routes: Routes = [
  {
    path: "",
    component: SmptimsHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SmptimsHomePage]
})
export class SmptimsHomePageModule { }
