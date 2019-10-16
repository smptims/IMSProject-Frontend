import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from "../../services/database/database.service";
import { CommonService } from '../../services/common/common.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ErrorHandler } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-customer-daily-reports',
  templateUrl: './customer-daily-reports.page.html',
  styleUrls: ['./customer-daily-reports.page.scss'],
})
export class CustomerDailyReportsPage implements OnInit {

  letterObj = {
    to: '',
    from: '',
    text: ''
  }

  pdfObj = null;
  public deviceDetails: Array<any> = [];
  public customerDeviceStatusRptForm: FormGroup;

  constructor(
    private database: DatabaseService,
    private router: Router,
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public plt: Platform,
    private commonService: CommonService,
    public modalController: ModalController,
    public browserModule: BrowserModule,
    public errorHandler: ErrorHandler,
    public file: File,
    public fileopener: FileOpener
  ) {
    this.customerDeviceStatusRptForm = this.formBuilder.group({
      start_dt: ['', Validators.compose([])],
      end_dt: ['', Validators.compose([])]
    })
  }

  ngOnInit() {
  }

  createPdf() {
    let docDefinition = {
      content: [
        { text: 'REMINDER', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'From', style: 'subheader' },
        { text: this.letterObj.from },

        { text: 'To', style: 'subheader' },
        this.letterObj.to,

        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },

        {
          ul: [
            'Bacon',
            'Rips',
            'BBQ',
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }

  getCustomerDeviceDetails(formValue) {
    this.database.getDeviceInstalledStatusDetails(formValue.start_dt, formValue.end_dt).then((deviceDetailsResp: any) => {
      this.deviceDetails = deviceDetailsResp.data;
      console.log(this.deviceDetails);
      this.generatePDF();
    }, deviceDatailsError => {
      console.error('deviceDatailsError:::::::::::::::::::\n', deviceDatailsError)
    });
  }

  generatePDF() {
    let dataToPrint = [];
    for (let i = 0; i < this.deviceDetails.length; i++) {
      dataToPrint.push([this.deviceDetails[i].did_seq_no, this.deviceDetails[i].customer_no, this.deviceDetails[i].device_no, this.deviceDetails[i].vehicle_regd_no])
    }
    let pdfContent = {
      content: [
        {
          layout: 'lightHorizontalLines',
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              ['Seq No', 'Cust No', 'Dev No', 'Vech No']
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
