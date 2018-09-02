import { Component, OnInit } from '@angular/core';
import {OrderService} from "../service/order-service";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../model/order";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public order: Order;

  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOrderById(this.route.snapshot.paramMap.get('id'));
  }

  private getOrderById(id: string): void {
    this.orderService.getOrderById(id)
      .subscribe(
        resp => this.order = resp,
        err => console.log('Order was not read from database')
      );
  }

  confirmOrder() {
    this.order.status = 'Confirmed';
    this.orderService.editOrder(this.order, this.route.snapshot.paramMap.get('id'))
      .subscribe(
        resp => this.order = new Order(),
        err => console.log('Order is not confirmed')
      );
  }
}
