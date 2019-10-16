import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { CommonService } from '../services/common/common.service';
import { Router } from '@angular/router';
import { customerUsersType } from '../models/model';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.page.html',
  styleUrls: ['./customer-reg.page.scss'],
})
export class CustomerRegPage implements OnInit {
  public customerRegDetails: Array<any> = [];
  public customerRegForm: FormGroup;
  constructor(private database: DatabaseService, private formBuilder: FormBuilder, private router: Router, private commonService: CommonService) {
    this.customerRegForm = this.formBuilder.group({
      customer_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone_no: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  createCustomerRegDetails(body: customerUsersType) {
    this.database.createCustomerRegDetails(body).then((createCustomerRegDetailsResp: any) => {
      console.log('createCustomerRegDetailsResp:::::::::::::\n', createCustomerRegDetailsResp)
      if (createCustomerRegDetailsResp.Success) {
        this.commonService.presentToast('Successfully Created Customer Details')
        this.customerRegForm.reset();
        this.router.navigate(['admin-dashboard']);
      } else {
        this.commonService.presentToast('POST: Facing some server issue')
      }
    }, createCustomerRegDetailsError => {
      console.error('createCustomerRegDetailsError:::::::::::::::::::\n', createCustomerRegDetailsError)
      this.commonService.presentToast('POST: Facing some server issue')
    });
  }
  backToCustomerRegistrationDetails() {
    this.router.navigate(['/customer-dtl']);
  }
}
