import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderProduct } from 'src/app/_models/orderProduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderProductService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getOrderProducts(orderId: number) {
    return this.http.get<OrderProduct[]>(
      this.baseUrl + 'OrderProduct/' + orderId
    );
  }
}
