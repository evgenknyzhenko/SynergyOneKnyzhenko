import {Component, OnInit} from '@angular/core';
import {Order} from "../model/order";
import {OrderService} from "../service/order-service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Array<Order> = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.getAllOrders();
  }

  private getAllOrders() {
    this.orderService.getAllOrders()
      .subscribe(
        resp => this.orders = resp,
        err => console.log('Orders were not read from database')
      );
  }
}
