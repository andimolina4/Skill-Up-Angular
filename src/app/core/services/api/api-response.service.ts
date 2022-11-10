import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountList } from '@app/interfaces/api.interface';
import { Observable } from 'rxjs';
import { UserResponse } from '@app/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiResponseService {
  baseUrl = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com';

  constructor(private http: HttpClient) {}

  //http bearer token autentication

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MzQsInJvbGVJZCI6MX0sImlhdCI6MTY2NzMwNzc4NSwiZXhwIjoxNjY3Mzk0MTg1fQ.qYcI4hObJ5gCuXCChWzXWhVpMANY1xU2FXseHc5kF08',
    }),
  };

  //get all users

  getAllUsers() {
    return this.http.get<any>(this.baseUrl + '/users', this.httpOptions);
  }
  getAllTransactions():Observable<AccountList>{
    return this.http.get<AccountList>(this.baseUrl + '/transactions')
  }
  getTransactionsPage(nextPage:string):Observable<AccountList>{
    return this.http.get<AccountList>(this.baseUrl + nextPage)
  }
}
