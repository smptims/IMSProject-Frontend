import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Events } from "@ionic/angular";
import { MenuController } from "@ionic/angular";
//import { sideMenu } from "../constants/constants"

@Component({
  selector: "app-smptims-home",
  templateUrl: "./smptims-home.page.html",
  styleUrls: ["./smptims-home.page.scss"]
})
export class SmptimsHomePage implements OnInit {
  constructor(
    private router: Router,
    private events: Events,
    //private sidemenu: sideMenu,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  customerDashboard() {
    this.events.publish("sideMenu", "customer");
    this.router.navigate(["/customer-login"]);
  }

  serviceCenterDashboard() {
    this.events.publish("sideMenu", "service");
    this.router.navigate(["/servicecenter-login"]);
  }

  adminDashboard() {
    this.events.publish("sideMenu", "admin");
    this.router.navigate(["/login"]);
  }
}