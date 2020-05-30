import { Component, OnInit, DebugElement} from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  customers: any = [];
  products: any = [];
  ngOnInit(): void {
    this.http
      .get("http://localhost:57367/api/customer")
      .toPromise()
      .then((element) => {
        debugger;
        this.customers = element;
      });
      this.http
      .get("http://localhost:57367/api/product")
      .toPromise()
      .then((element) => {
        debugger;
        this.products = element;
      });
      
    }
  
}
