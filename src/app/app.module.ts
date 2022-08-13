import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { NavLinksComponent } from './components/nav-links/nav-links.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { SuccessComponent } from './pages/success/success.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { TotalComponent } from './components/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    NavLinksComponent,
    ProductsListComponent,
    CheckOutComponent,
    SuccessComponent,
    ProductDetailsComponent,
    CartItemComponent,
    CheckoutFormComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
