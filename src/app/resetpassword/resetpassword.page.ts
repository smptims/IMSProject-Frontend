import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database/database.service';
import { CommonService } from '../services/common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  public restPasswordForm: FormGroup;
  public user: any = {};
  constructor(private database: DatabaseService, private formBuilder: FormBuilder, private router: Router, private commonService: CommonService) {
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation.extras.state
    this.restPasswordForm = this.formBuilder.group({
      password: [null, Validators.compose([Validators.required])],
      confirmpassword: [null, Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  savePassword(restPasswordFormvalue) {
    if (restPasswordFormvalue.password == restPasswordFormvalue.confirmpassword) {
      this.user.password = restPasswordFormvalue.password;
      this.database.updateUser(this.user).subscribe((updateUserResp: any) => {
        if (updateUserResp.Message == "updated details" && updateUserResp.Success === true) {
          this.restPasswordForm.reset();
          this.router.navigate(['login'])
        }
      }, err => {
        console.error(err);
      })
    } else {
      this.commonService.presentToast('Password Does not match')
    }
  }

}
