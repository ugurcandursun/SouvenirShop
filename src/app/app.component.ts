import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "eShopSPA";
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
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    if (localStorage.getItem("dataSource")) {
      this.deneme = true;
    }
    if(localStorage.getItem("basketproductlength"))
    {
      this.isBasketHaveProduct=true;
      this.basketLength=localStorage.getItem("basketproductlength");
    }
    
  }
  isBasketHaveProduct:boolean=false;
  basketLength;
  deneme: boolean = false;
  ngOnInit() {
    this.httpClinet.get(this.rootURL + "/customer").subscribe((response) => {
      this.allCustomer = response;
    });
  }
  logout(){
    debugger;
    localStorage.removeItem("dataSource");
    this.deneme=false;
    this.router.navigate(['/home']);
  }
}
