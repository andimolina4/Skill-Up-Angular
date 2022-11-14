import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { casa, ExchangeResponse } from '@app/core/models/exchange.model';


@Injectable({
  providedIn: 'root'
})
export class ExchangeConvertService {
  url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
  resp = new ExchangeResponse(new casa("157,15", "165,15", "", ""));

  constructor(private http: HttpClient) {}

  convert(amount: number, toDolar: boolean): number{
      if(toDolar){
        return amount / parseFloat(this.resp.casa.venta) ;
      }

      return parseFloat(this.resp.casa.venta) * amount;
  }

  getDolar(){
    return this.http.get<ExchangeResponse[]>(this.url);
  }

}
