import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { error } from 'protractor';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor( public authService: AuthService, private alertify: AlertifyService,private router: Router) { }

  ngOnInit() {
  }

  login() {
        this.authService.login(this.model).subscribe( next => {
            this.alertify.success('Logged in successfully');
          // tslint:disable-next-line: no-shadowed-variable
          }, error => {
            this.alertify.error(error);
          }, () => {
            this.router.navigate(['/members']);
          } );
}

loggedIn() {
  return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged Out');
    this.router.navigate(['/home']);

  }
}
