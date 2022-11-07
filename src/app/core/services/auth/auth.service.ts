import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRequest, UserResponse } from '@app/interfaces/user.interface';
import { UserLoginRequest } from '@app/pages/auth-login/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users';
  urlAuth = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth';

  constructor(private http: HttpClient) { }

  signUp(user: UserRequest) {
    console.log(user)
    return this.http.post(this.url, user);
  }

  login(user: UserLoginRequest) {
    return this.http.post<{'accessToken': string}>(this.urlAuth + '/login', user);
  }
}
