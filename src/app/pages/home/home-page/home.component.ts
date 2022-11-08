import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '@app/core/services/api/api-response.service';
import { Account, AccountList } from '@app/interfaces/api.interface';
import { faScaleBalanced, faPiggyBank, faTicket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  scaleIcon = faScaleBalanced
  piggy = faPiggyBank
  ticket = faTicket

  movements:Account[]=[]
  topup:Account[] =[]
  payments:Account[]=[]


  constructor(
    private dataService:ApiResponseService
    ) {}

  ngOnInit(): void {
    this.dataService.getAllTransactions().subscribe(
      {
        next:(response)=>{
          console.log(response)
          this.movements = getDaysAgoData(response.data,30)
          this.filterTypeOfTransaction()
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
  }


  //Filter transactions based on type
  filterTypeOfTransaction(){
    this.movements.forEach(item=>{
      if(item.type === 'payment'){
        this.payments.push(item)
      }
      else{
        this.topup.push(item)
      }
    })
  }
}


//Filter only from last 30 days
function getDaysAgoData(data:Account[], daysAgo:number):Account[]{
  // Get current date
  let t = new Date();
  let d = new Date(t.getFullYear(), t.getMonth(), t.getDate() - daysAgo);
  // Filter and sort data
  return data.filter(item => new Date(item.date) >= d)
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

function createDataSetForGraphic(){

}




