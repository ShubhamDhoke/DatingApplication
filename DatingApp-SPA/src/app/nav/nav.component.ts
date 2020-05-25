import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { error } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
        this.authService.login(this.model).subscribe( next => {
            console.log('Logged in successfully');
          // tslint:disable-next-line: no-shadowed-variable
          }, error => {
            console.log(error);
          });
}

loggedIn() {
  const  token = localStorage.getItem('token');
  return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged Out');

  }
}