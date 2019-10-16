import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiConfigUrl } from "src/app/constants/constants";
import { HTTP } from "@ionic-native/http/ngx";

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  private configURL = apiConfigUrl;
  constructor(private http: HttpClient, private nativeHTTP: HTTP) { }

  headers() {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "Application/json");
    // if (
    //   localStorage.getItem("x-access-token") !== undefined &&
    //   localStorage.getItem("x-access-token") !== null
    // ) {
    //   headers.append("token", localStorage.getItem("x-access-token"));
    // }
    return { headers: headers };
  }

  /***************************************************************
   ******************** ADMIN_USERS ******************************
   ****************************************************************/
  isValidUser(formValue: any) {
    const username = formValue.username;
    const password = formValue.password;
    return new Promise((resolve, reject) => {
      const url = this.configURL.ADMIN_USERS + username + "/" + password;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("generateOTP::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // isValidUser(formValue) {
  //   const username = formValue.username;
  //   const password = formValue.password;
  //   return this.http.get(
  //     this.configURL.ADMIN_USERS + username + "/" + password,
  //     this.headers()
  //   );
  // }

  isUSerPresent(username: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.ADMIN_USERS + username;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("isUSerPresent::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // isUSerPresent(username) {
  //   return this.http.get(this.configURL.ADMIN_USERS + username, this.headers());
  // }

  createUser(body: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.ADMIN_USERS;
      this.nativeHTTP.post(url, body, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("createUser::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // createUser(body) {
  //   return this.http.post(this.configURL.ADMIN_USERS, body, this.headers());
  // }

  updateUser(body: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.ADMIN_USERS;
      this.nativeHTTP.put(url, body, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("updateUser::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // updateUser(body: any) {
  //   return this.http.put(this.configURL.ADMIN_USERS, body, this.headers());
  // }

  /***************************************************************
   ******************** FORGET PASSWORD - GENERATEOTP ************
   ****************************************************************/
  generateOTP(formValue: any) {
    return new Promise((resolve, reject) => {
      const adminid = formValue.adminid;
      const url = this.configURL.GENERATE_OTP + adminid;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("generateOTP::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }
  // generateOTP(formValue: any) {
  //   const adminid = formValue.adminid;
  //   return this.http.get(this.configURL.GENERATE_OTP + adminid, this.headers());
  // }

  sendSMS(phoneNumber: any, message: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.SEND_SMS + phoneNumber + "/" + message;
      const body = {};
      this.nativeHTTP.get(url, body, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("Unable to send SMS::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  /***************************************************************
   ******************** DEVICE_DETAILS ****************************
   ****************************************************************/

  getDeviceDetails() {
    return new Promise((resolve, reject) => {
      const url = this.configURL.DEVICE_DETAILS;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("getDeviceDetails::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }
  // getDeviceDetails() {
  //   return this.http.get(this.configURL.DEVICE_DETAILS, this.headers());
  // }

  getDeviceInstalledStatusDetails(idFromDate: any, idToDate: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.DEVICE_INSTALLED_STATUS_RPT + idFromDate + "/" + idToDate;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("getDeviceInstalledStatusDetails::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // getDeviceInstalledStatusDetails(idFromDate: any, idToDate: any) {
  //   return this.http.get(
  //     this.configURL.DEVICE_INSTALLED_STATUS_RPT + idFromDate + "/" + idToDate,
  //     this.headers()
  //   );
  // }

  getDeviceDetailsByID(idToGetData: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.DEVICE_DETAILS + idToGetData;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("getDeviceDetailsByID::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // getDeviceDetailsByID(idToGetData: any) {
  //   return this.http.get(
  //     this.configURL.DEVICE_DETAILS + idToGetData,
  //     this.headers()
  //   );
  // }

  createDeviceDetail(body: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.DEVICE_DETAILS;
      this.nativeHTTP.post(url, body, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("createDeviceDetail::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }
  // createDeviceDetail(body: any) {
  //   return this.http.post(this.configURL.DEVICE_DETAILS, body, this.headers());
  // }

  updateDeviceDetail(body: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.DEVICE_DETAILS;
      this.nativeHTTP.put(url, body, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("updateDeviceDetail::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }
  // updateDeviceDetail(body: any) {
  //   let idToUpdate = body.did_seq_no;
  //   return this.http.put(this.configURL.DEVICE_DETAILS, body, this.headers());
  // }

  deleteDeviceDetail(idToDelete: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.DEVICE_DETAILS + idToDelete;
      this.nativeHTTP.delete(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("deleteDeviceDetail::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // deleteDeviceDetail(idToDelete) {
  //   return this.http.delete(
  //     this.configURL.DEVICE_DETAILS + idToDelete,
  //     this.headers()
  //   );
  // }

  /***************************************************************
   ************************ ADMIN PROFILE DETAILS ******************
   ****************************************************************/
  getAdminProfileDetails(idToDisplay: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.ADMIN_USERS + idToDisplay;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("getAdminProfileDetails::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }
  // getAdminProfileDetails(idToDisplay: any) {
  //   return this.http.get(
  //     this.configURL.ADMIN_USERS + idToDisplay,
  //     this.headers()
  //   );
  // }

  /***************************************************************
   ************* CUSTOMER REGISTRATION       ***************
   ****************************************************************/

  customerIsValidUser(formValue: any) {
    return new Promise((resolve, reject) => {
      const username = formValue.username;
      const password = formValue.password;
      const url = this.configURL.CUST_USERS + username + "/" + password;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("customerIsValidUser::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  createCustomerRegDetails(customerUserDetails: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.CUST_USERS;
      this.nativeHTTP.post(url, customerUserDetails, {}).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("createCustomerRegDetails::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
    // return this.http.post(
    //   this.configURL.CUST_USERS,
    //   customerUserDetails,
    //   this.headers()
    // );
  }

  getCustomerUsers() {
    return new Promise((resolve, reject) => {
      const url = this.configURL.CUST_USERS;
      this.nativeHTTP.get(url, {}, {}).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("getCustomerUsers::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
    // return this.http.get(this.configURL.CUST_USERS, this.headers());
  }

  getCustomerUsersByID(idToGetData: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.CUST_USERS + idToGetData;
      this.nativeHTTP.get(url, {}, {}).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("getCustomerUsersByID::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
    // return this.http.get(
    //   this.configURL.CUST_USERS + idToGetData,
    //   this.headers()
    // );
  }

  updateCustomerUsers(body: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.CUST_USERS;
      this.nativeHTTP.put(url, body, {}).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("updateCustomerUsers::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
    // return this.http.put(this.configURL.CUST_USERS, body, this.headers());
  }

  deleteCustomerUsers(idToDelete: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.CUST_USERS + idToDelete;
      this.nativeHTTP.delete(url, {}, {}).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("deleteCustomerUsers::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
    // return this.http.delete(
    //   this.configURL.CUST_USERS + idToDelete,
    //   this.headers()
    // );
  }

  /***************************************************************
   ************************ CUSTOMER PROFILE DETAILS ******************
   ****************************************************************/

  getCustmomerProfileDetails(idToDisplay: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.CUST_USERS + idToDisplay;
      this.nativeHTTP.get(url, {}, {}).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("getCustmomerProfileDetails::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
    // return this.http.get(
    //   this.configURL.CUST_USERS + idToDisplay,
    //   this.headers()
    // );
  }

  isCustomerUSerPresent(username: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.CUST_USERS + username;
      this.nativeHTTP.get(url, {}, {}).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("isCustomerUSerPresent::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
    // return this.http.get(this.configURL.CUST_USERS + username, this.headers());
  }

  updateCustomerUser(body: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.CUST_USERS;
      this.nativeHTTP.put(url, body, {}).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("updateCustomerUser::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
    // return this.http.put(this.configURL.CUST_USERS, body, this.headers());
  }

  /***************************************************************
   ************* SERVICE CENTER REGISTRATION       ***************
   ****************************************************************/
  serviceCenterIsValidUser(formValue: any) {
    const username = formValue.username;
    const password = formValue.password;
    return new Promise((resolve, reject) => {
      const url = this.configURL.SERVICE_CENTER_USERS + username + "/" + password;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("generateOTP::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // serviceCenterIsValidUser(formValue) {
  //   const username = formValue.username;
  //   const password = formValue.password;
  //   return this.http.get(
  //     this.configURL.SERVICE_CENTER_USERS + username + "/" + password,
  //     this.headers()
  //   );
  // }
  createServiceCenterRegDetails(serviceUserDetails: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.SERVICE_CENTER_USERS;
      this.nativeHTTP.post(url, serviceUserDetails, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("createServiceCenterRegDetails::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // createServiceCenterRegDetails(customerUserDetails) {
  //   return this.http.post(
  //     this.configURL.CUST_USERS,
  //     customerUserDetails,
  //     this.headers()
  //   );
  // }

  createServiceCenterUsers(serviceCenterUsers: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.SERVICE_CENTER_USERS;
      this.nativeHTTP.post(url, serviceCenterUsers, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("createServiceCenterRegDetails::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // createServiceCenterUsers(serviceCenterUsers) {
  //   return this.http.post(
  //     this.configURL.SERVICE_CENTER_USERS,
  //     serviceCenterUsers,
  //     this.headers()
  //   );
  // }

  getServiceCenterUsers() {
    return new Promise((resolve, reject) => {
      const url = this.configURL.SERVICE_CENTER_USERS;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("getServiceCenterUsers::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // getServiceCenterUsers() {
  //   return this.http.get(this.configURL.SERVICE_CENTER_USERS, this.headers());
  // }

  getServiceCenterDetailsByID(idToGetData: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.SERVICE_CENTER_USERS + idToGetData;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("getServiceCenterDetailsByID::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // getServiceCenterDetailsByID(idToGetData) {
  //   return this.http.get(
  //     this.configURL.SERVICE_CENTER_USERS + idToGetData,
  //     this.headers()
  //   );
  // }

  updateServiceCenterUsers(body: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.SERVICE_CENTER_USERS;
      this.nativeHTTP.put(url, body, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("updateServiceCenterUsers::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // updateServiceCenterUsers(body: any) {
  //   return this.http.put(
  //     this.configURL.SERVICE_CENTER_USERS,
  //     body,
  //     this.headers()
  //   );
  // }

  deleteServiceCenterUsers(idToDelete: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.SERVICE_CENTER_USERS + idToDelete;
      this.nativeHTTP.delete(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("updateServiceCenterUsers::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // deleteServiceCenterUsers(idToDelete) {
  //   return this.http.delete(
  //     this.configURL.SERVICE_CENTER_USERS + idToDelete,
  //     this.headers()
  //   );
  // }

  /* ***************************************************************
   *************            REFER TRAVELS          ***************
   *************************************************************** */

  createReferTravels(body: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.REFER_TRAVELS;
      this.nativeHTTP.post(url, body, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("createReferTravels::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // createReferTravels(body: any) {
  //   return this.http.put(this.configURL.REFER_TRAVELS, body, this.headers());
  // }

  /***************************************************************
   ************************ SERVICE CENTER PROFILE DETAILS ******************
   ****************************************************************/
  getServiceCenterProfileDetails(idToDisplay: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.SERVICE_CENTER_USERS + idToDisplay;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("getServiceCenterProfileDetails::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // getServiceCenterProfileDetails(idToDisplay: any) {
  //   return this.http.get(
  //     this.configURL.SERVICE_CENTER_USERS + idToDisplay,
  //     this.headers()
  //   );
  // }

  isServiceCenterUSerPresent(username: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.SERVICE_CENTER_USERS + username;
      this.nativeHTTP.get(url, {}, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("isServiceCenterUSerPresent::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // isServiceCenterUSerPresent(username) {
  //   return this.http.get(
  //     this.configURL.SERVICE_CENTER_USERS + username,
  //     this.headers()
  //   );
  // }

  updateServieCenterUser(body: any) {
    return new Promise((resolve, reject) => {
      const url = this.configURL.SERVICE_CENTER_USERS;
      this.nativeHTTP.put(url, body, this.headers()).then(
        resp => {
          resolve(JSON.parse(resp.data));
        },
        err => {
          console.error("updateServieCenterUser::::::::::::::::::\n", err);
          reject(err.error);
        }
      );
    });
  }

  // updateServieCenterUser(body: any) {
  //   return this.http.put(
  //     this.configURL.SERVICE_CENTER_USERS,
  //     body,
  //     this.headers()
  //   );
  // }

}
