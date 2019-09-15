import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-servicecenter-dashboard',
  templateUrl: './servicecenter-dashboard.page.html',
  styleUrls: ['./servicecenter-dashboard.page.scss'],
})
export class ServicecenterDashboardPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }



  
// Service Center users details  
navToServiceCenterDashboardFooter() {
  this.router.navigate(['/servicecenter-dashboard'])
  }
  
  // Device details  
  navToInstallDeviceDetails() {
    this.router.navigate(['/servicecenter-device-details'])
  }
  
  // Daily Report details  
  navToServiceCenterDailyReports() {
    this.router.navigate(['/servicecenter-daily-reports'])
  }
  
  // Send Mail
  navToSendMailFooter() {
    this.router.navigate(['/send-mail'])
  }
  
  // Refer Travels
  navToReferTravelFooter() {
    this.router.navigate(['/refertravel'])
  }
  
  // Service Center Profile
  navToServiceCenterProfileFooter() {
    this.router.navigate(['/servicecenter-profile'])
  }


}
