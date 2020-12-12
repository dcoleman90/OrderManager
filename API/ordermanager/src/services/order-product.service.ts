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
        (result) => {},
        (error) => console.error(error)
      );
  }

  UpdateQuantity(orderProduct: OrderProduct) {
    if (orderProduct.quantity <= 0) {
      return this.DeleteOrderProduct(orderProduct);
    }
    const body = JSON.stringify(orderProduct);
    const headers = { 'Content-Type': 'application/json' };

    return this.http
      .put(this.baseUrl + 'OrderProduct/', body, {
        headers: headers,
      })
      .subscribe(
        (result) => {},
        (error) => console.error(error)
      );
  }

  DeleteOrderProduct(orderProduct: OrderProduct) {
    const body = JSON.stringify(orderProduct);
    const headers = { 'Content-Type': 'application/json' };

    const options = {
      headers: headers,
      body: body,
    };
    return this.http.delete(this.baseUrl + 'OrderProduct/', options).subscribe(
      (result) => {},
      (error) => console.error(error)
    );
  }
}
