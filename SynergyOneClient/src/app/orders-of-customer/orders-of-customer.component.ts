import { Component, OnInit } from '@angular/core';
import {Order} from "../model/order";
import {OrderService} from "../service/order-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-of-customer',
  templateUrl: './orders-of-customer.component.html',
  styleUrls: ['./orders-of-customer.component.css']
})
export class OrdersOfCustomerComponent implements OnInit {
  customerOrders: Array<Order> = [];

  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOrdersByCustomerId(this.route.snapshot.paramMap.get('id'));
  }

  private getOrdersByCustomerId(id: string): void {
    this.orderService.getOrdersByCustomerId(id)
      .subscribe(
        resp => this.customerOrders = resp,
        err => console.log('Customer orders were not red from database')
      );
  }
}
