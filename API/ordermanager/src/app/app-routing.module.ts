import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'orders/:id', component: OrderProductComponent },
  { path: 'products', component: ProductComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
