import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DatabaseService } from "../../services/database/database.service";
import { CommonService } from "../../services/common/common.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-customer-resetpassword",
  templateUrl: "./customer-resetpassword.page.html",
  styleUrls: ["./customer-resetpassword.page.scss"]
})
export class CustomerResetpasswordPage implements OnInit {
  public restCustomerPasswordForm: FormGroup;
  public user: any = {};

  constructor(
    private database: DatabaseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private commonService: CommonService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation.extras.state;
    this.restCustomerPasswordForm = this.formBuilder.group({
      password: [null, Validators.compose([Validators.required])],
      confirmpassword: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() { }

  saveCustomerPassword(restCustomerPasswordFormvalue) {
    if (
      restCustomerPasswordFormvalue.password ==
      restCustomerPasswordFormvalue.confirmpassword
    ) {
      this.user.password = restCustomerPasswordFormvalue.password;
      this.database.updateCustomerUser(this.user).then(
        (updateUserResp: any) => {
          console.log("updateUserResp:::::::::::::::::::::\n", updateUserResp);
          if (
            updateUserResp.Message == "updated details" &&
            updateUserResp.Success === true
          ) {
            this.restCustomerPasswordForm.reset();
            console.log("password updated successfully");
            this.router.navigate(["customer-login"]);
          }
        },
        updateUserErr => {
          console.error("updateUserErr:::::::::::::::::\n", updateUserErr);
        }
      );
    } else {
      this.commonService.presentToast("Password Does not match");
    }
  }
}
