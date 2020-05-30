import { Component, OnInit, DebugElement} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-productprocess',
  templateUrl: './productprocess.component.html',
  styleUrls: ['./productprocess.component.css']
})
export class ProductprocessComponent implements OnInit {
  
  product=
  { 
    averageCustomerRating: 3,
    ProductDescription: '',
    price: null,
    type: '', 
    imageURL: 'assets/pen.jpg',
    color: '',
    gender: ''}
  
    productID;
    constructor(private http: HttpClient,
      private router: Router,
      private route: ActivatedRoute) {
        if(localStorage.getItem("productID"))
        {
          this.productID=localStorage.getItem("productID");
        } 
      }
 
  ngOnInit() {
    
    this.http.get('http://localhost:57367/api/product')
    .toPromise()
    .then((id) => {
        debugger;
        this.productID = id;
      }
    );
    

    console.log(this.product);
  }

    addDb()
    {
      debugger;
      this.http.post('http://localhost:57367/api/product',this.product)
      .toPromise()
      .then((element) => {
        debugger;
      });
      this.router.navigate(["/admin-product"]);
     
    }
    updateDb(product:any){
      debugger;
      this.http.put("http://localhost:57367/api/product/"+this.productID,product)
      .toPromise()
      .then((element) => {
              
        debugger;
      });
      this.router.navigate(["/admin-product"]);
    }
    
   
   

}
