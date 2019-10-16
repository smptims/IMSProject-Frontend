import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database/database.service';
import { CommonService } from '../../services/common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicecenter-resetpassword',
  templateUrl: './servicecenter-resetpassword.page.html',
  styleUrls: ['./servicecenter-resetpassword.page.scss'],
})
export class ServicecenterResetpasswordPage implements OnInit {

  public resetServiceCenterPasswordForm: FormGroup;
  public user: any = {};

  constructor(private database: DatabaseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private commonService: CommonService
  ) {

    const navigation = this.router.getCurrentNavigation();
    this.user = navigation.extras.state
    this.resetServiceCenterPasswordForm = this.formBuilder.group({
      password: [null, Validators.compose([Validators.required])],
      confirmpassword: [null, Validators.compose([Validators.required])]
    })

  }

  ngOnInit() {
  }

  saveServiceCenterPassword(resetServiceCenterPasswordFormvalue) {
    if (resetServiceCenterPasswordFormvalue.password == resetServiceCenterPasswordFormvalue.confirmpassword) {
      this.user.password = resetServiceCenterPasswordFormvalue.password;
      console.log("password updated successfully");
      this.database.updateServieCenterUser(this.user).then((updateUserResp: any) => {
        if (updateUserResp.Message == "updated details" && updateUserResp.Success === true) {
          this.resetServiceCenterPasswordForm.reset();
          this.router.navigate(['servicecenter-login'])
        }
      }, err => {
        console.error(err);
      })
    } else {
      this.commonService.presentToast('Password Does not match')
    }
  }

}
