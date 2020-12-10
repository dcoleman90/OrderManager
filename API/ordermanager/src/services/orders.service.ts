import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/_models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<Order[]>(this.baseUrl + 'orders');
  }

  getOrder(orderId: number) {
    return this.http.get<Order>(this.baseUrl + 'orders/' + orderId);
  }
}
