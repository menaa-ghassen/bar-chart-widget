import { Component,  Input, ChangeDetectorRef } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, Tooltip, ChartData } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  barChartData: ChartDataSets[] = [
    { data: [], label: 'Book Sales Statistics' }
  ];
  @Input() set chartData(data) {
    this.barChartData[0].data = JSON.parse(data);
    this.chref.detectChanges();
  }
  labels: Label[] = [];
  @Input() set barChartLabels(label: string) {
    this.labels = JSON.parse(label);
    this.chref.detectChanges();
  }
  prices: ChartData[];
  @Input() set price(price: string) {
    this.prices = JSON.parse(price);
    this.chref.detectChanges();
  }

  barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      enabled: true,
      callbacks: {
        label: (tooltipItem) => {
          let label = String(tooltipItem.xLabel) || '';
          if (label) {
            label += ': ';
          }

          if (this.prices) {
            label += this.prices[tooltipItem.index] + ' $';
          }
          return label;
        }
      }

    },
  };


  barChartType: ChartType = 'bar';
  constructor(private chref: ChangeDetectorRef) { }
}
