import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../../services/database/database.service";
import { CommonService } from "../../services/common/common.service";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { serviceCenterProfileType } from "../../models/model";

@Component({
  selector: "app-servicecenter-profile",
  templateUrl: "./servicecenter-profile.page.html",
  styleUrls: ["./servicecenter-profile.page.scss"]
})
export class ServicecenterProfilePage implements OnInit {
  public serviceCenterProfileDtls: Array<serviceCenterProfileType> = [];
  public inputToSearch: number = 125;
  constructor(
    private databse: DatabaseService,
    private router: Router,
    private commonService: CommonService,
    public modalController: ModalController
  ) { }

  ngOnInit() { }

  getServiceCenterProfileDetails(inputToSearch: any) {
    console.log(" input = " + inputToSearch);

    this.databse.getServiceCenterProfileDetails(inputToSearch).then(
      (serviceCenterProfileDetailsResp: any) => {
        this.serviceCenterProfileDtls = serviceCenterProfileDetailsResp;

        // Remove
        this.serviceCenterProfileDtls.forEach(
          (item: serviceCenterProfileType) => {
            item.status = item.status === "ACTIVE" ? "ACTIVE" : "INACTIVE";
          }
        );
      },
      serviceCenterProfileDetailsError => {
        console.error(
          "serviceCenterProfileDetailsError:::::::::::::::::::\n",
          serviceCenterProfileDetailsError
        );
      }
    );
  }
}
