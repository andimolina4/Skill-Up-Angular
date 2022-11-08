import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiResponseService } from '@app/core/services/api/api-response.service';
import { Account } from '@app/interfaces/api.interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['Date', 'Type', 'Concept', 'Amount']
  TABLE_DATA:Account[] = []
  dataSource:MatTableDataSource<Account> = new MatTableDataSource(this.TABLE_DATA)

  constructor(private apiService:ApiResponseService) { }

  ngOnInit(): void {
    this.apiService.getAllTransactions().subscribe(
      {
        next:data=>{
          console.log(data)
          this.TABLE_DATA = data.data
          this.dataSource = new MatTableDataSource(this.TABLE_DATA)
        },
        error:err=>{
          console.log(err)
        }
      }
    )
  }

}
