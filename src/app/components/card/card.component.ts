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
 amount:number = 0;
 
  constructor() {
    this.item = {
      id:0,
      name: '',
      description: '',
      url: '',
      price: 0,
      amount: 1
    }
   }

  ngOnInit(): void {
  }
  emitAddCart(item:Product, amount:string):void {
    let amountMod = parseInt(amount)
    if(amountMod > 0) {
      let newItem = {
        ...item,
        amount: parseInt(amount),
      }
      this.addToCart.emit(newItem)
    } 
    }
}
