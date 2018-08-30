import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomersComponent} from "../customers/customers.component";
import {Input} from "@angular/compiler/src/core";
import {CustomerService} from "../service/customer-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer = new Customer();


  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomerById(this.route.snapshot.paramMap.get('id'));
  }


  private getCustomerById(id: string): void {
    this.customerService.getCustomerById(id)
      .subscribe(
        resp => this.customer = resp,
        err => console.log('Customer was not read from database')
      );
  }
}
