import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { CommonService } from '../services/common/common.service';
import { Router } from '@angular/router';
import { customerUsersType } from '../models/model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.page.html',
  styleUrls: ['./customer-edit.page.scss'],
})
export class CustomerEditPage implements OnInit {

  public customerUserDetails: Array<any> = [];
  public customerUserForm: FormGroup;

  constructor(
    private database: DatabaseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private commonService: CommonService
  ) {
    this.customerUserForm = this.formBuilder.group({
      cust_seq_no: ['', Validators.compose([Validators.required])],
      customer_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone_no: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([])],
      pincode_zip_cd: ['', Validators.compose([])],
      location: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([])],
      status: ['', Validators.compose([Validators.required])]
    });
    const navigation = this.router.getCurrentNavigation();
    this.customerUserForm.patchValue(navigation.extras.state);
  }

  ngOnInit() {
  }

  editCustomerUserSubmit(body: customerUsersType) {
    this.database.updateCustomerUsers(body).then((updateCustomerUsersResp: any) => {
      console.log('updateCustomerUsersResp:::::::::::::\n', updateCustomerUsersResp)
      if (updateCustomerUsersResp.Success) {
        this.commonService.presentToast('Successfully Updated Customer Users Details')
        this.customerUserForm.reset();
        this.router.navigate(['/customer-dtl']);
      } else {
        this.commonService.presentToast('POST: Facing some server issue')
      }
    }, updateCustomerError => {
      console.error('updateDeviceDetailError:::::::::::::::::::\n', updateCustomerError)
      this.commonService.presentToast('POST: Facing some server issue')
    });
  }
  backToCustomerRegistrationDetails() {
    this.router.navigate(['/customer-dtl']);
  }

  backToCustomerEditDetails() {
    this.router.navigate(['/customer-dtl']);
  }
}

