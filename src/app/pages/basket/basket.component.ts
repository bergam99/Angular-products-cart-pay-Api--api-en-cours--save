import { Component } from '@angular/core';
import { BasketProduct, BasketService } from 'src/app/services/basket/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
// étape pour afficher le panier
export class BasketComponent {
  // C'est notre panier
  basket: BasketProduct[] = [];

  // Notre service est public pour utiliser dans HTML.
  constructor(public basketService : BasketService) {}

  ngOnInit() {
    // getBasket = retour au panier
    this.basket = this.basketService.getBasket();
  }

  getBasket() {
    this.basket = this.basketService.getBasket();
  }


  // button supprimer
  removeProduct(index:number) {
    this.basketService.removeProductFromPanier(index);
    // Appel la fonction qui est en haut!!
    this.getBasket();
  }
}


