import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../common/user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usersUrl = 'http://localhost:8080/api/users'

  constructor(private httpClient: HttpClient) { }

  getUser(email: number): Observable<User> {
    //build Url based on userId
    const userUrl = `${this.usersUrl}/email_address={email}`;
    return this.httpClient.get<User>(userUrl);
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<GetResponseUsers>(this.usersUrl).pipe(
      map(response => response._embedded.users)
    );
  }

}


interface GetResponseUsers {
  _embedded: {
    users: User[];
  }

}
