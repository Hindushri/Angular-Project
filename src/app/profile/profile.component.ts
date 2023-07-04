import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  username:string = localStorage.getItem("username") || ''
  email:string =  localStorage.getItem("email") || ''
  type:string =  localStorage.getItem("type") || ''

  ngOnInit(): void {
  }

}
