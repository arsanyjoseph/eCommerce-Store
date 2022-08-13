import { Component, EventEmitter, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService} from 'src/app/services/products-service.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[]= []
  cart:Product[]=[]
  constructor(private productsService:ProductsService, private cartService:CartService ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts()
  }

  parentAddToCart(item:Product):void {
    this.cartService.addToCart(item)
  }

}
