import { Component, OnInit, DebugElement} from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthencationService } from '../authencation/authencation.service';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient,private authencationService:AuthencationService) {}
  customers: any = [];
 
  ngOnInit(): void {
    this.authencationService.getAllUser().subscribe(data=>{
      this.customers = data;
    });
    
  }
  //insert
  clickAdd($event,customer:any) {
  // this.router.navigate(["/"]);
  this.router.navigate(["/customer-process"])
  }
//update

//delete
clickDelete($event,customer:any) {
  debugger;
  this.authencationService.deleteUser(customer)
  .subscribe((element) => {
          this.customers=this.customers.filter(d=>d.UserID!==customer.UserID);
      });
  
}




}
