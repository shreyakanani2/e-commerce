import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductList() {
    return this.http.get(`${environment.apiURL}/products`);
  }

  getProduct(productId: string) {
    return this.http.get(`${environment.apiURL}/products/${productId}`);
  }

  addProduct(product: any) {
    return this.http.post(`${environment.apiURL}/products`, product);
  }

  deleteProduct(productId: number) {
    return this.http.delete(`${environment.apiURL}/products/${productId}`);
  }

  updateProduct(productId: number, product: any) {
    return this.http.put(`${environment.apiURL}/products/${productId}`, product);
  }
}
