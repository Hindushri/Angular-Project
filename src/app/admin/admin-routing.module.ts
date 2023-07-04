import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomeComponent } from './home/home.component';
import {ProfileComponent} from '../profile/profile.component'
const routes: Routes = [
  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: AdminhomeComponent
    },
    {
      path: "profile",
      component: ProfileComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
