import { Component, OnInit, DebugElement } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthencationService } from '../authencation/authencation.service';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient,private authencationService:AuthencationService) {}

  customers: any = [];
  products: any = [];
  isCustomer = false;
  isProduct = true;
  isSale=false;
  ngOnInit(): void {
    
      this.authencationService.getAllUser().subscribe(data=>{
        this.customers = data;
      });
    this.http
      .get("http://localhost:57367/api/product")
      .toPromise()
      .then((element) => {
        this.products = element;
      });
  }
  goCostomerAdminPage() {
    debugger;
    this.isProduct = false;
    this.isCustomer = true;
    this.isSale=false;
  }
  goProductAdminPage() {
    this.isProduct = true;
    this.isCustomer = false;
    this.isSale=false;
  }
  goSalesAdminPage() {
    this.isProduct = false;
    this.isCustomer = false;
    this.isSale=true;
  }
}
