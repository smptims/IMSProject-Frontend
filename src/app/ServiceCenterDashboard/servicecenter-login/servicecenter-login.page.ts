import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database/database.service';
import { CommonService } from '../../services/common/common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-servicecenter-login',
  templateUrl: './servicecenter-login.page.html',
  styleUrls: ['./servicecenter-login.page.scss'],
})
export class ServicecenterLoginPage implements OnInit {

  public servicecentercredentails: FormGroup;
  
  constructor(private database: DatabaseService, 
			  private formBuilder: FormBuilder, 
			  private router: Router, 
			  private commonService: CommonService) { 
			  			  
	  this.servicecentercredentails = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
		})
	}

  ngOnInit() {
  }

  submit(formValue) {
    this.database.serviceCenterIsValidUser(formValue).subscribe((serviceCenterloginResp: any) => {
      console.log('my cust response:::::::\n', serviceCenterloginResp );
      if (!serviceCenterloginResp.Success) {
        this.commonService.presentToast(serviceCenterloginResp.ErrorMessage);
      } else {
        this.commonService.presentToast(serviceCenterloginResp.ErrorMessage);
        console.log('my resp:::::::\n', serviceCenterloginResp + formValue)
        this.router.navigate(['/servicecenter-dashboard'])
      }
    }, err => {
      this.commonService.presentToast(" Error while calling API");
    });
  }
  
  navToservicecenterForgetPassword() {
    this.router.navigate(['/servicecenter-forgetpass'])
  }

  createServiceCenterRegDetails() {
    this.router.navigate(['/servicecenter-reg'])
  }

}
