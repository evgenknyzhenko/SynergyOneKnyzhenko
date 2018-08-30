import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer-service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Array<Customer> = [];
  selectedCustomer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  private getAllCustomers() {
    this.customerService.getAllCustomers()
      .subscribe(
        resp => this.customers = resp,
        err => console.log('Customers were not read from database')
      );
  }

  onSelectCustomer(customer: Customer) {
    this.selectedCustomer = customer;
  }
}
