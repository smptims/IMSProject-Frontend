import { Injectable } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Injectable({
  providedIn: 'root'
})
export class EmailProvider {

  constructor(private email: EmailComposer) { }

  sendEmail(
    to: string,
    cc: string,
    bcc: string,
    attachment: string,
    subject: string,
    body: string): void {
    // Use the plugin isAvailable method to check whether
    // the user has configured an email account

    let email: any = {
      app: 'mailto',
      to: to,
      subject: subject,
      body: body,
      isPermitted: true
    };
    this.email.open(email);
    this.email.isAvailable().then((isAvailable: any) => {
      console.log('IsAvailable:::::::::::::::::::::::::\n', isAvailable)
      if (isAvailable) {
        // 
      }
    }, err => {
      console.log('Err::::::::::::::::::::\n', err)
    })
    this.email.isAvailable().then((available: boolean) => {
      if (available) {
        // Check that plugin has been granted access permissions to
        // user's e-mail account
        available = true;
      }
      // Check that plugin has been granted access permissions to
      // user's e-mail account
      this.email.hasPermission().then((isPermitted: boolean) => {

        // Define an object containing the
        // keys/values for populating the device
        // default mail fields when a new message
        // is created
        let email: any = {
          app: 'mailto',
          to: "srjagath76@gmail.com",
          cc: "srjagath76@gmail.com",
          bcc: "srjagath76@gmail.com",
          attachments: [
            attachment
          ],
          subject: " SMPT IMS subject",
          body: 'How are you? Nice greetings from SMPTIMS',
          isPermitted: true
        };

        // Open the device e-mail client and create
        // a new e-mail message populated with the
        // object containing our message data
        this.email.open(email);
      })
        .catch((error: any) => {
          console.log('No access permission granted');
          console.dir(error);
        });
    })
      .catch((error: any) => {
        console.log('User does not appear to have device e-mail account');
        console.dir(error);
      });
  }

}
