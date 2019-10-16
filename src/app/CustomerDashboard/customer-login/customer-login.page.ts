import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { DatabaseService } from "../../services/database/database.service";
import { CommonService } from "../../services/common/common.service";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-customer-login",
  templateUrl: "./customer-login.page.html",
  styleUrls: ["./customer-login.page.scss"]
})
export class CustomerLoginPage implements OnInit {
  public customercredentails: FormGroup;

  constructor(
    private database: DatabaseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private menuCtrl: MenuController
  ) {
    this.customercredentails = this.formBuilder.group({
      username: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  ngOnInit() { }

  submit(formValue) {
    this.database.customerIsValidUser(formValue).then(
      (customerloginResp: any) => {
        console.log("my cust response:::::::\n", customerloginResp);
        if (!customerloginResp.Success) {
          this.commonService.presentToast(customerloginResp.ErrorMessage);
        } else {
          this.commonService.presentToast(customerloginResp.Message);
          console.log("my resp:::::::\n", customerloginResp, "\n", formValue);
          this.menuCtrl.enable(true);
          localStorage.setItem("user", customerloginResp.user);
          localStorage.setItem(
            "x-access-token",
            customerloginResp.x_access_token
          );
          this.router.navigate(["/customer-dashboard"]);
        }
      },
      customerloginErr => {
        console.log("customerloginErr:::::::::::\n", customerloginErr);
        this.commonService.presentToast(" Error while calling API");
        alert(JSON.stringify(customerloginErr));
      }
    );
  }

  navToForgetPassword() {
    this.router.navigate(["/customer-forgetpass"]);
  }

  createCustomerRegDetails() {
    this.router.navigate(["/customer-reg"]);
  }
}
