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

  AddOrderProduct(orderProduct: OrderProduct) {
    const body = JSON.stringify(orderProduct);
    const headers = { 'Content-Type': 'application/json' };

    return this.http
      .post(this.baseUrl + 'OrderProduct/', body, {
        headers: headers,
      })
      .subscribe(
        (result) => {
          alert('Product Added');
        },
        (error) => console.error(error)
      );
  }
}
