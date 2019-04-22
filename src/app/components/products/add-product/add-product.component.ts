import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

	public form = {
		product_name: null,
		product_price: null,
		product_lot: null,
		category_id: null,
	}

	public error = [];

	public categories = [];

	constructor(
		private CategoryService: CategoryService,
		private ProductService: ProductService,
		private router: Router
	) { }

	ngOnInit() {
		this.CategoryService.getAllCategories().subscribe(response => this.categories = response.categories);
	}

	onSubmit() {
		this.ProductService.createProduct(this.form).subscribe(
			data => this.handleResponse(data),
			error => this.handleError(error),
		);
	}

	handleResponse(data) {
		this.router.navigateByUrl('/products');
	}

	handleError(error) {
		this.error = error.error.errors;
	}

}
