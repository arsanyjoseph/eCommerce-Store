import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item:Product
  @Output() removeItem = new EventEmitter<Product>()
  @Output() modifyAmount = new EventEmitter<Product>()
  constructor() {
    this.item = {
      id:0,
      price:0,
      amount: 0,
      name: '',
      url: '',
      description: '',
    }
   }

  ngOnInit(): void {
  }
  emitEvent(item:Product):void {
   this.removeItem.emit(item)
  }  
  changeAmount(item:Product):void {
    this.modifyAmount.emit(item)
  }
}
