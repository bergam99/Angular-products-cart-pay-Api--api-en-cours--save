import { Injectable } from '@angular/core';
import { Product } from 'src/app/mocks/produit/product.mock';
import { ProductsService } from '../products/products.service';

// Local Storage n'a pas de date d'expiration, donc s'expire pas même si je quitte navigateur.
// Session Storage : nottoie quand la nav est fermé.
// cookie : donées non sensible. (API local storage)

// car local Storage accepte que les chaîne de caractère.
// pour enregistrer dans Local storage, il faut convertir en String.
// local storage setItem (key, value) : associer value à key
// objet -> string : JSON.stringfy
// string -> objet : Json.parse

// Dans ce service il y a 2 propriétés, 1 constructor, plusieurs méthodes.


// Je crée interface pour enregistrer tous les produits
export interface BasketProduct {
  // Product = type de product.
  // Pas besoin de prix parce que prix est dans product.
  product: Product;
  quantity: number;
}


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  // Créer 2 propriété
  // Prix total du panier
  totalPrice: number = 0;
  // Quantité total du panier
  productQuantity: number = 0;

  // Ajouter le service dans le constructor
  constructor(private productsService: ProductsService) { }
  // private = impossible "get", impossible d'utiliser ailleurs

// Fonction qui va créer mon panier
// Dans createBasket on créer le panier (vide)
// Dans saveBasket on l'enregistre
// On aurait pu ne pas avoir "createBasket" mais seulement "saveBasket" et à la place on appelle saveBasket([])

// create basket -> pour enregistrer notre panier dans le localstorage
// save basket -> pour enregistrer notre panier mis à jour dans le localstorage
// get basket -> pour récupérer le panier du localstorage
  private createBasket() {
    // Enregistrer dans le panier = object -> string(JSON.stringfy)

    // Je crée un tableau vide
    const newBasket: BasketProduct[] = [];
    // Créer un tableau vide qui va tranformer en String
    const stringfyBasket = JSON.stringify(newBasket);

    // afficher dans panier = string -> object (JSON.parse) parce que local storage accepte que les chaîne de caractère (String)

    // basket = clé (clé doit être un strig), stringfyBasket = value
    // Enregistrer le panier dans local storage avec setItem()
    localStorage.setItem('basket', stringfyBasket);

  }

  private saveBasket(basket: BasketProduct[]) {
    localStorage.setItem('basket', JSON.stringify(basket));
    this.getTotalPrice();
  }

  // Fonction Retourner un panier ou créer un panier et le retourne
  // Enregistrer toujours même si je quitte le navigator
  getBasket() {
    // récupérer le panier donc pas private avec getItem
    // basket = clé qu'on a déclaré chez setItem.
    const basket = localStorage.getItem('basket');
    //  s'il existe basket. S'il y a un basket
    if (basket) {
      // retourner JSON parse (Je le transforme en objet et le retourne)
      return JSON.parse(basket);
      // S'il n'existe pas
    } else {
      // Sinon j'appellela fonction createBasket() pour le créer
      this.createBasket();
      // et rappeler la fonction getBasket() pour le récupérer
      this.getBasket();
    }
  }

  // Fonction pour ajouter un produit au panier
  // BasketProduct = interface que j'avaus écrit tout en haut
  // basketProduct = type de BasketProduct
  addProductToBasket(basketProduct: BasketProduct) {
    // On récupère le panier
    // this.getBasket = appel basket
    const basket = this.getBasket();
    // je regarde si le produit existe
    // dans product chercher product dans export on a écrit
    const existingProduct = basket.find((product: BasketProduct) => product.product.id === basketProduct.product.id);
    // Si il existe
    if (existingProduct) {
      // On récupère l'index du produit existant
      const basketProductId = basket.indexOf(existingProduct);
      // On modifie la quantité de ce produit
      basket[basketProductId].quantity += basketProduct.quantity;
    } else {
      // J'ajoute mon nouveau produit au panier
      // lier ça au boutton
      basket.push(basketProduct);
    }
    // J'enregistre le panier
    // ça initialise
    this.saveBasket(basket);
    this.getTotalQuantity();
    this.getTotalPrice();
  }

  // Fonction pour retirér un produit du panier
  removeProductFromPanier(index: number) {
    // Je récupère le panier
    const basket = this.getBasket();
    // Je retire l'element avec l'index qui est renseigné en argument
    basket.splice(index, 1);
    // J'enregistre le panier
    this.saveBasket(basket);
    this.getTotalQuantity();
    this.getTotalPrice();
  }


  // Fonction pour calculer le prix total du panier
  // .reduce = méthode de ts. boucle cumuler le calcul.
  // .reduce après {} 0 = part de zéro. (initialisation de accumulator)
  // currentValue : le value plus récent
  getTotalPrice(): void {
    // On récupére le panier
    const basket = this.getBasket();
    // Je calcule le prix total
    const total = basket.reduce((accumulator: number, currentValue: BasketProduct) => {
      // Je récupère mon produit directement dans mes mocks
      // Chercher base de données dans le mock.
      const product = this.productsService.getProduct(currentValue.product.id);
      // Si le produit n'existe pas, je retourne juste la valeur de l'accumulateur
      // if product retourne accumulator
      if (!product) return accumulator;
      // Si le produit existe, je retourne le produit de l'accumulateur + le prix de produit * sa quantité
      // Retourne accumulator et calcule
      return accumulator + (currentValue.quantity * product?.price);
    }, 0);
    // On assigne la valeur du total à notre propriété totalPrice
    // totalPrice existe tout en haut dans l'interface
    this.totalPrice = total;
  }

  // Pour Afficher combien dans le pannier Créer une fonction getTotalQuantity
  // Fonction pour réupérer la quantité total du panier
  getTotalQuantity(): void {
    const basket = this.getBasket();
    const total = basket.reduce((accumulator: number, currentValue: BasketProduct) => {
      return accumulator += currentValue.quantity;
    }, 0);
    // On assigne la valeur à sa propriéteé products
    this.productQuantity = total;
  }


  // La méthode initBasket() va nous permettre de générer le panier à l'ouverture de l'app
  initBasket(){
    this.getBasket();
    this.getTotalPrice();
    this.getTotalQuantity();
  }
}



