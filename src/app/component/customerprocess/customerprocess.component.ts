import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as CryptoJS from "crypto-js";
import { ToastrService } from 'ngx-toastr';
import { AuthencationService } from '../authencation/authencation.service';
import { EncryptionService } from '../authencation/encryption.service';
@Component({
  selector: 'app-customerprocess',
  templateUrl: './customerprocess.component.html',
  styleUrls: ['./customerprocess.component.css']
})
export class CustomerprocessComponent implements OnInit {

  constructor(private httpClinet: HttpClient,
    private router: Router,private toastr: ToastrService,private authencationService:AuthencationService,
    private encryptionService:EncryptionService) { }
  customer = {
    id: 0,
    Name: "",
    Surname: "",
    Email_Address: "",
    IsLogin:false,
    isAdmin:false,
    Password: "",
  };
  readonly rootURL = "http://localhost:57367/api";
  secretKey = "YourSecretKeyForEncryption&Descryption";
  allCustomer;
  isLoginError: boolean = false;
  errorMessage: String;
  flag:boolean=false;
  ngOnInit(): void {
    this.authencationService.getAllUser().subscribe(data=>{
      this.allCustomer = data;
    });
  }
  addDb(){
    debugger;
    if(this.customer.Password==""||this.customer.Email_Address==""||this.customer.Surname==""||this.customer.Name=="")
    {
          this.toastr.error("Please fill in the blank fields",
          "Error!")       
    }
    else{
      this.flag=false;
      this.allCustomer.forEach((element) => {
        
        if(!this.flag)
        {
          
          if (element.Email_Address === this.customer.Email_Address) {
            this.toastr.error(
              "You already have an account,Please login!",
              "Warning"
            );
            this.flag=true;
          } else {
            this.customer.Password = this.encryptionService.encryptData(this.customer.Password);
            debugger;
            this.authencationService.addUser(this.customer).subscribe(data=>{
              
            })
            this.toastr.success("Register is successful", "Message");
            this.router.navigate(["/admin-customer"]);
          }
        }
        
      });
    }
    

  }
  encryptData(data) {
    try {
      return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        this.secretKey
      ).toString();
    } catch (e) {
      console.log(e);
    }
  }
  decryptData(data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, this.secretKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
