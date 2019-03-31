import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	public user:Object;

	constructor(
		private UserService:UserService,
		private Token: TokenService,
		private router: Router,
		private AuthService: AuthService
	) { }

	ngOnInit() {
		this.UserService.getUser().subscribe(data => {
			if(data) {
				this.user = data;
			}
		},
		error => this.handleError(error));
	}

	handleError(error) {
		console.log(error.status);
		if(error.status == 401) {
			this.Token.remove();
			this.AuthService.changeAuthStatus(false);
			this.router.navigateByUrl('/login');
		}
	}

}
