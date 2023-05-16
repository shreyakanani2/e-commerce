import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserProductListComponent } from './user-product-list/user-product-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserProductListComponent,
  },
  {
    path: 'add-product/:productId',
    component: AddProductComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'product-details/:productId',
    component: ProductDetailsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
