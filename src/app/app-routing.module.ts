import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'smptims-home', pathMatch: 'full' },
  { path: 'smptims-home', loadChildren: './smptims-home/smptims-home.module#SmptimsHomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'admin-dashboard', loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardPageModule' },
  { path: 'admin-profile', loadChildren: './admin-profile/admin-profile.module#AdminProfilePageModule' },

  { path: 'forgetpass', loadChildren: './forgetpass/forgetpass.module#ForgetpassPageModule' },
  { path: 'validate-otp', loadChildren: './validate-otp/validate-otp.module#ValidateOtpPageModule' },
  { path: 'resetpassword', loadChildren: './resetpassword/resetpassword.module#ResetpasswordPageModule' },

  { path: 'device-details', loadChildren: './device-details/device-details.module#DeviceDetailsPageModule' },
  { path: 'device-details-create', loadChildren: './device-details-create/device-details-create.module#DeviceDetailsCreatePageModule' },
  { path: 'device-details-edit', loadChildren: './device-details-edit/device-details-edit.module#DeviceDetailsEditPageModule' },

  { path: 'customer-reg', loadChildren: './customer-reg/customer-reg.module#CustomerRegPageModule' },
  { path: 'customer-dtl', loadChildren: './customer-dtl/customer-dtl.module#CustomerDtlPageModule' },
  { path: 'customer-edit', loadChildren: './customer-edit/customer-edit.module#CustomerEditPageModule' },

  { path: 'service-reg', loadChildren: './service-reg/service-reg.module#ServiceRegPageModule' },
  { path: 'service-dtl', loadChildren: './service-dtl/service-dtl.module#ServiceDtlPageModule' },
  { path: 'service-edit', loadChildren: './service-edit/service-edit.module#ServiceEditPageModule' },
  { path: 'user-mail-list', loadChildren: './user-mail-list/user-mail-list.module#UserMailListPageModule' },  

  { path: 'refertravel', loadChildren: './refertravel/refertravel.module#RefertravelPageModule' },
  { path: 'send-sms', loadChildren: './send-sms/send-sms.module#SendSmsPageModule' },
  { path: 'send-mail', loadChildren: './send-mail/send-mail.module#SendMailPageModule' },
  { path: 'daily-reports', loadChildren: './daily-reports/daily-reports.module#DailyReportsPageModule' },
  { path: 'customer-login', loadChildren: './CustomerDashboard/customer-login/customer-login.module#CustomerLoginPageModule' },
  { path: 'customer-dashboard', loadChildren: './CustomerDashboard/customer-dashboard/customer-dashboard.module#CustomerDashboardPageModule' },
  { path: 'customer-profile', loadChildren: './CustomerDashboard/customer-profile/customer-profile.module#CustomerProfilePageModule' },
  { path: 'customer-send-sms', loadChildren: './CustomerDashboard/customer-send-sms/customer-send-sms.module#CustomerSendSmsPageModule' },
  { path: 'customer-refertravel', loadChildren: './CustomerDashboard/customer-refertravel/customer-refertravel.module#CustomerRefertravelPageModule' },
  { path: 'customer-device-details', loadChildren: './CustomerDashboard/customer-device-details/customer-device-details.module#CustomerDeviceDetailsPageModule' },
  { path: 'customer-device-details-edit', loadChildren: './CustomerDashboard/customer-device-details-edit/customer-device-details-edit.module#CustomerDeviceDetailsEditPageModule' },
  { path: 'customer-daily-reports', loadChildren: './CustomerDashboard/customer-daily-reports/customer-daily-reports.module#CustomerDailyReportsPageModule' },
  { path: 'customer-send-mail', loadChildren: './CustomerDashboard/customer-send-mail/customer-send-mail.module#CustomerSendMailPageModule' },
  { path: 'customer-notifications', loadChildren: './CustomerDashboard/customer-notifications/customer-notifications.module#CustomerNotificationsPageModule' },
  { path: 'customer-forgetpass', loadChildren: './CustomerDashboard/customer-forgetpass/customer-forgetpass.module#CustomerForgetpassPageModule' },
  { path: 'customer-resetpassword', loadChildren: './CustomerDashboard/customer-resetpassword/customer-resetpassword.module#CustomerResetpasswordPageModule' },
  { path: 'servicecenter-daily-reports', loadChildren: './ServiceCenterDashboard/servicecenter-daily-reports/servicecenter-daily-reports.module#ServicecenterDailyReportsPageModule' },
  { path: 'servicecenter-dashboard', loadChildren: './ServiceCenterDashboard/servicecenter-dashboard/servicecenter-dashboard.module#ServicecenterDashboardPageModule' },
  { path: 'servicecenter-device-details', loadChildren: './ServiceCenterDashboard/servicecenter-device-details/servicecenter-device-details.module#ServicecenterDeviceDetailsPageModule' },
  { path: 'servicecenter-device-details-edit', loadChildren: './ServiceCenterDashboard/servicecenter-device-details-edit/servicecenter-device-details-edit.module#ServicecenterDeviceDetailsEditPageModule' },
  { path: 'servicecenter-forgetpass', loadChildren: './ServiceCenterDashboard/servicecenter-forgetpass/servicecenter-forgetpass.module#ServicecenterForgetpassPageModule' },
  { path: 'servicecenter-login', loadChildren: './ServiceCenterDashboard/servicecenter-login/servicecenter-login.module#ServicecenterLoginPageModule' },
  { path: 'servicecenter-notifications', loadChildren: './ServiceCenterDashboard/servicecenter-notifications/servicecenter-notifications.module#ServicecenterNotificationsPageModule' },
  { path: 'servicecenter-profile', loadChildren: './ServiceCenterDashboard/servicecenter-profile/servicecenter-profile.module#ServicecenterProfilePageModule' },
  { path: 'servicecenter-refertravel', loadChildren: './ServiceCenterDashboard/servicecenter-refertravel/servicecenter-refertravel.module#ServicecenterRefertravelPageModule' },
  { path: 'servicecenter-send-mail', loadChildren: './ServiceCenterDashboard/servicecenter-send-mail/servicecenter-send-mail.module#ServicecenterSendMailPageModule' },
  { path: 'servicecenter-send-sms', loadChildren: './ServiceCenterDashboard/servicecenter-send-sms/servicecenter-send-sms.module#ServicecenterSendSmsPageModule' },
  { path: 'servicecenter-resetpassword', loadChildren: './ServiceCenterDashboard/servicecenter-resetpassword/servicecenter-resetpassword.module#ServicecenterResetpasswordPageModule' },
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
