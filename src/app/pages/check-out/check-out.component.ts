import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cartItems: Product[] = [];
  totalSum:number = 0
  isRemoved: boolean = false
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart()
    this.totalSum = this.cartService.sumItems(this.cartItems)
  }
  
  deleteItem(item:Product):void {
    this.cartService.removeItem(item)
    this.cartItems = this.cartService.getCart()
    this.totalSum = this.cartService.sumItems(this.cartItems)
    this.isRemoved = true
    setTimeout(()=> this.isRemoved = false, 3000)
  }

  alertChange(item:Product):void {
    this.cartService.modifyAmount(item)
    this.cartItems = this.cartService.getCart()
    this.totalSum = this.cartService.sumItems(this.cartItems)
  }
}
