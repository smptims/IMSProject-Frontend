import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../services/database/database.service";
import { CommonService } from '../../services/common/common.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router'; 
import { customerProfileType } from '../../models/model';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.page.html',
  styleUrls: ['./customer-profile.page.scss'],
})
export class CustomerProfilePage implements OnInit {

  

  public customerProfileDtls: Array<customerProfileType> = [];
  public inputToSearch: number = 1;
  constructor(private databse: DatabaseService,
              private router: Router, 
              private commonService: CommonService, 
              public modalController: ModalController) { }


  ngOnInit() {
    this.getCustmomerProfileDetails(this.inputToSearch);
  }

  getCustmomerProfileDetails(inputToSearch: any) {
    console.log(" input = " + inputToSearch ); 

    this.databse.getCustmomerProfileDetails(inputToSearch).subscribe((customerProfileDetailsResp: any) => {
      this.customerProfileDtls = customerProfileDetailsResp;  

      // Remove 
      this.customerProfileDtls.forEach((item: customerProfileType) => {
         item.status = item.status === 'ACTIVE' ? 'ACTIVE' : 'INACTIVE';
      })
    }, customerProfileDetailsError => {
      console.error('customerProfileDetailsError:::::::::::::::::::\n', customerProfileDetailsError)
    });
  }


}
