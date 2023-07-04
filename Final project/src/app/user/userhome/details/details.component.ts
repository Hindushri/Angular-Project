import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService} from '../../../services/product.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  state?:any;
  qty:any=1;
  buttonstatus:string="Add to the Cart";
  buttonWishListName:string = "Add to Wish List" 
  active:boolean=true;

  user:any= {}
  constructor(private route:ActivatedRoute,private router:Router, private service : ProductService) { 
    this.state=this.router.getCurrentNavigation()?.extras.state;
  }



  
  ngOnInit(): void {
      
  }

 async  addTocart(state:any) {
   await this.service.purchaseListdetails().subscribe(res => {
    res.find((item:any) => {
      if(item.email === localStorage.getItem('email')){
        this.user = item;
        this.afterGetUserValueCreateupdate(item, state);
      }})
   })
  }

  afterGetUserValueCreateupdate(item:any, state:any){
      if(this.user){
    
      this.user.OrderData = [...item.OrderData, state];
       this.service.updateCart(this.user).subscribe(res => { 
        alert("Ordered")
       })
     } else {
      this.service.addCart(item).subscribe(res => {
        console.log(res);
      });
  
     }
  }

 

 async  addWish(state:any) {
  await this.service.purchaseListdetails().subscribe(res => {
   res.find((item:any) => {
     if(item.email === localStorage.getItem('email')){
       this.user = item;
       this.afterGetUserValueCreateupdateWish(item, state);
       alert("Added to wishlist")

     }})
  })
}

afterGetUserValueCreateupdateWish(item:any, state:any){
    
  if(this.user){
   
    this.user.WishListData = [...item.WishListData, state];
     this.service.updateWish(this.user).subscribe(res => {

     })
   } else {
    this.service.addCart(item).subscribe(res => {
      console.log(res);
    });

   }
}
}
