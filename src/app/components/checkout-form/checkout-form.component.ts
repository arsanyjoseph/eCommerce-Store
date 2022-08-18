import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  name:string 
  address:string 
  card:string 
  isEmptyCart:boolean = false
  constructor(private router:Router, private cartService:CartService) { 
    this.name = '';
    this.address = '';
    this.card = '';
  }

  ngOnInit(): void {
    
  }

  navigateRoute():void {
    if(this.cartService.cart.length > 0) {
      this.router.navigateByUrl('success')
    }
    
    if(this.cartService.cart.length === 0) {
      this.isEmptyCart = true
    }
  }
}
