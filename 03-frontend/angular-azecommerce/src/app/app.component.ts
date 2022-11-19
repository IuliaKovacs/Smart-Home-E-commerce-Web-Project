import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-azecommerce';

  storage: Storage = sessionStorage;

  constructor( private router: Router,
               private loginService: LoginService,
              ){}


  logOff(){
    sessionStorage.clear();
    console.log("Logging off...");
    this.router.navigateByUrl("/login");
    this.loginService.resetIsLoggedIn();
    this.loginService.resetIsAdmin();
  }

  isVisible(){
    return JSON.parse(this.storage.getItem('isAdmin')!);
  }

}
