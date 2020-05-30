import { Component, OnInit, DebugElement} from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  products: any = [];
  productID
  ngOnInit(): void {
    this.http
      .get("http://localhost:57367/api/product")
      .toPromise()
      .then((element) => {
        debugger;
        this.products = element;
      });
    
  }
  //insert
  clickInsert($event,product:any) {
   this.router.navigate(["/productprocess"]);
  }
//update
clickUpdate($event,pID:any) {
    this.productID=pID;
    localStorage.setItem("productID",this.productID);
    this.router.navigate(["/productprocess"]);
 }
 
//delete
clickDelete($event,product:any) {
  
  this.http.delete("http://localhost:57367/api/product/"+product.ProductID)
  .toPromise()
      .then((element) => {
        debugger;
        this.router.navigate(["admin-product"]);
      });
  
}




}
