import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database/database.service';
import { CommonService } from '../../services/common/common.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-servicecenter-forgetpass',
  templateUrl: './servicecenter-forgetpass.page.html',
  styleUrls: ['./servicecenter-forgetpass.page.scss'],
})
export class ServicecenterForgetpassPage implements OnInit {

  public servicecenterMobileNumberForm: FormGroup;
  public servicecenterForgetPasswordForm: FormGroup;
  public otpStatus: boolean = false;
  public randomNumber: number = 0;

  constructor(private database: DatabaseService, 
              private formBuilder: FormBuilder, 
              private router: Router, 
              private commonService: CommonService
              ) { 
                this.servicecenterMobileNumberForm = this.formBuilder.group({
                  servicecentermobile: [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])]
                })
                this.servicecenterForgetPasswordForm = this.formBuilder.group({
                  otp: [null, Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4)])],
                  servicecenterno: [null, Validators.compose([Validators.required])]
                })
              }
  ngOnInit() {
  }

  sendOTP(serviceCenterMobileNumberFormValue) {
    this.otpStatus = true;
    this.randomNumber = Math.floor(1000 + Math.random() * 9000);
    console.log(this.randomNumber);
    // let mobileNumber = serviceCenterMobileNumberFormValue.servicecentermobile;
    // this.database.generateOTP(mobileNumber).subscribe((generateOTPResp: any) => {
    //   console.log('my response:::::::\n', generateOTPResp)
    //   if (!generateOTPResp.Success) {
    //     this.commonService.presentToast(generateOTPResp.ErrorMessage);
    //   } else {
    //     this.commonService.presentToast(generateOTPResp.ErrorMessage);
    //     this.router.navigate(['/servicecenter-dashboard'])
    //   }
    // }, err => {
    //   this.commonService.presentToast(" Error while calling API");
    // });
  }

  confirmOTP(servicecenterForgetPasswordFormValue) {
    if (servicecenterForgetPasswordFormValue.otp == this.randomNumber) {
      console.log("Otp mached");
      this.database.isServiceCenterUSerPresent(servicecenterForgetPasswordFormValue.servicecenterno).subscribe((serviceCenterUserResp: Array<any>) => {
        console.log("Otp mached successfully", serviceCenterUserResp);
        if (serviceCenterUserResp == [] || serviceCenterUserResp.length === 0) {
          this.commonService.presentToast("User not found")
        } else if (serviceCenterUserResp[0].customer_no == servicecenterForgetPasswordFormValue.servicecenterno) {
          this.commonService.presentToast("OTP and User are valid successfully");
          const navigationExtras: NavigationExtras = {
            state: serviceCenterUserResp[0]
          };
          this.router.navigate(["servicecenter-resetpassword"], navigationExtras)
        } else {
          this.commonService.presentToast("Facing some server issues")
        }
      })
    } else {
      this.commonService.presentToast('Wrong OTP')
    }
  }

  backToserviceCenterLoginpage() {
    this.router.navigate(['/servicecenter-login']);
  }

}
