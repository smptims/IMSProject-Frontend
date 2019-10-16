import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../services/database/database.service";
import { CommonService } from '../services/common/common.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { adminProfileType } from '../models/model';


@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.page.html',
  styleUrls: ['./admin-profile.page.scss'],
})
export class AdminProfilePage implements OnInit {

  public adminProfileDtls: Array<adminProfileType> = [];
  public inputToSearch: number = 2;
  constructor(private databse: DatabaseService,
    private router: Router,
    private commonService: CommonService,
    public modalController: ModalController) { }


  ngOnInit() {
    this.getAdminProfileDetails(this.inputToSearch);
  }

  getAdminProfileDetails(inputToSearch: any) {
    console.log(" input = " + inputToSearch);

    this.databse.getAdminProfileDetails(inputToSearch).then((adminProfileDetailsResp: any) => {
      this.adminProfileDtls = adminProfileDetailsResp;

      // Remove 
      this.adminProfileDtls.forEach((item: adminProfileType) => {
        item.status = item.status === 'ACTIVE' ? 'ACTIVE' : 'INACTIVE';
      })
    }, adminProfileDetailsError => {
      console.error('adminProfileDetailsError:::::::::::::::::::\n', adminProfileDetailsError)
    });
  }
}
