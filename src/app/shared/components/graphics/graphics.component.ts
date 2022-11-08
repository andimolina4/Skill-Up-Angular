import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  @Input() title:string = ''

  past7Days = [...Array(30).keys()].map(index => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    let format = `${date.getDay()}/${date.getMonth()}`
    return date;
  });

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.past7Days.reverse(),
    datasets: [
      {
        data: [{x:28,y:20}],
        label: 'Balance',
        fill: true,
        tension: 0.5,
        borderColor: '#374151',
        backgroundColor: '#3b86ff69',
      }
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio:true,
    scales:{
      screenX:{
        type:'timeseries'
      }
    }
  }


  public lineChartLegend = true;


  constructor() {
   }

  ngOnInit(): void {
    console.log(this.past7Days)
    }


}
