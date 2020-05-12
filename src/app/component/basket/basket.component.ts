import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor() { }
  startDate:Date=new Date();
  endDate:Date=new Date();
  basketProducts:any=[];
  totalAmount:number=0;

  ngOnInit(): void {
    debugger;
    console.log(this.startDate);   
    this.endDate.setHours(this.endDate.getHours()+300);
    console.log(this.endDate);
  
   
   this.basketProducts = JSON.parse(localStorage.getItem('productinBasket')) || [];
    this.basketProducts.forEach(element => {
      this.totalAmount+=element.Price;
    });
    

  }
 
}
