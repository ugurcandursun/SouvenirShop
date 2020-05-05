import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router,private route: ActivatedRoute) { }
  deneme:boolean=false;
  ngOnInit(): void {
    
    if(localStorage.getItem('data')=="1")
    {
      window.location.reload();
      localStorage.removeItem('data');
    }
  
    
  }


  clickButton(){
    this.router.navigateByUrl('productinfo');

    
  }
}
