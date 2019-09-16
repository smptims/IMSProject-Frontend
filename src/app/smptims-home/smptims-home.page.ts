import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-smptims-home',
  templateUrl: './smptims-home.page.html',
  styleUrls: ['./smptims-home.page.scss'],
})
export class SmptimsHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  customerDashboard(){
    this.router.navigate(['../customer-login'])
  }

  serviceCenterDashboard() {
    this.router.navigate(['/servicecenter-login'])
  }
   adminDashboard() {
     this.router.navigate(['/login']);
  }

}
