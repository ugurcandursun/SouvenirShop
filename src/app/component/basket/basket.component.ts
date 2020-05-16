import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.css"],
})
export class BasketComponent implements OnInit {
  constructor(private router: Router) {}
  startDate: Date = new Date();
  endDate: Date = new Date();
  basketProducts: any = [];
  totalAmount: number = 0;

  ngOnInit(): void {
    debugger;
    console.log(this.startDate);
    this.endDate.setHours(this.endDate.getHours() + 300);
    console.log(this.endDate);

    this.basketProducts =
      JSON.parse(localStorage.getItem("productinBasket")) || [];
    this.basketProducts.forEach((element) => {
      this.totalAmount += element.Price;
    });
  }
  deleteBasketItem(item: any) {
    debugger;
    this.basketProducts = this.basketProducts.filter(
      (d) => d.ProductID != item.ProductID
    );
    localStorage.removeItem("productinBasket");
    localStorage.removeItem("basketproductlength");
    localStorage.setItem('productinBasket', JSON.stringify(this.basketProducts));
    localStorage.setItem('basketproductlength',this.basketProducts.length.toString());
    window.location.reload(); 
  }
  goPayment(){
    debugger;
    localStorage.setItem('grandTotal',this.totalAmount.toString());
    this.router.navigateByUrl("/payment");
  }
}
