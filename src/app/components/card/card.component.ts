import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Input() item:Product
 @Output() addToCart = new EventEmitter<Product>()
 amount:string = '0';
 
  constructor() {
    this.item = {
      id:0,
      name: '',
      description: '',
      url: '',
      price: 0,
      amount: 0
    }
   }

  ngOnInit(): void {
  }
  emitAddCart(item:Product):void {
    let amountMod = parseInt(this.amount)
    if(amountMod > 0) {
      let newItem = {
        ...item,
        amount: parseInt(this.amount),
      }
      this.addToCart.emit(newItem)
    } 
    }
}
