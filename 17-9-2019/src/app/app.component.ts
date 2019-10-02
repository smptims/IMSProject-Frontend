import { Component } from "@angular/core";
import { Platform, Events } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { sideMenu } from "./constants/constants";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public appPages: Array<any> = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private events: Events
   ) {
    this.initializeApp();
    this.events.subscribe("sideMenu", userType => {
      if (userType === "customer") {
        this.appPages = sideMenu.filter((item: any) => {
          return (
            item.title === "Profile Details" ||
            item.title === "Mail" ||
            item.title === "Reports" ||
            item.title === "Help" ||
            item.title === "Logout"
          );
        });
        console.log("sideMenu::::::::::::::\n", this.appPages);
      } else if (userType === "service") {
        this.appPages = sideMenu.filter((item: any) => {
          return (
            item.title === "Profile Details" ||
            item.title === "Mail" ||
            item.title === "Notifications" ||
            item.title === "Reports" ||
            item.title === "Help" ||
            item.title === "Logout"
          );
        });
        console.log("sideMenu::::::::::::::\n", this.appPages);
      } else {
        this.appPages = sideMenu;
        console.log("sideMenu::::::::::::::\n", this.appPages);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.appPages = sideMenu;
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}