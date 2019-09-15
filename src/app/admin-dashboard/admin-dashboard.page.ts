import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  constructor(public router: Router) {

   }

  ngOnInit() {
  }


// Customer users details  
navToCustomerUsers() {
  this.router.navigate(['/customer-dtl'])
}

// Service Center users details 
navToServiceCenterDetails() {
  this.router.navigate(['/service-dtl'])
}

// Device details  
navToInstallDeviceDetails() {
  this.router.navigate(['/device-details'])
}

// Daily Report details  
navToDailyReports() {
  this.router.navigate(['/daily-reports'])
}

// Send Mail
navToSendMailFooter() {
  this.router.navigate(['/send-mail'])
}

// Admin Profile
navToAdminProfileFooter() {
  this.router.navigate(['/admin-profile'])
}

// Admin Dashboard
navToAdminDashboardFooter() {
  this.router.navigate(['/admin-dashboard'])
}

// Refer Travels
navToReferTravelFooter() {
  this.router.navigate(['/refertravel'])
}

}
