import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  clickButton(){
    this.router.navigateByUrl('productinfo');
  }
}
