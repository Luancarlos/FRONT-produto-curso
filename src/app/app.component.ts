import { Component } from '@angular/core';
import { ProductService } from './service/product.service';
import { Product } from './model/product';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  products: Product[] = [];

  productForm = this.fb.group({
    name: [null, Validators.required],
    description: [null],
    price: [null]
  })

  constructor(
    private fb: FormBuilder,
    private service: ProductService) {
    this.getAllProducts();
  }

  getAllProducts() {
    this.service.getAll().subscribe(
      (res) => {
        this.products = res;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  createProduct(): Product {
    return {
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      price: this.productForm.get('price')?.value
    }
  }

  save() {
    if (this.productForm.valid) {
      const product = this.createProduct();
      this.service.save(product).subscribe(
        (res) => {
          alert("Product save sucessfull");
          this.getAllProducts();
        },
        (error) => {
          console.error(error);
        }
      )
    }
  }
}
