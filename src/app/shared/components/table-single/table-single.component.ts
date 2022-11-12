import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiResponseService } from '@app/core/services/api/api-response.service';
import { Account } from '@app/interfaces/api.interface';

@Component({
  selector: 'app-table-single',
  templateUrl: './table-single.component.html',
  styleUrls: ['./table-single.component.scss']
})
export class TableSingleComponent implements OnInit,OnChanges {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort,{ static: false })
  sort!: MatSort;

  @Input() data:Account[] = []

  displayedColumns: string[] = ['Date','Account', 'Type', 'Concept', 'Amount']
  TABLE_DATA:Account[] = []
  dataSource:MatTableDataSource<Account> = new MatTableDataSource(this.TABLE_DATA)


  //Filter
  filterOptions =[
    {value:'',view:'Todo'},
    {value:'topup',view:'Ingresos'},
    {value:'payment',view:'Egresos'}
  ]

  //MobileQuery, Should move to Service since it's used here and in app-component
  mobileQuery: MediaQueryList;


  constructor(
    media: MediaMatcher,
    private apiService:ApiResponseService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    if(this.mobileQuery.matches){
      this.displayedColumns= ['Date','Account', 'Type', 'Amount']
    }
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.data)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
