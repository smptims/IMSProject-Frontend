import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DatabaseService } from '../../services/database/database.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.page.html',
  styleUrls: ['./customer-dashboard.page.scss'],
})
export class CustomerDashboardPage implements OnInit {

  public deviceDtlsLength: number = 0
  constructor(public router: Router, private menuCtrl: MenuController, private databaseService: DatabaseService) { }

  ngOnInit() {
    this.menuCtrl.enable(true)
    this.databaseService.getDeviceDetails().subscribe((deviceDtlResp: any) => {
      this.deviceDtlsLength = deviceDtlResp.data.length
    }, deviceDtlErr => {
      console.error('Error over deviceDtlErr::::::::::::::::\n', deviceDtlErr)
    })
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
