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
      'http://localhost:8080/customer/'.concat(id),{observe: 'body'});
  }
}
