import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FixedtermdepositRequest, FixedtermdepositResponse } from '@app/interfaces/fixedtermdeposit.interface';

@Injectable({
  providedIn: 'root'
})
export class FixedtermdepositService {

  urlAuth = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/fixeddeposits';

  constructor(private http: HttpClient) { }

  create(fixedtermdepositrequest: FixedtermdepositRequest){
    return this.http.post<FixedtermdepositResponse>(
      this.urlAuth,
      fixedtermdepositrequest
    )
  }

  getAll(){
    return this.http.get<FixedtermdepositResponse[]>(
      this.urlAuth
    )
  }

  getById(id: string){
    return this.http.get<FixedtermdepositResponse>(
      this.urlAuth + '/' + id
    )
  }

  update(id: string, userrequest: FixedtermdepositRequest){
    return this.http.put<FixedtermdepositResponse>(
      this.urlAuth + '/' + id,
      userrequest
    )
  }

  delete(id: string){
    return this.http.delete<FixedtermdepositRequest>(
      this.urlAuth + '/' + id
    )
  }
}
