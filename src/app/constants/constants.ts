export const api = "http://localhost:3001/";

export const apiConfigUrl = {
  ADMIN_USERS: api + "adminusersapi/adminusers/",
  GENERATE_OTP: api + "generateotpapi/generateotp/",
  ADMIN_MAIL: api + "adminmailapi/adminmail/",
  ADMIN_NOTIFY: api + "adminnotifyapi/adminnotify/",
  ADMIN_SMS: api + "adminsmsapi/adminsms/",

  CUST_USERS: api + "customerusersapi/customerusers/",
  SERVICE_CENTER_USERS: api + "servicecenterusersapi/servicecenterusers/",

  DEVICE_DETAILS: api + "deviceinstalleddtlsapi/deviceinstalleddtls/",
  DEVICE_INSTALLED_DAILY_RPT: api + "deviceinstalleddailyrptapi/deviceinstalleddailyrpt/",
  DEVICE_INSTALLED_HIS_RPT: api + "deviceinstalledhistrptapi/deviceinstalledhistrpt/",
  DEVICE_STATUS_RPT: api + "devicestatusrptapi/devicestatusrpt/",
  DEVICE_INSTALLED_STATUS_RPT: api +  "deviceinstalledstatusrptapi/deviceinstalledstatusrpt/",

  PRODUCT_ORD_DTLS: api + "productorderdtlsapi/productorderdtls/",
  PRODUCT_ORD_SUM_DTLS: api + "productordersmryapi/productordersmry/",
  PRODUCT_TECH_DTLS: api + "producttechdtlsapi/producttechdtls/",
  REFER_TRAVELS: api + "refertravelsapi/refertravels"
  
};

export const sideMenu = [
  {
    title: 'Home',
    path: '/admin-dashboard',
    icon: 'home'
  },
  {
    title: 'Device Details',
    path: '/device-details',
    icon: 'analytics'
  },
  {
    title: 'Profile Details',
    path: '/admin-profile',
    icon: 'person'
  },
  {
    title: 'Customer Details',
    path: '/customer-dtl',
    icon: 'contacts'
  },
  {
    title: 'Service Center Details',
    path: '/service-dtl',
    icon: 'briefcase'
  },
  {
    title: 'Reports',
    path: '/daily-reports',
    icon: 'briefcase'
  },
  {
    title: 'Mail',
    path: '/send-mail',
    icon: 'mail-unread'
  },
  {
    title: 'SMS',
    path: '/send-sms',
    icon: 'chatboxes'
  },
  {
    title: 'Notifications',
    path: '/user-mail-list',
    icon: 'notifications'
  },
  {
    title: 'Refer Travel',
    path: '/refertravel',
    icon: 'car'
  },
  {
    title: 'Help',
    path: 'http://www.srimaruthitechnologies.com/img/smpt%20brochure.pdf',
    icon: 'help'
  },
  {
    title: 'Logout',
    path: '/smptims-home',
    icon: 'power'
  }
]

//  FOOTER MENU CONSTANTS
export const footerMenu = [
  {
    title: 'Device Details',
    path: '/device-details',
    icon: 'analytics'
  },
  {
    title: 'Customer Details',
    path: '/customer-dtl',
    icon: 'contacts'
  },
  {
    title: 'Home',
    path: '/admin-dashboard',
    icon: 'home'
  },
  {
    title: 'Service Center Details',
    path: '/service-dtl',
    icon: 'briefcase'
  }
]

// DEVICE STATUS CONSTANTS.... 
export const deviceStatus = [
  {
    value: 'ALL',
    title: 'All'
  },
  {
    value: 'ACTIVE',
    title: 'Active'
  },
  {
    value: 'INACTIVE',
    title: 'Inactive'
  },
  {
    value: 'INSTALLED',
    title: 'Installed'
  },
  {
    value: 'DELIVERED',
    title: 'Delivered'
  },
  {
    value: 'REQUEST',
    title: 'Send Request to Install'
  },
  {
    value: 'READY',
    title: 'Ready to install'
  }
];
