import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { CommonService } from '../services/common/common.service';
import { Router } from '@angular/router';
import { serviceCenterUsersType } from '../models/model';

@Component({
  selector: 'app-service-reg',
  templateUrl: './service-reg.page.html',
  styleUrls: ['./service-reg.page.scss'],
})
export class ServiceRegPage implements OnInit {

  public serviceCenterUsers: Array<any> = [];
  public serviceCenterForm: FormGroup;
  constructor(private database: DatabaseService, 
              private formBuilder: FormBuilder, 
              private router: Router, 
              private commonService: CommonService
              ) {
      this.serviceCenterForm = this.formBuilder.group({
      customer_name: ['', Validators.compose([Validators.required])],
      company_name: ['', Validators.compose([Validators.required])],
      sc_emp_no: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone_no: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  createServiceCenterUsersSubmit(body: serviceCenterUsersType) {
    this.database.createServiceCenterUsers(body).subscribe((createServiceCenterUsersResp: any) => {
      console.log('createServiceCenterUsersResp:::::::::::::\n', createServiceCenterUsersResp)
      if (createServiceCenterUsersResp.Success) {
        this.commonService.presentToast('Successfully Created Service Center User Details')
        this.serviceCenterForm.reset();
        this.router.navigate(['/service-dtl']);
      } else {
        this.commonService.presentToast('POST 1.1 : Facing some server issue')
      }
    }, createServiceCenterUsersError => {
      console.error('createServiceCenterUsersError:::::::::::::::::::\n', createServiceCenterUsersError)
      this.commonService.presentToast('POST 1.2 : Facing some server issue')
    });
  }
  backToServiceregiterDetails() {
    this.router.navigate(['/service-dtl']);
  }
}
