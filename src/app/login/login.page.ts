import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { CommonService } from '../services/common/common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public credentails: FormGroup;

  constructor(private database: DatabaseService, private formBuilder: FormBuilder, private router: Router, private commonService: CommonService) {
    this.credentails = this.formBuilder.group({
      username: ['SRS Travels', Validators.compose([Validators.required])],
      password: ['78945', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {

  }

  submit(formValue) {
    this.database.isValidUser(formValue).subscribe((loginResp: any) => {
      console.log('my response:::::::\n', loginResp + formValue)
      if (!loginResp.Success) {
        this.commonService.presentToast(loginResp.ErrorMessage);
      } else {
        this.commonService.presentToast(loginResp.ErrorMessage);
        this.router.navigate(['/admin-dashboard'])
      }
    }, err => {
      this.commonService.presentToast(" Error while calling API");
    });
  }

  navToForgetPassword() {
    this.router.navigate(['/forgetpass'])
  }

}
