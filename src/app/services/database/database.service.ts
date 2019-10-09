import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiConfigUrl } from "src/app/constants/constants";

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  private configURL = apiConfigUrl;
  constructor(private http: HttpClient) {}

  headers() {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "Application/json");
    if (
      localStorage.getItem("x-access-token") !== undefined &&
      localStorage.getItem("x-access-token") !== null
    ) {
      headers.append("token", localStorage.getItem("x-access-token"));
    }
    return { headers: headers };
  }

  /***************************************************************
   ******************** ADMIN_USERS ******************************
   ****************************************************************/

  isValidUser(formValue) {
    const username = formValue.username;
    const password = formValue.password;
    return this.http.get(
      this.configURL.ADMIN_USERS + username + "/" + password,
      this.headers()
    );
  }

  isUSerPresent(username) {
    return this.http.get(this.configURL.ADMIN_USERS + username, this.headers());
  }

  createUser(body) {
    return this.http.post(this.configURL.ADMIN_USERS, body, this.headers());
  }

  updateUser(body: any) {
    return this.http.put(this.configURL.ADMIN_USERS, body, this.headers());
  }

  /***************************************************************
   ******************** FORGET PASSWORD - GENERATEOTP ************
   ****************************************************************/

  generateOTP(formValue) {
    const adminid = formValue.adminid;
    return this.http.get(this.configURL.GENERATE_OTP + adminid, this.headers());
  }

  sendSMS(phoneNumber, message) {
    return this.http.get(
      this.configURL.SEND_SMS + phoneNumber + "/" + message,
      this.headers()
    );
  }

  /***************************************************************
   ******************** DEVICE_DETAILS ****************************
   ****************************************************************/

  getDeviceDetails() {
    return this.http.get(this.configURL.DEVICE_DETAILS, this.headers());
  }

  getDeviceInstalledStatusDetails(idFromDate: any, idToDate: any) {
    return this.http.get(
      this.configURL.DEVICE_INSTALLED_STATUS_RPT + idFromDate + "/" + idToDate,
      this.headers()
    );
  }

  getDeviceDetailsByID(idToGetData: any) {
    return this.http.get(
      this.configURL.DEVICE_DETAILS + idToGetData,
      this.headers()
    );
  }

  createDeviceDetail(body: any) {
    return this.http.post(this.configURL.DEVICE_DETAILS, body, this.headers());
  }

  updateDeviceDetail(body: any) {
    let idToUpdate = body.did_seq_no;
    return this.http.put(this.configURL.DEVICE_DETAILS, body, this.headers());
  }

  deleteDeviceDetail(idToDelete) {
    return this.http.delete(
      this.configURL.DEVICE_DETAILS + idToDelete,
      this.headers()
    );
  }

  /***************************************************************
   ************************ ADMIN PROFILE DETAILS ******************
   ****************************************************************/

  getAdminProfileDetails(idToDisplay: any) {
    return this.http.get(
      this.configURL.ADMIN_USERS + idToDisplay,
      this.headers()
    );
  }

  /***************************************************************
   ************* CUSTOMER REGISTRATION       ***************
   ****************************************************************/

  customerIsValidUser(formValue) {
    const username = formValue.username;
    const password = formValue.password;
    return this.http.get(
      this.configURL.CUST_USERS + username + "/" + password,
      this.headers()
    );
  }

  createCustomerRegDetails(customerUserDetails) {
    return this.http.post(
      this.configURL.CUST_USERS,
      customerUserDetails,
      this.headers()
    );
  }

  getCustomerUsers() {
    return this.http.get(this.configURL.CUST_USERS, this.headers());
  }

  getCustomerUsersByID(idToGetData) {
    return this.http.get(
      this.configURL.CUST_USERS + idToGetData,
      this.headers()
    );
  }

  updateCustomerUsers(body: any) {
    return this.http.put(this.configURL.CUST_USERS, body, this.headers());
  }

  deleteCustomerUsers(idToDelete) {
    return this.http.delete(
      this.configURL.CUST_USERS + idToDelete,
      this.headers()
    );
  }

  /***************************************************************
   ************************ CUSTOMER PROFILE DETAILS ******************
   ****************************************************************/

  getCustmomerProfileDetails(idToDisplay: any) {
    return this.http.get(
      this.configURL.CUST_USERS + idToDisplay,
      this.headers()
    );
  }

  isCustomerUSerPresent(username) {
    return this.http.get(this.configURL.CUST_USERS + username, this.headers());
  }

  updateCustomerUser(body: any) {
    return this.http.put(this.configURL.CUST_USERS, body, this.headers());
  }

  /***************************************************************
   ************* SERVICE CENTER REGISTRATION       ***************
   ****************************************************************/

  serviceCenterIsValidUser(formValue) {
    const username = formValue.username;
    const password = formValue.password;
    return this.http.get(
      this.configURL.SERVICE_CENTER_USERS + username + "/" + password,
      this.headers()
    );
  }

  createServiceCenterRegDetails(customerUserDetails) {
    return this.http.post(
      this.configURL.CUST_USERS,
      customerUserDetails,
      this.headers()
    );
  }

  createServiceCenterUsers(serviceCenterUsers) {
    return this.http.post(
      this.configURL.SERVICE_CENTER_USERS,
      serviceCenterUsers,
      this.headers()
    );
  }

  getServiceCenterUsers() {
    return this.http.get(this.configURL.SERVICE_CENTER_USERS, this.headers());
  }

  getServiceCenterDetailsByID(idToGetData) {
    return this.http.get(
      this.configURL.SERVICE_CENTER_USERS + idToGetData,
      this.headers()
    );
  }
  updateServiceCenterUsers(body: any) {
    return this.http.put(
      this.configURL.SERVICE_CENTER_USERS,
      body,
      this.headers()
    );
  }

  deleteServiceCenterUsers(idToDelete) {
    return this.http.delete(
      this.configURL.SERVICE_CENTER_USERS + idToDelete,
      this.headers()
    );
  }

  /* ***************************************************************
   *************            REFER TRAVELS          ***************
   *************************************************************** */
  createReferTravels(body: any) {
    return this.http.put(this.configURL.REFER_TRAVELS, body, this.headers());
  }

  /***************************************************************
   ************************ SERVICE CENTER PROFILE DETAILS ******************
   ****************************************************************/

  getServiceCenterProfileDetails(idToDisplay: any) {
    return this.http.get(
      this.configURL.SERVICE_CENTER_USERS + idToDisplay,
      this.headers()
    );
  }

  isServiceCenterUSerPresent(username) {
    return this.http.get(
      this.configURL.SERVICE_CENTER_USERS + username,
      this.headers()
    );
  }

  updateServieCenterUser(body: any) {
    return this.http.put(
      this.configURL.SERVICE_CENTER_USERS,
      body,
      this.headers()
    );
  }
}
