import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productData = {
		headers: [
			'Id',
			'Product Name',
			'Price',
			'Lot No.',
			'Category Id',
			'Category Name',
			'Added By User Id',
			'Created At',
			'Updated At'
		],
		items: []
	};

	constructor(
		private ProductService: ProductService
	) { }

	ngOnInit() {
		this.ProductService.getAllProducts().subscribe(
			response => this.organizeProductData(response.data)
		);
	}

	organizeProductData(products) {
		this.productData.items = products;
	}

}
