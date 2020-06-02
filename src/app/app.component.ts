import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthencationService } from './component/authencation/authencation.service';

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
    private route: ActivatedRoute,
    private authencationService:AuthencationService
  ) {
    if (localStorage.getItem("dataSource")) {
      this.deneme = true;
      var Id:number=+localStorage.getItem("dataSource");
      this.authencationService.getUser(Id).subscribe(d=>{
      debugger;
      if(d["isAdmin"]==true)
      {
        this.isAdmin=true;
      }
      
        
      })
    }
    if(localStorage.getItem("basketproductlength"))
    {
      this.isBasketHaveProduct=true;
      this.basketLength=localStorage.getItem("basketproductlength");
    }
    
  }
  isBasketHaveProduct:boolean=false;
  basketLength;
  isAdmin:boolean=false;
  deneme: boolean = false;
  exchangeDolar;
  ngOnInit() {
    this.authencationService.getAllUser().subscribe(data=>{
      this.allCustomer = data;
    });
    this.httpClinet.get("http://localhost:57367/api/currency").subscribe(data=>{
      this.exchangeDolar=data;
    })
  }
  logout(){
    debugger;
    var Id:number=+localStorage.getItem("dataSource");
    this.authencationService.logout(Id);
    this.deneme=false;
   
    localStorage.removeItem("dataSource");
    //this.router.navigate(['/home']);
  }
}
