import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../services/database/database.service";
import { CommonService } from '../../services/common/common.service';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { DeviceDetailsType } from '../../models/model'
import { deviceStatus } from '../../constants/constants';
import { NavController, Platform } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ErrorHandler } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-customer-device-details',
  templateUrl: './customer-device-details.page.html',
  styleUrls: ['./customer-device-details.page.scss'],
})
export class CustomerDeviceDetailsPage implements OnInit {

  public status: any = 'ALL'
  public deviceDatails: Array<DeviceDetailsType> = [];
  public devices: Array<DeviceDetailsType> = [];
  public inputToSearch: string = '';
  public deviceStatusList: Array<any> = [];
  pdfObj = null;

  constructor(private databse: DatabaseService, 
              private router: Router, 
              private commonService: CommonService, 
              public modalController: ModalController,
              public browserModule: BrowserModule,
              public errorHandler: ErrorHandler,
              public file: File,
              public fileopener: FileOpener,
              public plt: Platform
    ) {

      }

  ngOnInit() {
    this.deviceStatusList = deviceStatus;
    this.getDeviceDetails()
  }

  ionViewWillEnter() {
    // to display all customer user details  
    this.getDeviceDetails()
  }

  deviceBasedOnStatus() {
    this.devices = this.deviceDatails.filter(item => {
      return item.status === this.status;
    })
    if (this.status === 'ALL') {
      this.devices = this.deviceDatails;
    }
    console.log('table::::::::::::::::::::\n', this.devices);
  }

  navToCustomerDeviceDtlsEdit(item: any) {
    const navigationExtras: NavigationExtras = {
      state: item
    };
    this.router.navigate(['/customer-device-details-edit'], navigationExtras)
  }

  getDeviceDetails() {
    this.databse.getDeviceDetails().subscribe((deviceDatailsResp: any) => {
      this.deviceDatails = deviceDatailsResp.data;
      // Remove 
      this.deviceDatails.forEach((item: DeviceDetailsType) => {
        // item.status = item.status === 'ACTIVE' ? 'ACTIVE' : 'READY';
        if (item.status === 'ACTIVE') {
          item.status = 'ACTIVE'
        }
        else if (item.status === 'DELIVERED') {
          item.status = 'DELIVERED'
        }
        else if (item.status === 'REQUEST') {
          item.status = 'REQUEST'
        }
        else if (item.status === 'INSTALLED') {
          item.status = 'INSTALLED'
        }
        else if (item.status === 'INACTIVE') {
          item.status = 'INACTIVE'
        }
        else if (item.status === 'READY') {
          item.status = 'READY'
        }
      });
      this.deviceBasedOnStatus();
    }, deviceDatailsError => {
      console.error('deviceDatailsError:::::::::::::::::::\n', deviceDatailsError)
    });
  }

  updateDeviceDetail(item: DeviceDetailsType) {
    console.log(item.status)
    item.status = item.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
    console.log(item.status)
    this.databse.updateDeviceDetail(item).subscribe((updateDeviceDetailResp: any) => {
      if (updateDeviceDetailResp.Success) {
        this.commonService.presentToast('Successfully Updated Device Status')
        this.getDeviceDetails()
      } else {
        this.commonService.presentToast('1.0 Error while updating Device Details...')
      }
    }, updateDeviceDetailError => {
      console.error('updateDeviceDetailError:::::::::::::::::::\n', updateDeviceDetailError)
      this.commonService.presentToast('Facing some server issue')
    });
  }

  async detailPage(item: DeviceDetailsType) {
    const modal = await this.modalController.create({
      component: 'ModalPage',
      componentProps: {
        data: item
      }
    });
    return await modal.present();
  }


  onSearch() {
    this.deviceDatails = this.deviceDatails.filter((item: DeviceDetailsType) => {
      return item.vehicle_regd_no.includes(this.inputToSearch) || item.rec_create_user.includes(this.inputToSearch)
    })
    if (this.inputToSearch.length === 0) {
      this.getDeviceDetails();
    }
  }
  // start: PDF generation  
  createPDF() {
    console.log(" inside createpdf.....")
 
    let dataToPrint = [];
    for (let i = 0; i <this.devices.length; i++) {
      dataToPrint.push([this.devices[i].did_seq_no, this.devices[i].customer_no, this.devices[i].device_no, this.devices[i].status,this.devices[i].vehicle_regd_no])
    }
    let pdfContent = {
      content: [
        {
          layout: 'lightHorizontalLines',
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*','*'],
            body: [
              ['Seq No', 'Cust No', 'Dev No','Dev Status', 'Vech No']
            ].concat(dataToPrint)
          }
        }
      ]
      }
    this.pdfObj = pdfMake.createPdf(pdfContent);
    this.downloadPdf();
  }
    downloadPdf() {
      const pdfName = "report_" + new Date().toLocaleDateString() + ".pdf";
      if (this.plt.is('cordova')) {
        this.pdfObj.getBuffer((buffer) => {
          const blob = new Blob([buffer], { type: 'application/pdf' });
          this.file.writeFile(this.file.externalRootDirectory, pdfName, blob, { replace: true }).then(fileEntry => {
            this.fileopener.open(this.file.externalRootDirectory + pdfName, 'application/pdf').then(resp => {
              // 
            }, err => {
              console.error('fileopenerError::::::::::::::::::::::::\n', err)
              this.commonService.presentToast('fileopenerError')
            })
          }, err => {
            console.error('fileEntryError::::::::::::::::::::::::\n', err)
            this.commonService.presentToast('fileEntryError')
          })
        });
      } else {
        // On a browser simply use download!
        this.pdfObj.download();
      }
    } 
  }
  // end: end of device details printout


