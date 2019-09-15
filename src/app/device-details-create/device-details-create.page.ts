import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { CommonService } from '../services/common/common.service';
import { Router } from '@angular/router';
import { DeviceDetailsType } from '../models/model';

@Component({
  selector: 'app-device-details-create',
  templateUrl: './device-details-create.page.html',
  styleUrls: ['./device-details-create.page.scss'],
})
export class DeviceDetailsCreatePage implements OnInit {

  public createDeviceDetails: Array<any> = [];
  public createDeviceDetailsForm: FormGroup;

  constructor(private database: DatabaseService, private formBuilder: FormBuilder,
    private router: Router, private commonService: CommonService) {

    this.createDeviceDetailsForm = this.formBuilder.group({
      pcsd_seq_no: ['', Validators.compose([Validators.required])],
      customer_no: ['', Validators.compose([Validators.required])],
      device_no: ['', Validators.compose([Validators.required])],
      vehicle_regd_no: ['', Validators.compose([Validators.required, Validators.email])],
      vehicle_location: ['', Validators.compose([Validators.required])],
      installed_by_sc_emp_no: ['', Validators.compose([Validators.required])],
      installed_date_time: ['', Validators.compose([Validators.required])],
      installation_verified_by: ['', Validators.compose([Validators.required])],
      warrenty_dt: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required, Validators.email])]

    })
  }

  ngOnInit() {
  }

  createDeviceDetailsSubmit(body: DeviceDetailsType) {
    this.database.createDeviceDetail(body).subscribe((createDeviceDetailResp: any) => {
      console.log('createDeviceDetailResp:::::::::::::\n', createDeviceDetailResp)
      if (createDeviceDetailResp.Success) {
        this.commonService.presentToast('Successfully Created Device Details')
        this.createDeviceDetailsForm.reset();
        this.router.navigate(['admin-dashboard']);
      } else {
        this.commonService.presentToast('POST: Facing some server issue')
      }
    }, createDeviceDetailError => {
      console.error('createDeviceDetailError:::::::::::::::::::\n', createDeviceDetailError)
      this.commonService.presentToast('POST: Facing some server issue')
    });
  }
  
  backToDeviceDetails() {
    this.router.navigate(['/device-details']);
  }
}
