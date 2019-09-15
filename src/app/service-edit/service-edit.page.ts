import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { CommonService } from '../services/common/common.service';
import { Router } from '@angular/router';
import { serviceCenterUsersType } from '../models/model';


@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.page.html',
  styleUrls: ['./service-edit.page.scss'],
})
export class ServiceEditPage implements OnInit {

  public serviceCenterUserDetails: Array<any> = [];
  public serviceCenterUserForm: FormGroup;

  constructor(
    private database: DatabaseService,
    private formBuilder: FormBuilder, 
    private router: Router, 
    private commonService: CommonService
    ) { 
        this.serviceCenterUserForm = this.formBuilder.group({
          sc_seq_no    : ['', Validators.compose([Validators.required])],
          sc_emp_no    : ['', Validators.compose([Validators.required])],
          username     : ['', Validators.compose([Validators.required])],
          customer_name: ['', Validators.compose([Validators.required])],
          company_name : ['', Validators.compose([Validators.required])],
          password     : ['', Validators.compose([Validators.required])],
          email        : ['', Validators.compose([Validators.required, Validators.email])],
          phone_no     : ['', Validators.compose([Validators.required])],
          address      : ['', Validators.compose([])],
          location     : ['', Validators.compose([Validators.required])],
          pincode_zip  : ['', Validators.compose([])],        
          country      : ['', Validators.compose([])],
          status       : ['', Validators.compose([Validators.required])] 
          
                 
      });
      const navigation = this.router.getCurrentNavigation();
      this.serviceCenterUserForm.patchValue(navigation.extras.state);
  }

  ngOnInit() {
  }


  editServiceCenterUsersSubmit(body: serviceCenterUsersType) {
    this.database.updateServiceCenterUsers(body).subscribe((updateServiceCenterUsersResp: any) => {
      console.log('updateServiceCenterUsersResp:::::::::::::\n', updateServiceCenterUsersResp)
      if (updateServiceCenterUsersResp.Success) {
        this.commonService.presentToast('Successfully Updated Service Center Users Details')
        this.serviceCenterUserForm.reset();
        this.router.navigate(['/service-dtl']);
      } else {
        this.commonService.presentToast('POST 1.1 : Facing some server issue')
      }
    }, updateServiceCenterUsersError => {
      console.error('updateServiceCenterUsersError:::::::::::::::::::\n', updateServiceCenterUsersError)
      this.commonService.presentToast('POST 1.2 : Facing some server issue')
    });
  }
  backToServiceEditDetails() {
    this.router.navigate(['/service-dtl']);
  }

}
