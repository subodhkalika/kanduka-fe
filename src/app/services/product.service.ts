import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  createProduct(data) {
    return this.http.post(`${this.baseUrl}/product-create`, data);
  }

  getAllProducts() {
    return this.http.get<Products>(`${this.baseUrl}/products`);
  }

  updateProduct(id, data) {
    return this.http.put(`${this.baseUrl}/product-update/${id}`, data);
  }
}
