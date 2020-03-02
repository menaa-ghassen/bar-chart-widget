import { Component, OnInit } from '@angular/core';
import { BarChartService } from './bar-chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  labels: string[] = [];
  data = [];
  prices = [];
  constructor(private barChartService: BarChartService) { this.getLabels(); }
  stringify = JSON.stringify;
  ngOnInit() {

  }
  getLabels() {

    this.barChartService.getSales('Bitchip').subscribe((res: any[]) => {
      res.forEach(element => {
        if ((this.labels.find(item => item === element.bookName)) === undefined) {
          this.labels.push(element.bookName);
          this.data.push(element.unitsSold);
          this.prices.push(element.unitsSold * element.bookPrice);
        } else {
          this.data[this.labels.indexOf(element.bookName)] += element.unitsSold;
          this.prices[this.labels.indexOf(element.bookName)] += (element.unitsSold * element.bookPrice);
        }
      });
    });

  }


}
