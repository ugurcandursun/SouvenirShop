import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer=
  {id: 0, 
    Name: '',
    Surname:'',
    Email_Address: '', 
    
    IsLogin:false,
    Password: ''};



    
  
  constructor(private httpClinet: HttpClient) {   }

  ngOnInit() {
    this.httpClinet.get('http://localhost:57367/api/customers')
    .subscribe(
      (respose) => {
        debugger;
      console.log(respose);
       }
    );

    console.log(this.customer);
  }
  savecustomer(){
    
    
    this.httpClinet.post('http://localhost:57367/api/customer',this.customer)
    .subscribe(
      (respose) => {
       
       }
    );
    
  }
}
