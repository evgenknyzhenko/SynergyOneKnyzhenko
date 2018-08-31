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

const appRoutes: Routes = [
  {path: 'customers', component: CustomersComponent},
  {path: 'app', component: AppComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'customers/:id', component: CustomerComponent}
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
