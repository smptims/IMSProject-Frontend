import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database/database.service';
import { CommonService } from '../../services/common/common.service';
import { Router } from '@angular/router';
import { DeviceDetailsType } from '../../models/model';

@Component({
  selector: 'app-customer-device-details-edit',
  templateUrl: './customer-device-details-edit.page.html',
  styleUrls: ['./customer-device-details-edit.page.scss'],
})
export class CustomerDeviceDetailsEditPage implements OnInit {
  public editDeviceDetails: Array<any> = [];
  public editDeviceDetailsForm: FormGroup;

  constructor(private database: DatabaseService,
              private formBuilder: FormBuilder,
              private router: Router,
              private commonService: CommonService
              ) { 

                this.editDeviceDetailsForm = this.formBuilder.group({
                      did_seq_no: ['', Validators.compose([Validators.required])],
                      pcsd_seq_no: ['', Validators.compose([Validators.required])],
                      customer_no: ['', Validators.compose([Validators.required])],
                      device_no: ['', Validators.compose([Validators.required])],
                      vehicle_regd_no: ['', Validators.compose([Validators.required])],
                      vehicle_location: ['', Validators.compose([Validators.required])],
                      installed_by_sc_emp_no: ['', Validators.compose([Validators.required])],
                      installed_date_time: ['', Validators.compose([Validators.required])],
                      installation_verified_by: ['', Validators.compose([Validators.required])],
                      warranty_dt: ['', Validators.compose([])],
                      status: ['', Validators.compose([Validators.required])]
                });
                const navigation = this.router.getCurrentNavigation();
                this.editDeviceDetailsForm.patchValue(navigation.extras.state);
              }
                
              

  ngOnInit() {
  }

  editDeviceDetailsSubmit(body: DeviceDetailsType) {
    this.database.updateDeviceDetail(body).subscribe((updateDeviceDetailResp: any) => {
      console.log('updateDeviceDetailResp:::::::::::::\n', updateDeviceDetailResp)
      if (updateDeviceDetailResp.Success) {
        this.commonService.presentToast('Successfully Updated Device Details')
        this.editDeviceDetailsForm.reset();
        this.router.navigate(['/customer-device-details']);
      } else {
        this.commonService.presentToast('POST: Facing some server issue')
      }
    }, updateDeviceDetailError => {
      console.error('updateDeviceDetailError:::::::::::::::::::\n', updateDeviceDetailError)
      this.commonService.presentToast('POST: Facing some server issue')
    });
  }

  backToCustomerDeviceDetailsEdit() {
    this.router.navigate(['/customer-device-details']);
  }


}


