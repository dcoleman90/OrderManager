import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from 'src/services/orders.service';
import { Order } from '../_models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: Order[];
  title = 'Orders';
  constructor(
    private http: HttpClient,
    private router: Router,
    private orderService: OrdersService
  ) {}

  ngOnInit() {
    this.loadService();
  }

  loadService() {
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  OnClickOrderDetail(orderId: number) {
    this.router.navigate(['/orders', orderId]);
  }
}
