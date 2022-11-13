import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedOffGuard implements CanActivate {
  
  storage: Storage = sessionStorage;
  
  canActivate() {
      const userIsLoggedIn = JSON.parse(this.storage.getItem('isLoggedIn')!);

      return userIsLoggedIn;
  }
  
}
