import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public productData: any;
  public productQuantity: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let productId: any = this.activatedRoute.snapshot.paramMap.get('productId');
    this.productService.getProduct(productId).subscribe((data: any) => {
      this.productData = data.data;
    });
  }

  public handleQuantity(value: string) {
    if (this.productQuantity < 20 && value === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && value === 'min') {
      this.productQuantity -= 1;
    }
  }
}
