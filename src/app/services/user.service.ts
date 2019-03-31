import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	public baseUrl = 'http://127.0.0.1:8000/api';

	public user = {};

	constructor(
		private http: HttpClient,
		private TokenService: TokenService
	) { }

	setLoggedInUser(user) {
		this.user = user;
	}

	getUser() {
		return this.http.post(`${this.baseUrl}/me`, {
			token: this.TokenService.get()
		});
	}
}
