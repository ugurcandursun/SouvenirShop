import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, throwError } from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
interface myData{
  obj:Object
}
@Injectable({
  providedIn: 'root'
})

export class AuthencationService {

  constructor(private httpClinet: HttpClient,
    private router: Router,
    private toastr: ToastrService) { }
    readonly rootURL = "http://localhost:57367/api";
    data = {};

    getAllUser() 
    {
      return this.httpClinet.get<myData>(this.rootURL+"/user");
    }
    addUser(customer){
      return this.httpClinet
      .post<myData>(this.rootURL + "/user", customer);
    }
    login(customer){
      return this.httpClinet.put<myData>(this.rootURL + "/user/"+customer.UserID,customer);
    }
    deleteUser(customer){
      return this.httpClinet.delete<myData>(this.rootURL + "/user/"+customer.UserID,customer.UserID);
    }
    getUser(userID)
    {    
      return this.httpClinet.get<myData>(this.rootURL+"/user/"+userID);
    }
    logout(userID)
    {      
     return this.getUser(userID).subscribe(data=>{
      this.login(data).subscribe((response) => {
        
        
      });
    });
    }
   
   
    
    
}
