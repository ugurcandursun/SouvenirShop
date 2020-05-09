import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }
  products:any=[];
  
  ngOnInit(): void {


    this.http.get("http://localhost:57367/api/product").toPromise().then(element=>{
    this.products=element;
    
    })
  }
  clickButton(){
    this.router.navigateByUrl('productinfo');
  }
}
