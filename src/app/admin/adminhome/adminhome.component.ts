import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';





@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  products:any = {
    totalUserCount : 0,
    totalOrderList: 0,
    totalUserOrder:0,
    wishlist:0,
    totalQuantity:0,

  };

  constructor(private ps:ProductService, private router:Router,private log:LoginService,private route:ActivatedRoute) { }

  ngOnInit(): void {


    this.ps.userList().subscribe( {
      next: (data:any)=>{        
        this.products.totalUserCount =  data.length
        console.log(data.length,"jgc")
        
      },
      error: ()=> this.products = {}
     }
    )

    this.ps.purchaseListdetails().subscribe( {
      next: (data:any)=>{
    this.products.totalUserOrder =  data.length

    data.map((item:any) =>{
    this.products.wishlist += item.WishListData.length ;
    this.products.totalOrderList += item.OrderData.length ;
    item.OrderData.map((i:any) => {
      console.log(i);
      this.products.totalQuantity += Number(String(i.qty).trim());
      console.log(this.products.totalQuantity);
      
    })
    })

      },
      error: ()=> this.products = {}
     }
    )
  }

  logout(){
    this.log.logout();
    this.router.navigate(["/login"]);

  }

  nav(url:string){
    if(url=="")
    window.location.reload()
    else
    this.router.navigate([url]);
    // this.router.navigate([url])
  }

}
