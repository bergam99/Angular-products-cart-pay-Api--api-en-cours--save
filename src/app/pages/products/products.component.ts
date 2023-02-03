import { Component } from '@angular/core';
import { Product } from 'src/app/mocks/produit/product.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productService : ProductsService ) {}

  ngOnInit(){
    this.products = this.getProducts();
  }
  getProducts(){
    return this.productService.getProducts();
  }

}


