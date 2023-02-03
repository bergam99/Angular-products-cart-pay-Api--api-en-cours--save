import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/mocks/produit/product.mock';
import { BasketProduct, BasketService } from 'src/app/services/basket/basket.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product?: Product;
  quantity: number = 1;

  constructor (
    private ProductsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    // ajouter basket
    private basketService: BasketService
  ){}

  ngOnInit(){
    this.initProduct();
  }

  initProduct(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundProduct = this.ProductsService.getProduct(id);
    if(foundProduct){
      this.product = foundProduct;
    }
    else{
      this.router.navigate(['not-found'])
    }
  }
// Ajouter un produit au panier
  addToBasket(){
    // Si il n'y a pas de produit, ne fait rien
    if(!this.product) return;
    // Sinon on crée un nouvel objet de type BasketProduct
    const basketProduct: BasketProduct = {
      product: this.product,
      quantity: this.quantity
    }

    // On appel la fonction addProductToBasket() du BasketService
    this.basketService.addProductToBasket(basketProduct);
  }
} 


