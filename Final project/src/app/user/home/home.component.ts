import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pictures:string[]=["https://img.icons8.com/?size=2x&id=4255&format=png","https://img.icons8.com/?size=2x&id=25653&format=png","https://img.icons8.com/?size=512&id=85120&format=png"]
  urls:string[]=["orders","wishlist","profile"];
  strings:string[]=["Orders","Wishlist","Profile"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
