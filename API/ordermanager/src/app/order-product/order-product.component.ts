import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderProductService } from 'src/services/order-product.service';
import { OrdersService } from 'src/services/orders.service';
import { ProductsService } from 'src/services/products.service';
import { Order } from '../_models/order';
import { OrderProduct } from '../_models/orderProduct';
import { Product } from '../_models/product';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css'],
})
export class OrderProductComponent implements OnInit {
  @Input() orderProductDetailSelected: any;
  orderProducts: OrderProduct[];
  orderId: number;
  order: Order;
  products: Product[];
  tempOrderProduct: OrderProduct;

  constructor(
    private activatedroute: ActivatedRoute,
    private http: HttpClient,
    private productService: ProductsService,
    private orderService: OrdersService,
    private orderProductService: OrderProductService
  ) {
    this.activatedroute.params.subscribe((data) => {
      this.orderId = Number(data.id);
    });
  }

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
    this.orderService.getOrder(this.orderId).subscribe((order) => {
      this.order = order;
    });
    this.orderProductService
      .getOrderProducts(this.orderId)
      .subscribe((orderProducts) => {
        this.orderProducts = orderProducts;
      });
  }

  getProductName(_productId: number) {
    if (this.products) {
      return this.products.find((x) => x.productId == _productId).productName;
    }
    return 'loading';
  }

  AddOrderProduct(orderId: number, productId: number) {
    this.tempOrderProduct = new OrderProduct(orderId, productId, 1);
    this.orderProductService.AddOrderProduct(this.tempOrderProduct);

    this.loadServices();
  }

  UpdateQuantity(orderProduct: OrderProduct, updateAmount: number) {
    orderProduct.quantity += updateAmount;

    if (orderProduct.quantity <= 0) {
      this.orderProductService.DeleteOrderProduct(orderProduct);
    } else {
      this.orderProductService.UpdateQuantity(orderProduct);
    }
    this.loadServices();
  }
}
