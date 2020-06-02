import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import * as CryptoJS from "crypto-js";
import { toTypeScript } from "@angular/compiler";
import { AuthencationService } from '../authencation.service';
import { EncryptionService } from '../encryption.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  readonly rootURL = "http://localhost:57367/api";
  customer = {
    id: 0,
    Name: "",
    Surname: "",
    Email_Address: "",
    IsLogin: false,
    isAdmin:false,
    Password: "",
  };

  allCustomer;
  customerID;

  isLoginError: boolean = false;
  errorMessage: String;
  flag:boolean=false;
  constructor(
    private httpClinet: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private authencationService:AuthencationService,private encryptionService:EncryptionService
    
  ) {}
  secretKey = "YourSecretKeyForEncryption&Descryption";
  ngOnInit() {  
   this.authencationService.getAllUser().subscribe(data=>{
    this.allCustomer = data;
  });
  
  }
  
  savecustomer() {
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
            this.authencationService.addUser(this.customer).subscribe(data=>{
              
            })
            this.toastr.success("Register is successful", "Message");
            this.router.navigate(["/login"]);
          }
        }
        
      });
    }
    
  }
}
