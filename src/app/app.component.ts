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
    this.events.subscribe("sidemenu", userType => {
      if (userType === "customer") {
        localStorage.setItem('userType', userType)
        this.appPages = sideMenu.filter((item: any) => {
          return (
            item.title === "CustomerHome" ||
            item.title === "Profile Details" ||
            item.title === "Mail" ||
            item.title === "Reports" ||
            item.title === "Help" ||
            item.title === "Logout"
          );
        });
        console.log("1.0 Customer sidemenu::::::::::::::\n", this.appPages);
      } else if (userType === "service") {
        localStorage.setItem('userType', userType)
        this.appPages = sideMenu.filter((item: any) => {
          return (
            item.title === "ServiceCenterHome" ||
            item.title === "Profile Details" ||
            item.title === "Mail" ||
            item.title === "Notifications" ||
            item.title === "Reports" ||
            item.title === "Help" ||
            item.title === "Logout"
          );
        });
        console.log("2.0 SC sidemenu::::::::::::::\n", this.appPages);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.appPages = sideMenu;
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      const userType = localStorage.getItem('userType')
      if (userType !== undefined && userType !== null) {
        this.events.publish('sidemenu', userType)
      }
    });
  }
}