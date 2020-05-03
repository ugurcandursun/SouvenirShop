import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  readonly rootURL = "http://localhost:57367/api";
  customer = {
    id: 0,
    Name: "",
    Surname: "",
    Email_Address: "",

    IsLogin: false,
    Password: "",
  };

  allCustomer;
  customerID;

  isLoginError: boolean = false;
  errorMessage: String;
  constructor(
    private httpClinet: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.httpClinet.get(this.rootURL + "/customer").subscribe((response) => {
      this.allCustomer = response;
    });

    console.log(this.customer);
  }
  savecustomer() {
    debugger;
    this.allCustomer.forEach((element) => {
      if (element.Email_Address === this.customer.Email_Address) {
        if (element.Password === this.customer.Password) {
          this.customerID = element.CustomerID;
          this.customer = element;
          this.customer.IsLogin = true;
          this.isLoginError = false;
          this.httpClinet
            .put(
              this.rootURL + "/customer" + "/" + this.customerID,
              this.customer
            )
            .subscribe((response) => {
              debugger;
              console.log(response);
            });
          this.toastr.success(
            this.customer.Name + " " + this.customer.Surname,
            "Welcome!"
          );
          this.router.navigateByUrl("");
        } else {
          this.errorMessage = "Please check the information entered";
          this.isLoginError = true;
        }
      } else {
        this.errorMessage = "Please,firstly register!";
        this.isLoginError = true;
      }
    });

    console.log(this.customerID);
  }
}
