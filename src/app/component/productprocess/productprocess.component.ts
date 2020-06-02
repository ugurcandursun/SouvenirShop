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
  
    updateProduct={};
 
    isAdd:boolean=true;
    constructor(private http: HttpClient,
      private router: Router,
      private route: ActivatedRoute) {
        
      }
 
  ngOnInit() {
    
    
      this.updateProduct={};
      if(localStorage.getItem("updateProduct"))
      {
        debugger;
        this.updateProduct=JSON.parse(localStorage.getItem("updateProduct")) || [];
        this.isAdd=false;
       
      } 
    console.log(this.product);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    localStorage.removeItem("updateProduct");
  }
  
    addDb()
    {
      
    
      
      this.updateProduct["AverageCustomerRating"]=0;
      this.updateProduct["ProductID"]=0;
      console.log(this.updateProduct)
      this.http.post('http://localhost:57367/api/product',this.updateProduct)
      .subscribe(element => {
        debugger;
      });
      this.router.navigate(["/admin"]);
     
    }
      updateDb(product:any){
        debugger;
        this.http.put("http://localhost:57367/api/product/"+this.updateProduct["ProductID"],this.updateProduct)
        .toPromise()
        .then((element) => {
          
          debugger;
        });
        this.router.navigate(["/admin-product"]);
      }
    
   
   

}
