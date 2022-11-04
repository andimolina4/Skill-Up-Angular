import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRequest, UserResponse } from '@app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/api-docs/users'

  constructor(private http: HttpClient) { }

  signUp(user: UserRequest) {
    console.log(user)
    return this.http.post(this.url, user);
  }
}
