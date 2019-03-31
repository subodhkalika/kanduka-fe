import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  createCategory(data) {
    return this.http.post(`${this.baseUrl}/category-create`, data);
  }

  getAllCategories() {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  updateCategory(id, data) {
    return this.http.put(`${this.baseUrl}/category-update/${id}`, data);
  }

  getMaxCategoryLevel() {
    return this.http.get(`${this.baseUrl}/categories-max-level`);
  }

  getParentCategories(level) {
    return this.http.get(`${this.baseUrl}/parent-categories/${level}`);
  }
}
