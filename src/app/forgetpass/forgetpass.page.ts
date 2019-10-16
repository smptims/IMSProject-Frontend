import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { CommonService } from '../services/common/common.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.page.html',
  styleUrls: ['./forgetpass.page.scss'],
})
export class ForgetpassPage implements OnInit {

  public mobileNumberForm: FormGroup;
  public forgetPasswordForm: FormGroup;
  public otpStatus: boolean = false;
  public randomNumber: number = 0;

  constructor(private database: DatabaseService, private formBuilder: FormBuilder, private router: Router, private commonService: CommonService) {
    this.mobileNumberForm = this.formBuilder.group({
      mobile: [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])]
    })
    this.forgetPasswordForm = this.formBuilder.group({
      otp: [null, Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4)])],
      adminid: [null, Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  sendOTP(mobileNumberFormValue) {
    this.otpStatus = true;
    this.randomNumber = Math.floor(1000 + Math.random() * 9000);
    console.log(this.randomNumber);
    // let mobileNumber = mobileNumberFormValue.mobile;
    // this.database.generateOTP(mobileNumber).then((generateOTPResp: any) => {
    //   console.log('my response:::::::\n', generateOTPResp)
    //   if (!generateOTPResp.Success) {
    //     this.commonService.presentToast(generateOTPResp.ErrorMessage);
    //   } else {
    //     this.commonService.presentToast(generateOTPResp.ErrorMessage);
    //     this.router.navigate(['/admin-dashboard'])
    //   }
    // }, err => {
    //   this.commonService.presentToast(" Error while calling API");
    // });
  }

  confirmOTP(forgetPasswordFormValue) {
    if (forgetPasswordFormValue.otp == this.randomNumber) {
      console.log("Otp mached");
      this.database.isUSerPresent(forgetPasswordFormValue.adminid).then((userResp: Array<any>) => {
        if (userResp == [] || userResp.length === 0) {
          this.commonService.presentToast('User not find')
        } else if (userResp[0].au_seq_no == forgetPasswordFormValue.adminid) {
          this.commonService.presentToast("OTP and User are valid successfully");
          const navigationExtras: NavigationExtras = {
            state: userResp[0]
          };
          this.router.navigate(["/resetpassword"], navigationExtras)
        } else {
          this.commonService.presentToast("Facing some server issues")
        }
      })
    } else {
      this.commonService.presentToast('Wrong OTP')
    }
  }
  backToLoginpage() {
    this.router.navigate(['/smptims-home']);
  }
}
