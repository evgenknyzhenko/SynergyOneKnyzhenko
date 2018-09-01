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
  isAddOrder: boolean;
  addOrder: Order;

  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOrdersByCustomerId(this.route.snapshot.paramMap.get('id'));
    this.addOrder = new Order();
  }

  private getOrdersByCustomerId(id: string): void {
    this.orderService.getOrdersByCustomerId(id)
      .subscribe(
        resp => this.customerOrders = resp,
        err => console.log('Customer orders were not red from database')
      );
  }

  addNewOrder(): void {
    this.orderService.addNewOrder(this.addOrder, this.route.snapshot.paramMap.get('id'))
      .subscribe(
        resp => this.addOrder = new Order(),
        err=> console.log('Order was nod add to database')
      );
  }
}
