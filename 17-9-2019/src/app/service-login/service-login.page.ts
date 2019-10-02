import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { CommonService } from '../services/common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-login',
  templateUrl: './service-login.page.html',
  styleUrls: ['./service-login.page.scss'],
})
export class ServiceLoginPage implements OnInit {

  public credentails: FormGroup;

  constructor(private database: DatabaseService, 
              private formBuilder: FormBuilder, 
              private router: Router, 
              private commonService: CommonService) { 
              
      this.credentails = this.formBuilder.group({
        username: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])]
      })
  }

  ngOnInit() {
  }

  submit(formValue) {
    this.database.isValidUser(formValue).subscribe((serviceloginResp: any) => {
      console.log('my response:::::::\n', serviceloginResp + formValue)
      if (!serviceloginResp.Success) {
        this.commonService.presentToast(serviceloginResp.ErrorMessage);
      } else {
        this.commonService.presentToast(serviceloginResp.ErrorMessage);
        this.router.navigate(['/service-dashboard'])
      }
    }, err => {
      this.commonService.presentToast(" Error while calling API");
    });
  }
  
  navToForgetPassword() {
    this.router.navigate(['/forgetpass'])
  }

  createServiceCenterUsersSubmit() {
    this.router.navigate(['/service-reg'])
  }

}
