import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  error?: string;
  status: boolean = false;


  userResponce: any;

  



  // Register Variables

  rusername: string = "";
  rpassword: string = "";
  vpassword: string = "";
  remail: string = "";
  rerror?: string;
  rstatus: boolean = false
  rusertype: string = "1"

  // Common variables

  logform: boolean = true;
  constructor(private log: LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  checkIt() {

  }
  toggle() {
    this.logform = this.logform ? false : true;
  }

  login(): void {


    if (false) {
      // this.route.navigate(['admin/home']);
      this.route.navigate(['user/home']);
    } else {
      this.error = "";
      if (this.email.length == 0 || this.password.length == 0)
        this.error = "Fill all the fields";
      else {
        this.status = true;
        this.log.login(this.email, this.password).subscribe(
          {
            next: (response: Array<any>) => {
              console.log(response);

              response.map(item => {
                if (item.email === this.email && item.password === this.password) {
                  this.userResponce = item;
                } else {
                  this.error = "Invalid Credentials";
                }
              })

              if (this.userResponce) {
                localStorage.setItem("email", this.userResponce.email);
                localStorage.setItem("password", this.userResponce.password);
                localStorage.setItem("username", this.userResponce.username);
                localStorage.setItem("type", this.userResponce.type);
                
              }

              if (this.userResponce.type == "admin")
                this.route.navigate(['admin/home']);
              else
                this.route.navigate(['user/home']);
            },

           error: () => {
              this.error = "Invalid Credentials";
              this.status = false;
            }
          }
        )
      }

    }

  }

  //new User Registration 

  register(): void {
    this.rerror = "";
    let emailregex: RegExp = /^[a-z][a-z0-9_\.]+@[a-z]{2,5}\.[a-z]{3,5}$/


    if (this.rusername.length == 0 || this.rpassword.length == 0 || this.vpassword.length == 0) {

      this.rerror = "Fill all the fields";
    }

    else if (this.rusername.length < 4) {
      this.rerror = "Username should be atleast 4 charectars long"
    }

    else if (this.rpassword.length < 6) {
      this.rerror = "password should be atleast 6 charectars long"
    }
    else if (this.rpassword != this.vpassword) {
      this.rerror = "Username and password should match"
    }
    else if (!emailregex.test(this.remail)) {
      this.rerror = "not in email format"
    }


    else {
      this.rstatus = true;
      let obj = { username: this.rusername, password: this.rpassword, type: "admin", email: this.remail }
      console.log(obj, "kjb")
      this.log.login("","").subscribe({
        next: (result: any) => {
          let exist = false;
          if(result.length !=0){
            result.map((item:any) => {
              if(item.email == obj.email){
                exist = true
              }
            })
            if (exist) {
            alert("User already exists")
            } else {
            this.log.register(obj).subscribe({
              next:(res:any) => {
            alert("User successfully registered");
                 this.logform = true;
                this.rstatus = false;
              }
            })

            }
          }
        },

        error: () => {
          alert("There is problem , Please try again or later")
          this.rstatus = false;
        }
      }
      )
    }

  }


}
