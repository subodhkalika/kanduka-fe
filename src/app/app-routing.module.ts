import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';

const appRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path:'home',
		component:HomeComponent,
	},
	{
		path:'login',
		component:LoginComponent,
		canActivate: [BeforeLoginService]
	},
	{
		path:'signup',
		component:SignupComponent,
		canActivate: [BeforeLoginService]
	},
	{
		path:'profile',
		component:ProfileComponent,
		canActivate: [AfterLoginService]
	},
	{
		path:'request-reset',
		component:RequestResetComponent,
		canActivate: [BeforeLoginService]
	},
	{
		path:'response-reset',
		component:ResponseResetComponent,
		canActivate: [BeforeLoginService]
	},
	{
		path:'categories',
		component:CategoriesComponent,
		canActivate: [AfterLoginService]
	},
	{
		path:'categories/add',
		component:AddCategoryComponent,
		canActivate: [AfterLoginService]
	},
	{
		path:'categories/edit/:id',
		component:EditCategoryComponent,
		canActivate: [AfterLoginService]
	},
	{
		path:'products',
		component:ProductsComponent,
		canActivate: [AfterLoginService]
	},
	{
		path:'products/add',
		component:AddProductComponent,
		canActivate: [AfterLoginService]
	},
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
	