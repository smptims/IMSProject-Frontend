

//--All SQL Tables query--//

CREATE TABLE `SMPTIMS_APP`.`admin_noifications` (
  `admin_notify_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `text_notify` varchar(45) NOT NULL,
  `image_notify` varchar(45) NOT NULL,
  `notify_subject` varchar(45) NOT NULL,
  `notify_start_dt` date NOT NULL,
  `notify_end_dt` date NOT NULL,
  `notify_status` varchar(45) NOT NULL,
  `rec_create_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_create_user` varchar(45) DEFAULT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`admin_notify_seq_no`)
);

CREATE TABLE `SMPTIMS_APP`.`admin_refer_travel` (
  `admin_refer_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `user_type` varchar(45) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `refered_to` varchar(45) NOT NULL,
  `refered_phone_no` int(10) NOT NULL,
  `refered_location` varchar(45) NOT NULL,
  `refered_date` date NOT NULL,
  `rec_create_dt` timestamp(6) NOT NULL,
  `rec_create_user` varchar(45) NOT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`admin_refer_seq_no`)
);

CREATE TABLE `SMPTIMS_APP`.`admin_send_mail` (
  `mail_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `mail_from` varchar(45) NOT NULL,
  `mail_to` varchar(45) NOT NULL,
  `mail_subject` varchar(45) NOT NULL,
  `mail_discription` varchar(45) NOT NULL,
  `mail_send_dt` date DEFAULT NULL,
  `rec_create_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_create_user` varchar(45) DEFAULT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`mail_seq_no`)
);

CREATE TABLE `SMPTIMS_APP`.`admin_send_sms` (
  `sms_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `sms_from` varchar(45) NOT NULL,
  `sms_to` int(11) NOT NULL,
  `sms_discription` varchar(45) NOT NULL,
  `sms_send_dt` timestamp(6) NOT NULL,
  `rec_create_dt` timestamp(6) NOT NULL,
  `rec_create_user` varchar(45) NOT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`sms_seq_no`)
);

CREATE TABLE `SMPTIMS_APP`.`admin_users` (
  `au_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone_no` bigint(11) NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  `rec_create_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_create_user` varchar(45) DEFAULT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`au_seq_no`)
) ;

CREATE TABLE `SMPTIMS_APP`.`app_users_login` (
  `au_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `user_type` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `login_time` timestamp(6) NOT NULL,
  `logout_time` timestamp(6) NOT NULL,
  `status` varchar(45) NOT NULL,
  `rec_create_dt` timestamp(6) NOT NULL,
  `rec_create_user` varchar(45) NOT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`au_seq_no`)
) ;


CREATE TABLE `SMPTIMS_APP`.`customer_users` (
  `cust_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `customer_no` int(11) NOT NULL,
  `customer_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `customer_img` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `phone_no` bigint(11) NOT NULL,
  `address` varchar(400) DEFAULT NULL,
  `location` varchar(45) NOT NULL,
  `pincode_zip_cd` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `status` varchar(45) NOT NULL,
  `rec_create_dt` timestamp(6) NOT NULL,
  `rec_create_user` varchar(45) NOT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cust_seq_no`)
);

CREATE TABLE `SMPTIMS_APP`.`app_users_login` (
  `au_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `user_type` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `login_time` timestamp(6) NOT NULL,
  `logout_time` timestamp(6) NOT NULL,
  `status` varchar(45) NOT NULL,
  `rec_create_dt` timestamp(6) NOT NULL,
  `rec_create_user` varchar(45) NOT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`au_seq_no`)
);

CREATE TABLE `SMPTIMS_APP`.`customer_users` (
  `cust_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `customer_no` int(11) NOT NULL,
  `customer_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `customer_img` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `phone_no` bigint(11) NOT NULL,
  `address` varchar(400) DEFAULT NULL,
  `location` varchar(45) NOT NULL,
  `pincode_zip_cd` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `status` varchar(45) NOT NULL,
  `rec_create_dt` timestamp(6) NOT NULL,
  `rec_create_user` varchar(45) NOT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cust_seq_no`)
) ;


CREATE TABLE `SMPTIMS_APP`.`device_installed_daily_rpt` (
  `didr_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `customer_no` int(11) NOT NULL,
  `customer_name` varchar(45) NOT NULL,
  `device_no` varchar(45) NOT NULL,
  `vehicle_regd_no` varchar(45) NOT NULL,
  `device_install_dt` date NOT NULL,
  `warrenty_dt` timestamp(6) NOT NULL,
  `device_installed_srvc_username` varchar(45) NOT NULL,
  `installation_verified_by_custname` varchar(45) NOT NULL,
  `installed_location` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `rec_create_dt` timestamp(6) NOT NULL,
  `rec_create_user` varchar(45) NOT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`didr_seq_no`)
);

CREATE TABLE `SMPTIMS_APP`.`device_installed_dtls` (
  `did_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `pcsd_seq_no` int(11) NOT NULL,
  `customer_no` int(11) NOT NULL,
  `device_no` int(11) NOT NULL,
  `vehicle_regd_no` varchar(45) NOT NULL,
  `vehicle_location` varchar(45) NOT NULL,
  `installed_by_sc_emp_no` int(11) NOT NULL,
  `installed_date_time` timestamp(6) NOT NULL,
  `installation_verified_by` int(11) NOT NULL,
  `warranty_dt` timestamp(6) NULL DEFAULT NULL,
  `status` varchar(45) NOT NULL,
  `rec_create_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_create_user` varchar(45) NOT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`did_seq_no`)
);


CREATE TABLE `SMPTIMS_APP`.`device_installed_hist_rpt` (
  `dihr_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `didr_seq_no` int(11) NOT NULL,
  `customer_no` int(11) NOT NULL,
  `customer_name` varchar(45) NOT NULL,
  `device_no` varchar(45) NOT NULL,
  `vehicle_regd_no` varchar(45) NOT NULL,
  `device_install_dt` date NOT NULL,
  `device_install_by` varchar(45) NOT NULL,
  `warrenty_dt` timestamp(6) NOT NULL,
  `installation_verified_by` varchar(45) NOT NULL,
  `installed_location` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `rec_create_dt` timestamp(6) NOT NULL,
  `rec_create_user` varchar(45) NOT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`dihr_seq_no`)
) 

CREATE TABLE `SMPTIMS_APP`.`product_order_dtls` (
  `pcsd_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `customer_no` int(11) NOT NULL,
  `prod_code` varchar(45) NOT NULL,
  `device_no` varchar(45) NOT NULL,
  `manuf_dt` timestamp(6) NOT NULL,
  `sale_dt` timestamp(6) NOT NULL,
  `warranty_dt` timestamp(6) NOT NULL,
  `warranty_period` varchar(45) NOT NULL,
  `service_required` varchar(45) NOT NULL,
  `next_service_dt` date NOT NULL,
  `status` varchar(45) NOT NULL,
  `rec_create_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_create_user` varchar(45) DEFAULT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`pcsd_seq_no`)
)

CREATE TABLE `SMPTIMS_APP`.`product_order_smry` (
  `css_seq_no` bigint(200) NOT NULL AUTO_INCREMENT,
  `customer_no` int(200) NOT NULL,
  `invoice_no` int(100) NOT NULL,
  `invoice_dt` date NOT NULL,
  `invoice_amt` int(100) NOT NULL,
  `amt_paid_f` varchar(1) NOT NULL,
  `sale_dt` date NOT NULL,
  `no_of_devices_sold` int(100) NOT NULL,
  `purchase_order_copy` varchar(45) NOT NULL,
  `status` varchar(10) NOT NULL,
  `rec_create_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_create_user` varchar(45) DEFAULT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`css_seq_no`)
) 


CREATE TABLE `SMPTIMS_APP`.`product_tech_dtls` (
  `prod_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `prod_code` varchar(45) NOT NULL,
  `device_no` varchar(45) NOT NULL,
  `manuf_dt` date NOT NULL,
  `IRD_no` varchar(45) NOT NULL,
  `IVR_no` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `rec_create_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_create_user` varchar(45) DEFAULT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`prod_seq_no`)
)

CREATE TABLE `SMPTIMS_APP`.`service_center_users` (
  `sc_seq_no` int(11) NOT NULL AUTO_INCREMENT,
  `sc_emp_no` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `customer_name` varchar(45) NOT NULL,
  `company_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone_no` bigint(11) NOT NULL,
  `address` varchar(400) DEFAULT NULL,
  `location` varchar(45) NOT NULL,
  `pincode_zip` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `status` varchar(45) NOT NULL,
  `rec_create_dt` timestamp(6) NOT NULL,
  `rec_create_user` varchar(45) NOT NULL,
  `rec_updt_dt` timestamp(6) NULL DEFAULT NULL,
  `rec_updt_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`sc_seq_no`)
) 

CREATE TABLE `SMPTIMS_APP`.`user_dashboard` (
  `user_code` varchar(45) NOT NULL,
  `user_type` varchar(45) NOT NULL,
  PRIMARY KEY (`user_code`)
)



BEGIN
 declare 
 tmp_no bigint(99);
   select cust_seq_no into tmp_no from customer_users order by cust_seq_no desc limit 1;
  set NEW.CUSTOMER_NO =  tmp_no + 1;
END





