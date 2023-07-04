import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  products:any = {
    email:"",
    name : "",
    OrderData : [],
    WishListData:[]

  };


  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.getParticularUserProduct().subscribe( {

      next: (data:any)=>{
        console.log(data);
        data.map((item:any) => {
          if(item.email == localStorage.getItem('email')){
               this.products.WishListData = item.WishListData
          }
      })
        
      },
      error: ()=> this.products = {}
     }
    )
    
    
  }

}
