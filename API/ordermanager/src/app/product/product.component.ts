import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';
import { Product } from '../_models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  constructor(
    private http: HttpClient,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.loadService();
  }

  loadService() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
