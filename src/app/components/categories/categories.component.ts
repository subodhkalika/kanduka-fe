import { Component, OnInit } from '@angular/core';
import { JarvisService } from 'src/app/services/jarvis.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	public categoryData = {
		headers: [
			'Id',
			'Category Name',
			'Category Level',
			'Parent Category Id',
			'Added By User Id',
			'Created At',
			'Updated At'
		],
		items: []
	};

	constructor(
		private JarvisService: JarvisService,
		private CategoryService: CategoryService
	) { }

	ngOnInit() {
		this.CategoryService.getAllCategories().subscribe(
			response => this.organizeCategoryData(response.categories)
		);
	}

	organizeCategoryData(categories) {
		this.categoryData.items = categories;
	}
}
