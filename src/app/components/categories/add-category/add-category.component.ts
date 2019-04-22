import { Component, OnInit } from '@angular/core';
import { JarvisService } from 'src/app/services/jarvis.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public form = {
    category_name: null,
    category_level: null,
    parent_category_id: null
  }

  public parentCategoryRequired = false;

  public categoryLevels = [0];

  public parentCategories = [];

  public error = [];
  constructor(
    private CategoryService: CategoryService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }

  ngOnInit() {
    this.CategoryService.getMaxCategoryLevel().subscribe(response => {
      if(response !== null) {
        const highestLevelGenerator = response.max_level + 2;
        this.categoryLevels = Array.from(Array(highestLevelGenerator).keys());
        this.parentCategoryRequired = this.categoryLevels.length > 1 ? true : false;
      }
    });
  }

  onSubmit() {
    this.CategoryService.createCategory(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }

  onCategoryLevelChanged(value) {
	this.parentCategoryRequired = false;	  
    if (value > 0) {
      this.CategoryService.getParentCategories(value).subscribe(response => {
		this.parentCategories = response.parent_categories;
      });
      this.parentCategoryRequired = true;
    }
  }

  handleResponse(data) {
    this.router.navigateByUrl('/categories');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}
