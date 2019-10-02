import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database/database.service';
import { CommonService } from '../../services/common/common.service';
import { referTravelsType } from '../../models/model';

import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-servicecenter-refertravel',
  templateUrl: './servicecenter-refertravel.page.html',
  styleUrls: ['./servicecenter-refertravel.page.scss'],
})
export class ServicecenterRefertravelPage implements OnInit {

  public refertravels: Array<referTravelsType> = [];
  public referTravelsForm: FormGroup;

  constructor(private router: Router, 
              private formBuilder: FormBuilder,
              private database: DatabaseService, 
              private commonService: CommonService,  
              public modalController: ModalController) { 

      this.referTravelsForm = this.formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        phone_no: ['', Validators.compose([Validators.required])],        
        location: ['', Validators.compose([Validators.required])]
    })
   }

  ngOnInit() {
  }

  referTravelsFormSubmit(body: referTravelsType) {
    this.database.createReferTravels(body).subscribe((refertravelResp: any) => {
      this.refertravels = refertravelResp.data;
      if (refertravelResp.Success) {
        this.commonService.presentToast('Successfully Added Refer Travel Details')
       }
       else {
        this.commonService.presentToast('Facing some server issue')
      }
    }, createReferTravelsError => {
      console.error('createReferTravelsError:::::::::::::::::::\n', createReferTravelsError)
      this.commonService.presentToast('Facing some server issue')
    });
  }
}
