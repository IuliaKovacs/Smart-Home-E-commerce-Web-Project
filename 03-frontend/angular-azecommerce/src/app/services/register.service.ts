import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient,
              private encryptionService: EncryptionService) { }

  register(user: User): Observable<any> {
    return this.httpClient.post<User>(this.registerUrl, user);    
  }

  public findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.registerUrl);
  }

  encriptPassword(password: string): string{
    return this.encryptionService.set('123456$#@$^@1ERF', password);
  }


}
