import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ApiResponseService } from '@app/core/services/api/api-response.service';
import { Account } from '@app/interfaces/api.interface';
import { ChartConfiguration, ChartOptions} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  @ViewChild(BaseChartDirective, { static: true })
  chart!: BaseChartDirective;

  @Input() title:string = ''
  @Input() type:string = 'all'
  balance:Account[]=[]
  topup:Account[] =[]
  payments:Account[]=[]

  past30Days = [...Array(30).keys()].map(index => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    let format = `${date.getDate()}/${date.getMonth()}`
    return format;
  });

  public lineChartLegend = true;
  lineChartData: ChartConfiguration<any>['data'] = {
    labels: this.past30Days.reverse(),
    datasets: [
      {
        data: [],
        label: 'Balance',
        fill: true,
        tension: 0.5,
        borderColor: '#374151',
        backgroundColor: '#3b86ff69',
      },
      {
        data: [],
        label: 'Ingresos',
        fill: true,
        tension: 0.5,
        borderColor: '#374151',
        backgroundColor: '#5edda8',
      },
      {
        data: [],
        label: 'Egresos',
        fill: true,
        tension: 0.5,
        borderColor: '#374151',
        backgroundColor: '#5edda8',
      }

    ],
  };

  constructor(
    private dataService:ApiResponseService
    ) {}

  ngOnInit(): void {
    this.dataService.getAllTransactions().subscribe(
      {
        next:(response)=>{
          this.balance = getDaysAgoData(response.data,30)
          this.filterTypeOfTransaction()
          this.updateData(
            this.getBalance(this.balance),
            this.getDataValues(this.topup),
            this.getDataValues(this.payments),
            )
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
    }

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio:true,
  }

  updateData(balance:any,topup:any,payments:any):void{
    this.lineChartData.datasets[0].data= balance
    this.lineChartData.datasets[1].data= topup
    this.lineChartData.datasets[2].data= payments
    this.chart.chart?.update()
  }

  getDataValues(list:Account[]){
    const balance = list.map(
      item=>{
        return {x:`${new Date(item.date).getDate()}/${new Date(item.date).getMonth()}`,y:item.amount}
      }
    )
    return balance
  }
  getBalance(list:Account[]){
    let sum = 0
    const balance = list.map(item=>{
      if(item.type === 'topup'){
        sum += parseFloat(item.amount)
      }
      else{
        sum -= parseFloat(item.amount)
      }
      return {x:`${new Date(item.date).getDate()}/${new Date(item.date).getMonth()}`,y:sum}
    })
    return balance
  }

  filterTypeOfTransaction(){
    this.balance.forEach(item=>{
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
