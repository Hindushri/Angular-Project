import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  products:any = {
    email:"",
    name : "",
    OrderData : [],

  };


  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.getParticularUserProduct().subscribe( {

      next: (data:any)=>{
        console.log(data);
        data.map((item:any) => {
          if(item.email == localStorage.getItem('email')){
               this.products.OrderData = item.OrderData
          }
      })
        
      },
      error: ()=> this.products = {}
     }
    )
    
    
  }
}
