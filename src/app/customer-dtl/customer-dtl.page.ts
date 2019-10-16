import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../services/database/database.service";
import { CommonService } from '../services/common/common.service';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { customerUsersType } from '../models/model';

@Component({
  selector: 'app-customer-dtl',
  templateUrl: './customer-dtl.page.html',
  styleUrls: ['./customer-dtl.page.scss'],
})
export class CustomerDtlPage implements OnInit {
  public customerDtl: Array<customerUsersType> = [];
  public customers: Array<customerUsersType> = [];
  public inputToSearch: string = '';
  public status: string = 'ALL';

  constructor(private database: DatabaseService, private router: Router, private commonService: CommonService, public modalController: ModalController) { }

  ngOnInit() {
    // to display all customer user details  
    this.getCustomerUsers()
  }

  ionViewWillEnter() {
    // to display all customer user details  
    this.getCustomerUsers()
  }

  // to create customer user details  
  navToCustomerUsersCreate() {
    this.router.navigate(['/customer-reg'])
  }

  // 1.0 to create customer user details  
  navToCustomerUsersEdit(item: any) {
    const navigationExtras: NavigationExtras = {
      state: item
    };
    this.router.navigate(['/customer-edit'], navigationExtras)
  }

  customerUserOnStatus() {
    this.customers = this.customerDtl.filter(item => {
      return item.status === this.status;
    })
    if (this.status === 'ALL') {
      this.customers = this.customerDtl;
    }
  }

  // 2.0 to display Customer User details
  getCustomerUsers() {
    this.database.getCustomerUsers().then((getCustomerUsersResp: any) => {
      this.customerDtl = getCustomerUsersResp.data;
      // Remove 
      this.customerDtl.forEach((item: customerUsersType) => {
        item.status = item.status === 'ACTIVE' ? 'ACTIVE' : 'INACTIVE';
      })
      this.customerUserOnStatus();
    }, customerUsersError => {
      console.error('customerUsersError:::::::::::::::::::\n', customerUsersError);
    });
  }

  // 3.0 to update Customer User details
  updateCustomerUsers(item: customerUsersType) {
    item.status = item.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
    this.database.updateCustomerUsers(item).then((updateCustomerUsersResp: any) => {
      if (updateCustomerUsersResp.Success) {
        this.commonService.presentToast('Successfully Updated Customer User details')
        this.getCustomerUsers();
      } else {
        this.commonService.presentToast('1.0 Error while updating Customer User details')
      }
    }, updateCustomerUsersError => {
      console.error('updateCustomerUsersError:::::::::::::::::::\n', updateCustomerUsersError)
      this.commonService.presentToast('1.1 Error while updating Customer User details')
    });
  }

  deleteCustomerUsers(idToDelete: any) {
    this.database.deleteCustomerUsers(idToDelete).then((deleteCustomerUsersResp: any) => {
      if (deleteCustomerUsersResp.Success) {
        this.commonService.presentToast(deleteCustomerUsersResp.Message)
        this.getCustomerUsers();
      } else {
        this.commonService.presentToast('1.0 Error while deleteCustomerUsersResp')
      }
    }, deleteCustomerUsersError => {
      console.error('deleteCustomerUsersError:::::::::::::::::::\n', deleteCustomerUsersError)
      this.commonService.presentToast('2.0 Error while deleteCustomerUsersResp')
    });
  }

  async getCustomerUsersPage(item: customerUsersType) {
    const modal = await this.modalController.create({
      component: 'ModalPage',
      componentProps: {
        data: item
      }
    });
    return await modal.present();
  }

  onSearch() {
    this.customerDtl = this.customerDtl.filter((item: customerUsersType) => {
      return item.customer_name.includes(this.inputToSearch) || item.rec_create_user.includes(this.inputToSearch)
    })
    if (this.inputToSearch.length === 0) {
      this.getCustomerUsers();
    }
  }

}
