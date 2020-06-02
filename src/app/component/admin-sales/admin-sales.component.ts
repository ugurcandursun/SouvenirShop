import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, filter } from "rxjs/operators";
@Component({
  selector: 'app-admin-sales',
  templateUrl: './admin-sales.component.html',
  styleUrls: ['./admin-sales.component.css']
})
export class AdminSalesComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  allproducts: any = [];
  products: any = [];
  users: any = [];
 
  productID;
  selectedValue="";
  salesDetail=[

  ];
  totalSales:number=0;
  ngOnInit(): void {
    this.http
      .get("http://localhost:57367/api/sales")
      .toPromise()
      .then((element) => {
        this.allproducts=element;
        
        this.allproducts.forEach(value => {
          debugger;
          console.log(value.Products["ProductID"]);
          var sales={
            ProductDescription:value.Products["ProductDescription"],
            ImageURL:value.Products["ImageURL"],
            Color:value.Products["Color"],
            Type:value.Products["Type"],
            Price:value.Products["Price"],
            Rating:value.Products["AverageCustomerRating"],
            CustomerName:value.Users["Name"],
            CustomerSurname:value.Users["Surname"],
            CustomerEmail:value.Users["Email_Address"],
            SalesDate:value.DateofSale,
            Howmanyproductssold:value.Howmanyproductssold
            
          }
          this.totalSales+=value.Products["Price"];
          this.salesDetail.push(sales);
          
        });
      
      });
  }
 //insert
 clickInsert($event,product:any) {
  this.router.navigate(["/productprocess"]);
 }
//update
clickUpdate($event,product:any) {

 localStorage.setItem('updateProduct', JSON.stringify(product));
   
   this.router.navigate(["/productprocess"]);
}

//delete
clickDelete($event,product:any) {
 
 this.http.delete("http://localhost:57367/api/product/"+product.ProductID)
 .toPromise()
     .then((element) => {
       
       this.router.navigate(["admin"]);
     });
 
}
onChange(deviceValue:any) {
 this.products=this.allproducts.filter(d=>d.Type===deviceValue)


}




}

