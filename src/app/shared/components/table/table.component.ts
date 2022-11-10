import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiResponseService } from '@app/core/services/api/api-response.service';
import { Account } from '@app/interfaces/api.interface';

interface AvaliablePages{
    previous:string| null
    next:string | null
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit,OnChanges {

  displayedColumns: string[] = ['Date', 'Type', 'Concept', 'Amount']
  TABLE_DATA:Account[] = []
  dataSource:MatTableDataSource<Account> = new MatTableDataSource(this.TABLE_DATA)


  //Filter
  filterOptions =[
    {value:'',view:'Todo'},
    {value:'topup',view:'Ingresos'},
    {value:'payment',view:'Egresos'}
  ]
  currentFilter:string = this.filterOptions[0].value


  //Pagination
  currentPage:number = 1
  avaliablePages:AvaliablePages = <AvaliablePages>{}

  //MobileQuery, Should move to Service since it's used on others component
  mobileQuery: MediaQueryList;


  constructor(
    media: MediaMatcher,
    private apiService:ApiResponseService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    if(this.mobileQuery.matches){
      this.displayedColumns= ['Date', 'Type', 'Amount']
    }
  }



  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: Account, filter: string) => {
      return data.type.trim().toLowerCase().indexOf(filter) !== -1
     };
    this.apiService.getAllTransactions().subscribe(
      {
        next:data=>{
          this.TABLE_DATA = data.data
          this.avaliablePages = {previous:data.previousPage,next:data.nextPage}
          this.dataSource = new MatTableDataSource(this.TABLE_DATA)
        },
        error:err=>{
          console.log(err)
        }
      }
    )

  }
  ngOnChanges():void{

  }

  applyFilter(){
    this.dataSource.filter = this.currentFilter
  }

  goNextPage(where:string | null){
    if(where){
      this.apiService.getTransactionsPage(where).subscribe(
        {
          next:data=>{
            this.TABLE_DATA = data.data
            this.avaliablePages = {previous:data.previousPage,next:data.nextPage}
            this.dataSource = new MatTableDataSource(this.TABLE_DATA)
            this.currentPage = extractNumber(where)
          },
          error:err=>{
            console.log(err)
          }
        }
      )
    }

  }

}

//Extract number from string
function extractNumber(link:string):number{
  let matches = link.match(/(\d+)/);
  if(matches){
    return parseInt(matches.toString())
  }
  return 0
}
