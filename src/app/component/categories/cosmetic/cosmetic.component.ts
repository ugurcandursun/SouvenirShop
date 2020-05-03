import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cosmetic',
  templateUrl: './cosmetic.component.html',
  styleUrls: ['./cosmetic.component.css']
})
export class CosmeticComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  clickButton(){
    this.router.navigateByUrl('productinfo');
  }
}
