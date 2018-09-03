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
  isAddCustomer: boolean = false;
  addCustomer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();
    this.addCustomer = new Customer();
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

  AddNewCustomer(): void {
    this.customerService.addNewCustomer(this.addCustomer)
      .subscribe(
        resp =>this.addCustomer = new Customer(),
        err =>console.log('Customer can not add to database')
      );
  }
}
