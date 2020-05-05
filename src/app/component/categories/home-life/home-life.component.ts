import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-life',
  templateUrl: './home-life.component.html',
  styleUrls: ['./home-life.component.css']
})
export class HomeLifeComponent implements OnInit {

  constructor(private router:Router) { }
  optionsSelect;
  ngOnInit(): void {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
  }
  clickButton(){
    this.router.navigateByUrl('productinfo');
  }
  denemetwo=[];
  deneme=[{
    name:"small",
    checked:false
  },
  {
    name:"medium",
    checked:false
  },
  {
    name:"large",
    checked:false
  }]
  isChecked($event,item){
    
    item.checked=true;
  
    this.try();
    this.denemetwo.forEach(d=>{
      
    })

  }
  try()
  {
    this.denemetwo=this.deneme.filter(
      p => p.checked==true
    )
  }
 
}
