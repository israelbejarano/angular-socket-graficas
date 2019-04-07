import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81], label: 'Ventas' }
  ];
  public lineChartLabels: Array<any> = ['enero', 'febrero', 'marzo', 'abril'];

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const newData = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];
      this.lineChartData = [
        {data: newData, label: 'Ventas'}
      ];
    }, 3000);
  }

}
