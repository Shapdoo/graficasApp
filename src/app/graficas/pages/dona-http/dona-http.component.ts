import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css'],
})
export class DonaHttpComponent implements OnInit {

  constructor(private _gs: GraficasService) {}

  ngOnInit(): void {
    // this._gs.getUsersSocials().subscribe((response) => {
    //   const labels = Object.keys( response )
    //   const values = Object.values( response )

    //   this.doughnutChartData = {
    //     labels,
    //     datasets: [{data: values, backgroundColor: this.colors}]
    //   }

    // });

    this._gs.getUsersSocialsDonnutData().subscribe(data => this.doughnutChartData = data)
  }

  public doughnutChartLabels: string[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [], backgroundColor: this._gs.colors }],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }


}
