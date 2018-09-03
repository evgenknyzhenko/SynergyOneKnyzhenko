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
import { OrdersOfCustomerComponent } from './orders-of-customer/orders-of-customer.component';
import { OrderComponent } from './order/order.component';

const appRoutes: Routes = [
  {path: 'customers', component: CustomersComponent},
  {path: 'app', component: AppComponent},
  {path: 'customers/:id', component: CustomerComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'customers/:id/orders', component:OrdersOfCustomerComponent},
  {path: 'orders/:id/confirm', component: OrderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent,
    CustomerComponent,
    OrdersOfCustomerComponent,
    OrderComponent
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
