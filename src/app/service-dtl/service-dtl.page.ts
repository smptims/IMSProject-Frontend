import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../services/database/database.service";
import { CommonService } from '../services/common/common.service';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { serviceCenterUsersType } from '../models/model';

@Component({
  selector: 'app-service-dtl',
  templateUrl: './service-dtl.page.html',
  styleUrls: ['./service-dtl.page.scss'],
})
export class ServiceDtlPage implements OnInit {

  public serviceCenterDtls: Array<serviceCenterUsersType> = [];
  public serviceusers: Array<serviceCenterUsersType> = [];
  public inputToSearch: string = '';
  public status: string = 'ALL';

  constructor(private databse: DatabaseService, private router: Router, private commonService: CommonService, public modalController: ModalController) { }

  ngOnInit() {
    // to display all Service Center user details  
    this.getServiceCenterUsers()
  }

  ionViewWillEnter() {
    // to display all Service Center user details  
    this.getServiceCenterUsers()
  }

  // 1.0 to edit service center user details 
  navToServiceCenterUsersEdit(item: any) {
    const navigationExtras: NavigationExtras = {
      state: item
    };
    this.router.navigate(['/service-edit'], navigationExtras)
  }


  // 2.0 to create service center user details 
  navToServiceCenterUsersCreate() {
    this.router.navigate(['/service-reg'])
  }

  serviceCenterOnStatus() {
    this.serviceusers = this.serviceCenterDtls.filter(item => {
      return item.status === this.status;
    })
    if (this.status === 'ALL') {
      this.serviceusers = this.serviceCenterDtls;
    }
  }

  // 3.0 to display Customer User details	
  getServiceCenterUsers() {
    this.databse.getServiceCenterUsers().then((getServiceCenterUsersResp: any) => {
      this.serviceCenterDtls = getServiceCenterUsersResp.data;
      // Remove 
      this.serviceCenterDtls.forEach((item: serviceCenterUsersType) => {
        item.status = item.status === 'ACTIVE' ? 'ACTIVE' : 'INACTIVE';
      })
      this.serviceCenterOnStatus();
    }, serviceCenterUsersError => {
      console.error('serviceCenterUsersError:::::::::::::::::::\n', serviceCenterUsersError)
    });
  }

  // 4.0 to update Service Center User details
  updateServiceCenterUsers(item: serviceCenterUsersType) {
    item.status = item.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
    this.databse.updateServiceCenterUsers(item).then((updateServiceCenterUsersResp: any) => {
      if (updateServiceCenterUsersResp.Success) {
        this.commonService.presentToast('Successfully Updated Service Center User Status')
        this.getServiceCenterUsers();
      } else {
        this.commonService.presentToast('1.0 Error while updating Service Center User details')
      }
    }, updateServiceCenterUsersError => {
      console.error('updateServiceCenterUsersError:::::::::::::::::::\n', updateServiceCenterUsersError)
      this.commonService.presentToast('1.1 Error while updating Service Center User details')
    });
  }

  // 5.0 to delete Service Center User & Details
  deleteServiceCenterUsers(idToDelete: any) {
    this.databse.deleteServiceCenterUsers(idToDelete).then((deleteServiceCenterUsersResp: any) => {
      if (deleteServiceCenterUsersResp.Success) {
        this.commonService.presentToast(deleteServiceCenterUsersResp.Message)
        this.getServiceCenterUsers();
      } else {
        this.commonService.presentToast('1.0 Error while deleteServiceCenterUsersResp')
      }
    }, deleteServiceCenterUsersError => {
      console.error('deleteServiceCenterUsersError:::::::::::::::::::\n', deleteServiceCenterUsersError)
      this.commonService.presentToast('2.0 Error while deleteServiceCenterUsersResp')
    });
  }

  async getServiceCenterUsersPage(item: serviceCenterUsersType) {
    const modal = await this.modalController.create({
      component: 'ModalPage',
      componentProps: {
        data: item
      }
    });
    return await modal.present();
  }

  onSearch() {
    this.serviceCenterDtls = this.serviceCenterDtls.filter((item: serviceCenterUsersType) => {
      return item.sc_emp_no.includes(this.inputToSearch) || item.rec_create_user.includes(this.inputToSearch)
    })
    if (this.inputToSearch.length === 0) {
      this.getServiceCenterUsers();
    }
  }

}
