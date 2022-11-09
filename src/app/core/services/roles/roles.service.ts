import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolRequest, RolResponse } from '@app/interfaces/rol.interface';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  urlAuth = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/roles';

  constructor(private http: HttpClient) { }

  create(rolrequest: RolRequest){
    return this.http.post<RolResponse>(
      this.urlAuth,
      rolrequest
    )
  }

  getAll(){
    return this.http.get<RolResponse[]>(
      this.urlAuth
    )
  }

  getById(id: string){
    return this.http.get<RolResponse>(
      this.urlAuth + '/' + id
    )
  }

  update(id: string, userrequest: RolRequest){
    return this.http.put<RolResponse>(
      this.urlAuth + '/' + id,
      userrequest
    )
  }

  delete(id: string){
    return this.http.delete<RolRequest>(
      this.urlAuth + '/' + id
    )
  }
}
