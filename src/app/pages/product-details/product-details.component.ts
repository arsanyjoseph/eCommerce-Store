import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products-service.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number
  product: Product
  constructor(private route: ActivatedRoute, private productsService:ProductsService) { 
    this.id = 0
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      url: ''
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => this.id = parseInt(param['id']))
    this.product = this.productsService.getProductById(this.id)
  }

}
