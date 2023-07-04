import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './userhome/details/details.component';
import { UserhomeComponent } from './userhome/userhome.component';

import {OrdersComponent} from "../orders/orders.component"
import {WishListComponent} from '../orders/wish-list/wish-list.component'
import {ProfileComponent} from '../profile/profile.component'
/** @
 *    /user/home/
 *    /user/home/details
 * */
const routes: Routes = [
  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path: "details",
      component: DetailsComponent
    },
    {
      path : "orders",
      component: OrdersComponent
    },
    {
      path : "wishlist",
      component: WishListComponent
    },
    {
      path:"profile",
      component:ProfileComponent

    }
  ],
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
