export interface DeviceDetailsType {	
	"did_seq_no": 				number;  
    "pcsd_seq_no": 				number;  
	"customer_no": 				number;  
	"device_no": 				string;  
	"vehicle_regd_no": 			string;  
	"vehicle_location":			string;   
	"installed_by_sc_emp_no":	string;   
	"installed_date_time":		string;   
    "installation_verified_by": string; 
    "warranty_dt":              string;  
	"status": 					string;   
	"rec_create_dt": 			string; 
	"rec_create_user": 			string; 
	"rec_updt_dt": 				string;  
	"rec_updt_user": 			string; 
 }

 export interface customerUsersType {
    "cust_seq_no": number;
    "customer_no": number;
    "customer_name": string;
    "password": string;
    "customer_img": string;
    "email": string;
    "phone_no": string | number;
    "address": string;
    "location": string;
    "pincode_zip_cd": string | number;
    "country": string;
    "status": string;
    "rec_create_dt": string;
    "rec_create_user": string;
    "rec_updt_dt": string;
    "rec_updt_user": string;
};

export interface serviceCenterUsersType {
    "sc_seq_no": number;
    "sc_emp_no": string;
    "username": string;
    "customer_name": string;
    "company_name": string;
    "password": string;
    "email": string;
    "phone_no": number;
    "address": string;
    "location": string;
    "pincode_zip": string;
    "country": string;
    "status": string;
    "rec_create_dt": string;
    "rec_create_user": string;
    "rec_updt_dt": string;
    "rec_updt_user": string;
};

export interface referTravelsType{
    "rt_seq_no": number;
    "customer_no": number;
    "travels_name": string;
    "email": string;
    "phone_no": number;
    "location": string; 
    "rec_create_dt": string;
    "rec_create_user": string;
    "rec_updt_dt": string;
    "rec_updt_user": string;        
  }

export interface deviceInstalledStatusRptType {
    "start_dt": string;
    "end_dt": string;
    "status": string; 
}

export interface sendMailType {
    "fromemail": string;
    "toemail": string;
    "subject": string;
    "message": string;
    "attachment": string;
}

export interface adminProfileType {
    "au_seq_no": number;
    "username": string;
    "password": string;
    "email": string;
    "phone_no": number | string;
    "status": string;
    "rec_create_dt": string;
    "rec_create_user": string
    "rec_updt_dt": string;
    "rec_updt_user": string;
};

export interface customerProfileType {
    "cust_seq_no": number;
    "customer_no": number;
    "customer_name": string;
    "password": string;
    "customer_img": string;
    "email": string;
    "phone_no": number | string;
    "address": string;
    "location": string;
    "pincode_zip_cd": string;
    "country": string;
    "status": string;
    "rec_create_dt": string;
    "rec_create_user": string
    "rec_updt_dt": string;
    "rec_updt_user": string;
};


export interface serviceCenterProfileType {
    "sc_seq_no": number;
    "sc_emp_no": string;
    "username": string;
    "customer_name": string;
    "company_name": string;
    "password": string;
    "email": string;
    "phone_no": number | string;
    "address": string;
    "location": string;
    "pincode_zip": string;
    "country": string;
    "status": string;
    "rec_create_dt": string;
    "rec_create_user": string
    "rec_updt_dt": string;
    "rec_updt_user": string;
};


export interface CustomerDeviceDetailsType {	
	"did_seq_no": 				number;  
    "pcsd_seq_no": 				number;  
	"customer_no": 				number;  
	"device_no": 				string;  
	"vehicle_regd_no": 			string;  
	"vehicle_location":			string;   
	"installed_by_sc_emp_no":	string;   
	"installed_date_time":		string;   
    "installation_verified_by": string; 
    "warranty_dt":              string;  
	"status": 					string;   
	"rec_create_dt": 			string; 
	"rec_create_user": 			string; 
	"rec_updt_dt": 				string;  
	"rec_updt_user": 			string; 
 }