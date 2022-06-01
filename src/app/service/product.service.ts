import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _URL = environment.url  + "product";

  constructor(private http: HttpClient) { }

  save(product: Product) {
    return this.http.post<Product>(this._URL, product);
  }

  getAll() {
    return this.http.get<Product[]>(this._URL);
  }
}
