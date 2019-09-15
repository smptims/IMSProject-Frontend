import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.page.html',
  styleUrls: ['./customer-dashboard.page.scss'],
})
export class CustomerDashboardPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

// Customer users details  
navToCustomerDashboardFooter() {
this.router.navigate(['/customer-dashboard'])
}

// Device details  
navToInstallDeviceDetails() {
  this.router.navigate(['/customer-device-details'])
}

// Daily Report details  
navToCustomerDailyReports() {
  this.router.navigate(['/customer-daily-reports'])
}

// Send Mail
navToSendMailFooter() {
  this.router.navigate(['/send-mail'])
}

// Refer Travels
navToReferTravelFooter() {
  this.router.navigate(['/refertravel'])
}

// Customer Profile
navToCustomerProfileFooter() {
  this.router.navigate(['/customer-profile'])
}

}
