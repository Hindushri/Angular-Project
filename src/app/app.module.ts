import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { Router } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrdersEachComponent } from './orders/orders-each/orders-each.component';
import { WishListComponent } from './orders/wish-list/wish-list.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersComponent,
    OrdersEachComponent,
    WishListComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthInterceptorService,{
      provide: HTTP_INTERCEPTORS,
      useFactory: function(injector: Injector) {
        return new AuthInterceptorService(injector);
      },
      multi: true,
      deps: [Router]}
    ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
