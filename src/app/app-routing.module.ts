import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
  { path: 'daily-reports', loadChildren: './daily-reports/daily-reports.module#DailyReportsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
