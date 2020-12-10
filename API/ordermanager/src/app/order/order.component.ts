import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../_models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: any;// Order[];
  title = 'Orders';
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.http.get('https://localhost:5001/api/orders').subscribe(
      (response) => {
        this.orders = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  OnClickOrderDetail(orderId) {
    console.log(orderId);
    this.router.navigate(['/orders', orderId]);
  }
}
