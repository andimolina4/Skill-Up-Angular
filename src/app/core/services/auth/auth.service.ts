import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRequest, UserResponse } from '@app/interfaces/user.interface';
import { UserLoginRequest } from '@app/pages/auth-login/login/login.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users';
  urlAuth =
    'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth';

    private authSubject = new BehaviorSubject<boolean>(false);
    private isLoggedIn$ = this.authSubject.asObservable();


  constructor(private http: HttpClient) {}

  updateLoggedInState(){
    if(localStorage.getItem('accessToken')){
      this.authSubject.next(true);
    }
    else{
      this.authSubject.next(false);
    }

  }
  //Made it Observable to be able to update UI withouth refreshing
  public isLoggedIn(): Observable<boolean> {
      this.updateLoggedInState()
      return this.isLoggedIn$;
  }

  signUp(user: UserRequest) {
    console.log(user);
    return this.http.post(this.url, user);
  }

  login(user: UserLoginRequest) {
    return this.http.post<{ accessToken: string }>(
      this.urlAuth + '/login',
      user
    );
  }
  logout() {
    localStorage.removeItem('accessToken');
    this.updateLoggedInState()
  }

  /*isLoggedIn() {
    return !!localStorage.getItem('accessToken');
  }
*/

  //get user logged

  getUserLogged() {
    return this.http.get<UserRequest>(this.urlAuth + '/me');
  }

}
