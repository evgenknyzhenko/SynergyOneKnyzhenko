import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Customer} from "../model/customer";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class CustomerService {

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(
      'http://localhost:8080/customers',{observe: 'body'});
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(
      'http://localhost:8080/customers/'.concat(id),{observe: 'body'});
  }

  addNewCustomer(addCustomer: Customer): Observable<Customer> {
    return this.http.post('http://localhost:8080/customers', addCustomer);
  }

  editCustomer(customer: Customer, id: string): Observable<Customer> {
    return this.http.put('http://localhost:8080/customers/'.concat(id), customer);
  }
}
