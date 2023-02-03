import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produits",
    component: ProductsComponent
  },
  {
    path: "produits/:id",
    component: ProductDetailsComponent
  },
  {
    path: "not-found",
    component: NotFoundComponent

  },
  {
    path: "panier",
    component: BasketComponent

  },
  {
    path: "paiement",
    component: PaymentComponent
  },
  {
    path: "validation-commande",
    component: PaymentSuccessComponent

  },
  {
    path: "**",
    redirectTo: "not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


