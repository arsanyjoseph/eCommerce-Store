import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Product[] = []
  constructor() { }

  addToCart(item:Product): void {
    let checkItem = this.cart.findIndex((i)=> i.id === item.id)
    if(checkItem >= 0){
      this.cart[checkItem].amount = item.amount
  }else {
    this.cart.push(item)
  }
  }

  getCart():Product[] {
    return this.cart
  }

  removeItem(item:Product):void {
    this.cart = this.cart.filter((i)=> i.id !== item.id)
  }

  sumItems(items:Product[]):number {
    let sum:number = 0;
    items.map((i)=> {
      let itemCount = i.amount ? i.amount : 1;
      let netItem = itemCount * i.price;
      sum += netItem;
    })
    return Math.round(sum)
  }

  modifyAmount(item:Product):void {
    this.cart.map((i)=> {
      if(i.id === item.id) {
        i.amount = item.amount
      }
    })
  }
}
