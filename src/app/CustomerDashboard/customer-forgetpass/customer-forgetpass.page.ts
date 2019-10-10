import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DatabaseService } from "../../services/database/database.service";
import { CommonService } from "../../services/common/common.service";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-customer-forgetpass",
  templateUrl: "./customer-forgetpass.page.html",
  styleUrls: ["./customer-forgetpass.page.scss"]
})
export class CustomerForgetpassPage implements OnInit {
  public customerMobileNumberForm: FormGroup;
  public customerForgetPasswordForm: FormGroup;
  public otpStatus: boolean = false;
  public randomNumber: number = 0;

  constructor(
    private databaseService: DatabaseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private commonService: CommonService
  ) {
    this.customerMobileNumberForm = this.formBuilder.group({
      customermobile: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10)
        ])
      ]
    });
    this.customerForgetPasswordForm = this.formBuilder.group({
      otp: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(4)
        ])
      ],
      customerno: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {}

  sendOTP(customerMobileNumberFormValue) {
    this.otpStatus = true;
    this.randomNumber = Math.floor(1000 + Math.random() * 9000);
    console.log(this.randomNumber);
    const message =
      "Thanks for using SMPT. Your verification code is " +
      this.randomNumber +
      ".";
    const mobileNumber = customerMobileNumberFormValue.customermobile;
    // this.database.generateOTP(mobileNumber).subscribe((generateOTPResp: any) => {
    //   console.log('my response:::::::\n', generateOTPResp)
    //   if (!generateOTPResp.Success) {
    //     this.commonService.presentToast(generateOTPResp.ErrorMessage);
    //   } else {
    //     this.commonService.presentToast(generateOTPResp.ErrorMessage);
    //     this.router.navigate(['/customer-dashboard'])
    //   }
    // }, err => {
    //   this.commonService.presentToast(" Error while calling API");
    // });
    this.databaseService.sendSMS(mobileNumber, message).subscribe(
      (smsResp: any) => {
        if (smsResp.Success) {
          this.commonService.presentToast("SMS Sent Successfully");
        }
      },
      smsErr => {
        console.error("smsErr::::::::::::\n", smsErr);
      }
    );
  }

  confirmOTP(customerForgetPasswordFormValue) {
    if (customerForgetPasswordFormValue.otp == this.randomNumber) {
      console.log("Otp mached");
      this.databaseService
        .isCustomerUSerPresent(customerForgetPasswordFormValue.customerno)
        .subscribe((customerUserResp: Array<any>) => {
          console.log("Otp mached successfully", customerUserResp);
          if (customerUserResp == [] || customerUserResp.length === 0) {
            this.commonService.presentToast("User not found");
          } else if (
            customerUserResp[0].customer_no ==
            customerForgetPasswordFormValue.customerno
          ) {
            this.commonService.presentToast(
              "OTP and User are valid successfully"
            );
            const navigationExtras: NavigationExtras = {
              state: customerUserResp[0]
            };
            this.router.navigate(["customer-resetpassword"], navigationExtras);
          } else {
            this.commonService.presentToast("Facing some server issues");
          }
        });
    } else {
      this.commonService.presentToast("Wrong OTP");
    }
  }

  backToCustomerLoginpage() {
    this.router.navigate(["/customer-login"]);
  }
}
