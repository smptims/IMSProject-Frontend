import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../../services/database/database.service";
import { CommonService } from "../../services/common/common.service";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { customerProfileType } from "../../models/model";

@Component({
  selector: "app-customer-profile",
  templateUrl: "./customer-profile.page.html",
  styleUrls: ["./customer-profile.page.scss"]
})
export class CustomerProfilePage {
  public customerProfileDtls: Array<customerProfileType> = [];
  public userId: string = "0";
  constructor(
    private databse: DatabaseService,
    private router: Router,
    private commonService: CommonService,
    public modalController: ModalController
  ) {
    this.userId = localStorage.getItem("user");
    console.log(this.userId);
    this.getCustmomerProfileDetails();
  }

  getCustmomerProfileDetails() {
    this.databse.getCustmomerProfileDetails(this.userId).subscribe(
      (customerProfileDetailsResp: any) => {
        if (
          customerProfileDetailsResp[0] !== undefined &&
          customerProfileDetailsResp[0] !== null &&
          customerProfileDetailsResp[0] !== []
        ) {
          this.customerProfileDtls = customerProfileDetailsResp;
        }
      },
      customerProfileDetailsError => {
        console.error(
          "customerProfileDetailsError:::::::::::::::::::\n",
          customerProfileDetailsError
        );
      }
    );
  }
}
