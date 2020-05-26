import { Component, OnInit, DebugElement} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-productprocess',
  templateUrl: './productprocess.component.html',
  styleUrls: ['./productprocess.component.css']
})
export class ProductprocessComponent implements OnInit {
  productID;
  product=
  { pID: 10, 
    averageCustomerRating: 3,
    ProductDescription: '',
    price: null,
    type: '', 
    imageURL: 'assets/pen.jpg',
    color: '',
    gender: ''}
    
  constructor(private http: HttpClient) {}
 
 
  ngOnInit() {
    this.productID=localStorage.getItem('productID');
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
     
    }
    updateDb(){
      debugger;
      this.http.put("http://localhost:57367/api/product/"+this.productID,this.product)
      .toPromise()
      .then((element) => {
        this.product.pID=this.productID;
        debugger;
      });
     
    }
    
   
   

}
