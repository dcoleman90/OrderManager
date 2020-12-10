import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../_models/order';
import { OrderProduct } from '../_models/orderProduct';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css'],
})
export class OrderProductComponent implements OnInit {
  @Input() orderProductDetailSelected: any;
  orderProduct: OrderProduct | any;
  orderId: number;
  order: any | string = 'loading';
  products;

  constructor(
    private activatedroute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.activatedroute.params.subscribe((data) => {
      this.orderId = Number(data.id);
    });
  }

  ngOnInit() {
    this.getOrder();
    this.getOrderProducts();
    this.getProducts();
  }

  getOrder() {
    this.http
      .get('https://localhost:5001/api/orders/' + this.orderId)
      .subscribe(
        (response) => {
          this.order = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getOrderProducts() {
    this.http
      .get('https://localhost:5001/api/OrderProduct/' + this.orderId)
      .subscribe(
        (response) => {
          this.orderProduct = response;
          console.log(this.orderProduct);
        },
        (error) => {
          console.log(error);
        }
      );

    this.orderProduct;
  }

  getProducts() {
    this.http.get('https://localhost:5001/api/products').subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProductName(_productId: number) {
    return this.products.find((x) => x.productId == _productId).productName;
  }
}
