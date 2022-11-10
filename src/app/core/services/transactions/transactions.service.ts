import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionRequest, TransactionResponse } from '@app/interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  urlAuth = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions';

  constructor(private http: HttpClient) { }

  create(transactionrequest: TransactionRequest){
    return this.http.post<TransactionResponse>(
      this.urlAuth,
      transactionrequest
    );

  }

  getAll(){
    return this.http.get<TransactionResponse[]>(
      this.urlAuth
    )
  }

  getById(id: string){
    return this.http.get<TransactionResponse>(
      this.urlAuth + '/' + id
    )
  }

  update(id: string, transactionrequest: TransactionRequest){
    return this.http.put<TransactionResponse>(
      this.urlAuth  + '/' + id,
      transactionrequest
    )
    
  }

  delete(id: string){
    return this.http.delete<TransactionResponse>(
      this.urlAuth  + '/' + id
    )
  }
}
