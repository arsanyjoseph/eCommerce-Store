import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Product[] = []

  constructor( private http:HttpClient) {
    this.getItems().subscribe(res => {
      this.products = res;
    })
   }

  getItems():Observable<Product[]> {
    let products = this.http.get<Product[]>('../../assets/data.json')
    return products
  }

  getProductById(id:number):Product {
    let item = this.products.filter((i)=> i.id === id)
    return item[0]
  }
}
