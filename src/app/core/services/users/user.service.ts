import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageResponse, PasswordRequest, UserRequest, UserResponse } from '@app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlAuth = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users';

  constructor(private http: HttpClient) { }

  create(userrequest: UserRequest){
    return this.http.post<UserResponse>(
      this.urlAuth,
      userrequest
    )
  }

  getAll(){
    return this.http.get<UserResponse[]>(
      this.urlAuth
    )
  }

  getById(id: string){
    return this.http.get<UserResponse>(
      this.urlAuth + '/' + id
    )
  }

  update(id: string, userrequest: UserRequest){
    return this.http.put<UserResponse>(
      this.urlAuth + '/' + id,
      userrequest
    )
  }

  delete(id: string){
    return this.http.delete<UserRequest>(
      this.urlAuth + '/' + id
    )
  }

  block(accountId: string){
    return this.http.patch<MessageResponse>(
      this.urlAuth + '/block/' + accountId, null
    )
    //la función de patch http te pide dos párametros: la URL y el objeto
    //tiene un null pero no sé si funciona
  }

  unblock(accountId: string){
    return this.http.patch<MessageResponse>(
      this.urlAuth + '/unblock/' + accountId, null
    )
  }

  resetPassword(userId: string, passwordrequest: PasswordRequest){
    return this.http.patch<MessageResponse>(
      this.urlAuth + '/resetPassword/' + userId, null
    )
  }

  changePoints(productId: string){
    return this.http.patch(
      this.urlAuth + '/product/' + productId, null
    )
  }
}
