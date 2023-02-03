import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from 'src/app/mocks/produit/product.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  // Retourner la liste de tous les produits
  getProducts():Product[]{
    return PRODUCTS;
  }
// Retourner un seul produit
// Récupérer un seul avec id. 
// s'il trouve retourne id.
// sinon undifined
  getProduct(id:number) : Product | undefined {
    return PRODUCTS.find(product => product.id ===id)
  }
}


