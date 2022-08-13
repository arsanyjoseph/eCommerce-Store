import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  total: number = 250;
  vat: number = Math.round(0.14 * this.total);
  delivery: number = 0.1 * this.total;
  net: number = this.total + this.vat + this.delivery
  constructor() { }

  ngOnInit(): void {
  }

}
