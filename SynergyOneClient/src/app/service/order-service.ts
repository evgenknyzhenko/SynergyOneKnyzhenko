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
}
