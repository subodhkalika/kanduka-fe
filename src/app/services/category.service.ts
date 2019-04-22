import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaxCategory } from './interfaces/category';
import { ParentCategories } from './interfaces/category';
import { Categories } from './interfaces/category';

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
    return this.http.get<Categories>(`${this.baseUrl}/categories`);
  }

  updateCategory(id, data) {
    return this.http.put(`${this.baseUrl}/category-update/${id}`, data);
  }

  getMaxCategoryLevel() {
    return this.http.get<MaxCategory>(`${this.baseUrl}/categories-max-level`);
  }

  getParentCategories(level) {
    return this.http.get<ParentCategories>(`${this.baseUrl}/parent-categories/${level}`);
  }
}
