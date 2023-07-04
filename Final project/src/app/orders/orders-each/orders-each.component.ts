import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-each',
  templateUrl: './orders-each.component.html',
  styleUrls: ['./orders-each.component.css']
})
export class OrdersEachComponent implements OnInit {

  constructor() { }
  @Input() product:any;
  // @Input() name:String = "";
  
  

  ngOnInit(): void {
    console.log(this.product,"asdfg");
    
    
  }

}
