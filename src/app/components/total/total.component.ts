import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  @Input() total: number 
  vat: number
  delivery:number
  net:number 
  constructor() {
   this.total = 0;
   this.delivery = 0;
   this.net = 0;
   this.vat = 0;
  }

  ngOnInit(): void {
    this.delivery = Math.round(this.total * 0.1);
    this.vat = Math.round(0.14 * this.total);
    this.net = this.total + this.vat + this.delivery
  }

}
