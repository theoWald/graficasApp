import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHTTPComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    // [250, 130, 70]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#6211ED',
        '#A511F7',
        '#CF1AE0',
        '#2FE0C3',
        '#28E1F7'
      ]
    }
  ]

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSociales()
      .subscribe( data => {
        // console.log(data);
        
        const labels = Object.keys(data);
        const values = Object.values(data);

        this.doughnutChartLabels = labels;
        this.doughnutChartData = values;
      });

  }

}
