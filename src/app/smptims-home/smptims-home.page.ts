import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Events } from "@ionic/angular";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-smptims-home",
  templateUrl: "./smptims-home.page.html",
  styleUrls: ["./smptims-home.page.scss"]
})
export class SmptimsHomePage implements OnInit {
  constructor(
    private router: Router,
    private events: Events,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  customerDashboard() {
    this.events.publish("sidemenu", "customer");
    this.router.navigate(["/customer-login"]);
  }

  serviceCenterDashboard() {
    this.events.publish("sidemenu", "service");
    this.router.navigate(["/servicecenter-login"]);
  }

  adminDashboard() {
    this.events.publish("sidemenu", "admin");
    this.router.navigate(["/login"]);
  }
}