import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public doughnutChartLabels = ['Alphabet', 'Numbers', 'Words'];
  public doughnutChartData = [10, 13, 2];
  public doughnutChartType = 'doughnut';
  
  ngOnInit() {
  }

}
