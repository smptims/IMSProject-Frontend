import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database/database.service';
import { CommonService } from '../../services/common/common.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.page.html',
  styleUrls: ['./customer-login.page.scss'],
})
export class CustomerLoginPage implements OnInit {

  public customercredentails: FormGroup;
  
  constructor(private database: DatabaseService, 
			  private formBuilder: FormBuilder, 
			  private router: Router, 
			  private commonService: CommonService) { 
			  			  
	  this.customercredentails = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
		})
	}

  ngOnInit() {
  }
	
	
  submit(formValue) {
    this.database.customerIsValidUser(formValue).subscribe((customerloginResp: any) => {
      console.log('my cust response:::::::\n', customerloginResp );
      if (!customerloginResp.Success) {
        this.commonService.presentToast(customerloginResp.ErrorMessage);
      } else {
        this.commonService.presentToast(customerloginResp.ErrorMessage);
        console.log('my resp:::::::\n', customerloginResp + formValue)
        this.router.navigate(['/customer-dashboard'])
      }
    }, err => {
      this.commonService.presentToast(" Error while calling API");
    });
  }
  
  navToForgetPassword() {
    this.router.navigate(['/customer-forgetpass'])
  }

  createCustomerRegDetails() {
    this.router.navigate(['/customer-reg'])
  }
  
}