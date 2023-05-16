import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public mode: string;
  public productForm: FormGroup;
  private productId: any;

  constructor(
    public fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    if (this.productId) {
      this.mode = 'edit';
      this.getProduct();
    } else {
      this.mode = 'add';
    }
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      description: ['', Validators.required],
      imageURL: ['', [Validators.required, RxwebValidators.url()]],
    });
  }

  getProduct() {
    this.productService.getProduct(this.productId).subscribe((data: any) => {
      this.productForm.patchValue(data.data);
    });
  }

  save() {
    if (false) {
      ;
    } else {
      if (this.mode === 'edit') {
        this.productService
          .updateProduct(this.productId, this.productForm.getRawValue())
          .subscribe((data: any) => {
            if (data.success === true) {
              alert('Product Updated');
              this.router.navigateByUrl('/products');
            }
          });
      } else {
        this.productService
          .addProduct(this.productForm.getRawValue())
          .subscribe((data: any) => {
            if (data.success === true) {
              alert('Product added');
              this.router.navigateByUrl('/products');
            }
          });
      }
    }
  }
}
