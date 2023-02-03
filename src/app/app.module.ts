import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { BasketComponent } from './pages/basket/basket.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { ApiTestComponent } from '../api-test/api-test.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    BackButtonComponent,
    BasketComponent,
    PaymentComponent,
    PaymentFormComponent,
    PaymentSuccessComponent,
    ApiTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
