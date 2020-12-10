import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  getProduct(_productId: number) {
    return this.http.get<Product>(this.baseUrl + 'products/' + _productId);
  }
}
