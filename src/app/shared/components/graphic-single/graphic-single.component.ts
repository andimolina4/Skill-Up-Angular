import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Account } from '@app/interfaces/api.interface';
import { ChartConfiguration, ChartOptions} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-graphic-single',
  templateUrl: './graphic-single.component.html',
  styleUrls: ['./graphic-single.component.scss']
})
export class GraphicSingleComponent implements OnInit,OnChanges {

  @ViewChild(BaseChartDirective, { static: true })
  chart!: BaseChartDirective;

  @Input() title:string = ''
  @Input() label:string = ''
  @Input() color:string = '#3b86ff69'
  @Input() dataArray:Account[] = []
  data:Account[]=[]



  public lineChartLegend = true;
  lineChartData: ChartConfiguration<any>['data'] = {
    labels: past30Days.reverse(),
    datasets: [
      {
        data: [],
        label: this.label,
        fill: true,
        tension: 0.5,
        borderColor: '#374151',
        backgroundColor: this.color,
      }
    ],
  };

  constructor(
    ) {}

  ngOnInit(): void {
    this.lineChartData.datasets[0].label = this.label
    this.lineChartData.datasets[0].backgroundColor = this.color

    }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataArray.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    if(this.dataArray.length > 0){
      let daysInGraph = daysBetween(new Date(),new Date(this.dataArray[0].date))
      let labels = pastNDays(daysInGraph+1)
      this.lineChartData.labels = labels.reverse()
      this.lineChartData.datasets[0].data = this.getDataValues(this.dataArray)
      this.chart.chart?.update()
    }
  }
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio:true,
  }


  getDataValues(list:Account[]){
    const balance = list.map(
      item=>{
        return {x:`${new Date(item.date).getDate()}/${new Date(item.date).getMonth()}`,y:item.amount}
      }
    )
    return balance
  }

}

function daysBetween(date1:Date, date2:Date):number{
  let difference = date1.getTime() - date2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
}

function pastNDays(days:number){
  let array= [...Array(days).keys()].map(index => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    let format = `${date.getDate()}/${date.getMonth()}`
    return format;
  })
  return array
}

const past30Days = [...Array(31).keys()].map(index => {
  const date = new Date();
  date.setDate(date.getDate() - index);
  let format = `${date.getDate()}/${date.getMonth()}`
  return format;
})
