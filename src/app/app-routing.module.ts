import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  {path: '', component: ProductsListComponent },
  {path: 'checkout', component: CheckOutComponent},
  {path: 'product/:id', component: ProductDetailsComponent },
  {path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
