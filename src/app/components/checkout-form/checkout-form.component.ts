import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  name:string 
  address:string 
  card:string 
  constructor(private router:Router) { 
    this.name = '';
    this.address = '';
    this.card = '';
  }

  ngOnInit(): void {
    
  }

  navigateRoute():void {
    this.router.navigateByUrl('success')
  }

}
