import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router,private toastr:ToastrService) { }

  flag:boolean=false;
  address={
    label1:"",
    label2:"",
    city:"",
    country:""
  }
  card={
    CardNumber:"",
    CardholderName:"",
    StartDate:"",
    ExpirationDate:"",
    CVV:""

  }
  grandtotal;
  ngOnInit(): void {
    debugger;
    this.grandtotal=localStorage.getItem("grandTotal");
    
  }
  confirmPayment(){
    if(this.card.CVV==""||this.card.CardholderName==""||this.card.ExpirationDate==""||this.card.StartDate==""||this.address.city==""||this.address.country==""||this.address.label1=="")
    {
      this.toastr.error("Please fill in the blank fields",
        "Error!")
    }
    else{
      this.toastr.success("Your order has been successfully received","Successful");
      this.router.navigate(["/home"]);
    }
  }
}
