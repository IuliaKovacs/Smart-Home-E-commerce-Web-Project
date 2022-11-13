import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-azecommerce';

  constructor( private router: Router,
               private loginService: LoginService
              ){}

  storage: Storage = sessionStorage;

  logOff(){
    console.log("Logging off...")
    this.router.navigateByUrl("/login");
    this.loginService.resetIsLoggedIn();
  }



}
