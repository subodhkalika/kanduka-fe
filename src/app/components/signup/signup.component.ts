import { Component, OnInit } from '@angular/core';
import { JarvisService } from '../../services/jarvis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    name:null,
    email:null,
    password:null,
    password_confirmation:null,
    phone: null,
    address: null,
    role: null,
    type: null,
    user_role_slug: null
  }

  public roles = [
    {
      id: 1,
      user_role: 'administrator',
      user_role_type: 'admin',
      user_role_slug: 'administrator-admin',
    },
    {
      id: 2,
      user_role: 'employee',
      user_role_type: 'distributor',
      user_role_slug: 'employee-distributor',
    },
  ];

  public role_types = [];
  public error = [];

  constructor(
    private Jarvis: JarvisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.form.user_role_slug = this.form.role + '-' + this.form.type;
    this.Jarvis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  onRoleChange($value) {
    this.role_types = this.roles.filter(item => item.user_role === $value);
    this.form.type = null;
  }
}
