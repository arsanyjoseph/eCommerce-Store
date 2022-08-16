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
  isAdded: boolean = false
  constructor(private productsService:ProductsService, private cartService:CartService ) { }

  ngOnInit(): void {
    this.productsService.getItems().subscribe(res => {
      this.products = res;
    })
  }

  parentAddToCart(item:Product):void {
    this.cartService.addToCart(item)
    this.isAdded = true
    let timeOut = setTimeout(()=> this.isAdded = false, 3000)
  }
}
