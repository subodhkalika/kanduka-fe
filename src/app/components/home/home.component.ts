import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loggedIn: boolean;

  constructor(
    private Auth: AuthService
  ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe( value => this.loggedIn = value);
  }



}
