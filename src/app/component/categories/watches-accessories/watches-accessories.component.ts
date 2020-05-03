import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watches-accessories',
  templateUrl: './watches-accessories.component.html',
  styleUrls: ['./watches-accessories.component.css']
})
export class WatchesAccessoriesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  clickButton(){
    this.router.navigateByUrl('productinfo');
  }
}
