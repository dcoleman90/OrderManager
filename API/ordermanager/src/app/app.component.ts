import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Orders';
  orders: any;

  constructor(private http: HttpClient) {}

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

  returnOrders() {
    console.log(this.orders);
  }
}
