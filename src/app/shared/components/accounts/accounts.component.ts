import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiResponseService } from '@app/core/services/api/api-response.service';
import { Cuenta } from '@app/interfaces/api.interface';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  @Output() loaded:EventEmitter<boolean> = new EventEmitter()
  accounts:Cuenta[] = []

  constructor(private apiService:ApiResponseService) { }

  ngOnInit(): void {
    this.apiService.getAccounts().subscribe(
      {
        next:data=>{
          this.accounts = data
          this.loaded.emit(true)
      },
      error:err=>{
        console.log(err)
      }
    }
    )
  }

}
