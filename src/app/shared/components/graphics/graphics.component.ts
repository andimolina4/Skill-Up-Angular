import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  @Input() title:string = ''

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [...Array(31).keys()],
    datasets: [
      {
        data: [{x:0,y:10}, {x:5,y:23},{x:7,y:35},{x:16,y:70},{x:21,y:50},{x:30,y:40}],
        label: 'Balance',
        fill: true,
        tension: 0.5,
        borderColor: '#374151',
        backgroundColor: '#3b86ff69',
      },
      {
        data: [{x:0,y:10}, {x:5,y:34},{x:7,y:65},{x:16,y:70},{x:21,y:15},{x:30,y:20}],
        label: 'Ingresos',
        fill: true,
        tension: 0.5,
        borderColor: '#374151',
        backgroundColor: '#38d9968e',
      },
      {
        data: [{x:0,y:5}, {x:5,y:2},{x:7,y:7},{x:16,y:12},{x:21,y:25},{x:30,y:35}],
        label: 'Egresos',
        fill: true,
        tension: 0.5,
        borderColor: '#374151',
        backgroundColor: '#38d9968e',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio:true,


  };
  public lineChartLegend = true;


  constructor() { }

  ngOnInit(): void {
  }

}
