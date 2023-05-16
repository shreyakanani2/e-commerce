import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public productList: any = [];
  constructor(
    private productService: ProductService  ) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProductList().subscribe((data: any) => {
      this.productList = data.data;
    });
  }

  public deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe((data: any) => {
      if (data.success === true) {
        this.getProductList();
      }
    });
  }
}
