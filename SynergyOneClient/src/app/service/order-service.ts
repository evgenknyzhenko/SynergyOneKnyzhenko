import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Order} from "../model/order";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class OrderService {

  constructor(private http: HttpClient) {}

  getAllOrders():Observable<Array<Order>> {
    return this.http.get<Array<Order>>(
      'http://localhost:8080/orders',{observe: 'body'}
    );
  }

  getOrdersByCustomerId(id: string): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(
      'http://localhost:8080/customers/'.concat(id).concat('/orders'),{observe: 'body'}
    );
  }

  addNewOrder(addOrder: Order, id: string): Observable<Order> {
    return this.http.post(
      'http://localhost:8080/customers/'.concat(id).concat('/orders'), addOrder);
  }

  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(
      'http://localhost:8080/orders/'.concat(id),{observe: 'body'}
    );
  }

  editOrder(order: Order, id: string):Observable<Order> {
    return this.http.patch<Order>('http://localhost:8080/orders/'.concat(id).concat('/confirm'), order);
  }
}
