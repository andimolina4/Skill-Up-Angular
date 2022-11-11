import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '@app/core/services/api/api-response.service';
import { Account } from '@app/interfaces/api.interface';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit {

  data:Account[] = []
  nextPage:string|null = '/transactions'

  isLoaded:boolean = false

  constructor(private dataService:ApiResponseService) { }

  ngOnInit(): void {
    this.getData()
    }
  getData(){
    if(this.nextPage){
      this.dataService.getTransactionsPage(this.nextPage).subscribe(
        {
          next:(response)=>{
            this.data = this.data.concat(response.data.filter(item=>item.type === 'payment'))
            this.nextPage = response.nextPage
            this.getData()
          },
          error:(err)=>{
            console.log(err)
            this.nextPage = null
          }
        }
      )
    }
    else{
      this.isLoaded = true
    }
    return
  }

}
