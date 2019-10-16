import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "src/app/services/database/database.service";
import { CommonService } from "src/app/services/common/common.service";

@Component({
  selector: "app-customer-send-sms",
  templateUrl: "./customer-send-sms.page.html",
  styleUrls: ["./customer-send-sms.page.scss"]
})
export class CustomerSendSmsPage implements OnInit {
  public phoneNumber: string = "";
  public message: string = "";
  constructor(
    private databseService: DatabaseService,
    private commonService: CommonService
  ) { }

  ngOnInit() { }

  sendSMS() {
    this.databseService.sendSMS(this.phoneNumber, this.message).then(
      (smsResp: any) => {
        if (smsResp.Success) {
          this.commonService.presentToast("SMS Sent Successfully");
        }
      },
      smsErr => {
        console.error("smsErr::::::::::::\n", smsErr);
      }
    );
  }
}
