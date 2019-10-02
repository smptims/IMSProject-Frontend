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

  public serviceCenterMobileNumberForm: FormGroup;
  public serviceCenterForgetPasswordForm: FormGroup;
  public otpStatus: boolean = false;
  public randomNumber: number = 0;

  constructor(private database: DatabaseService, 
              private formBuilder: FormBuilder, 
              private router: Router, 
              private commonService: CommonService
              ) { 
                this.serviceCenterMobileNumberForm = this.formBuilder.group({
                  servicemobile: [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])]
                })
                this.serviceCenterForgetPasswordForm = this.formBuilder.group({
                  otp: [null, Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4)])],
                  serviceempno: [null, Validators.compose([Validators.required])]
                })
              }
  ngOnInit() {
  }

  sendOTP(serviceCenterMobileNumberFormValue) {
    this.otpStatus = true;
    this.randomNumber = Math.floor(1000 + Math.random() * 9000);
    console.log(this.randomNumber);
    // let mobileNumber = serviceCenterMobileNumberFormValue.servicemobile;
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

  confirmOTP(serviceCenterForgetPasswordFormValue) {
    if (serviceCenterForgetPasswordFormValue.otp == this.randomNumber) {
      console.log("Otp mached");
      this.database.isServiceCenterUSerPresent(serviceCenterForgetPasswordFormValue.serviceempno).subscribe((serviceCenterUserResp: Array<any>) => {
        console.log("Otp mached successfully", serviceCenterUserResp);
        if (serviceCenterUserResp == [] || serviceCenterUserResp.length === 0) {
          this.commonService.presentToast("User not found")
        } else if (serviceCenterUserResp[0].sc_emp_no == serviceCenterForgetPasswordFormValue.serviceempno) {
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

  backToServiceCenterLoginpage() {
    this.router.navigate(['/servicecenter-login']);
  }

}
