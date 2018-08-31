import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { OrdersComponent } from './orders/orders.component';
import {CustomerComponent} from "./customer/customer.component";
import {CustomerService} from "./service/customer-service";
import {OrderService} from "./service/order-service";

const appRoutes: Routes = [
  {path: 'customers', component: CustomersComponent},
  {path: 'app', component: AppComponent},
  {path: 'customers/:id', component: CustomerComponent},
  {path: 'orders', component: OrdersComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
