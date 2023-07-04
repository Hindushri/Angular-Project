import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 httpOptions:any;
 username:String='';
 usertype:String='';
 token:any='';
 email:any='';
 status:boolean=false;
  constructor(private http:HttpClient) {
      let username=sessionStorage.getItem("username");
      let usertype=sessionStorage.getItem("usertype");
      let token=sessionStorage.getItem("token");
      let email=sessionStorage.getItem("email");
      if(username&&usertype){
        this.status=true;
        this.username=username;
        this.usertype=usertype;
        this.token=token;
        this.email=email;
      }
   }

 

  // To Register a User
  register(obj:any):Observable<any>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
    } 

    return this.http.post("http://localhost:4500/users",obj,this.httpOptions);
  }

  //To check avalailability of mail id and username

  check(str:any):Observable<object>{
    return this.http.get("http://localhost:4500/users?firstname="+str,this.httpOptions);
  }

// to Login
  login(email:any,password:any):any{
 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    return this.http.get<any>("http://localhost:4500/users")
    
  }

  logout():void{
     this.token="";
     this.username="";
     this.usertype="";
     localStorage.clear();
    
     sessionStorage.removeItem("token");
     sessionStorage.removeItem("username");
     sessionStorage.removeItem("usertype");
     sessionStorage.removeItem("email");
  }
}