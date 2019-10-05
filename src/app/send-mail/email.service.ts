import { Injectable } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Injectable({
  providedIn: 'root'
})
export class EmailProvider {

  constructor(private _EMAIL: EmailComposer) { }

  //  /**
  //   *
  //   * @public
  //   * @method sendMail
  //   * @param to    			{string}    The primary e-mail address
  //   * @param cc    			{string}    The carbon copy e-mail address
  //   * @param bcc   			{string}    The blank carbon copy e-mail address
  //   * @param attachment     {string}    The attachment to be sent
  //   * @param subject        {string}    The subject for the e-mail message
  //   * @param body           {string}    The message content
  //   *

  sendEmail(to: string,
    cc: string,
    bcc: string,
    attachment: number,
    subject: string,
    body: string): void {
    // let email: any = {
    //   app: 'mailto',
    //   from: "srjagath76@gmail.com",
    //   to: to,
    //   cc: "srjagath76@gmail.com",
    //   bcc: "srjagath76@gmail.com",
    //   attachments: [
    //     attachment
    //   ],
    //   subject: " SMPT IMS subject",
    //   body: 'How are you? Nice greetings from SMPTIMS',
    // };
    debugger;

    // Open the device e-mail client and create
    // a new e-mail message populated with the
    // object containing our message data
    // this._EMAIL.open(email);
    this._EMAIL.hasPermission()
      .then((isPermitted: boolean) => {
        let email: any = {
          app: 'mailto',
          from: "srjagath76@gmail.com",
          to: to,
          cc: "srjagath76@gmail.com",
          bcc: "srjagath76@gmail.com",
          attachments: [
            attachment
          ],
          subject: " SMPT IMS subject",
          body: 'How are you? Nice greetings from SMPTIMS',
        };
        debugger;

        // Open the device e-mail client and create
        // a new e-mail message populated with the
        // object containing our message data
        this._EMAIL.open(email);
      })
      .catch((error: any) => {
        console.log('No access permission granted');
        console.error('Mail error:::::::::::::::', error);
        debugger;
      });

    // Use the plugin isAvailable method to check whether
    // the user has configured an email account
    // debugger;
    // this._EMAIL.isAvailable()
    //   .then((available: boolean) => {
    //     debugger;

    //     // Check that plugin has been granted access permissions to
    //     // user's e-mail account
    //     this._EMAIL.hasPermission()
    //       .then((isPermitted: boolean) => {
    //         debugger;

    //         // Define an object containing the
    //         // keys/values for populating the device
    //         // default mail fields when a new message
    //         // is created
    //         let email: any = {
    //           app: 'mailto',
    //           to: "srjagath76@gmail.com",
    //           cc: "srjagath76@gmail.com",
    //           bcc: "srjagath76@gmail.com",
    //           attachments: [
    //             attachment
    //           ],
    //           subject: " SMPT IMS subject",
    //           body: 'How are you? Nice greetings from SMPTIMS',
    //         };
    //         debugger;

    //         // Open the device e-mail client and create
    //         // a new e-mail message populated with the
    //         // object containing our message data
    //         this._EMAIL.open(email);
    //       })
    //       .catch((error: any) => {
    //         console.log('No access permission granted');
    //         console.error('Mail error:::::::::::::::', error);
    //         debugger;
    //       });
    //   })
    //   .catch((error: any) => {
    //     console.log('User does not appear to have device e-mail account');
    //     console.error('Mail error:::::::::::::::', error);
    //     debugger;
    //   });
  }

}
