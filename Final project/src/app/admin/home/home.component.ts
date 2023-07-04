import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private log:LoginService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  logout(){
    this.log.logout();
    this.router.navigate(["/login"]);

  }

  nav(url:string){
    console.log(url);
    
    if(url=="")
    window.location.reload()
    else
    this.router.navigate([url]);
    // this.router.navigate([url])
  }

}
