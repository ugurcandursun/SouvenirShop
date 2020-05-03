import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoe-bag',
  templateUrl: './shoe-bag.component.html',
  styleUrls: ['./shoe-bag.component.css']
})
export class ShoeBagComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  clickButton(){
    this.router.navigateByUrl('productinfo');
  }
}
