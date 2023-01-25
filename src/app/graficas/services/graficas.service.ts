import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';
import { Color } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {
  public colors: Color[] = [
    '#0075ED',
    '#00BAF7',
    '#00E0DB',
    '#00F7AD',
    '#00ED63',
  ];

  constructor(
    private _http: HttpClient
  ) { }

  getUsersSocials(){
    return this._http.get('http://localhost:3000/grafica')
  }

  getUsersSocialsDonnutData(){
    return this.getUsersSocials().pipe(
      delay(1000),
      map((data) => {
        const labels = Object.keys(data)
        const values = Object.values(data)

        return  {
          labels,
          datasets: [{data: values, backgroundColor: this.colors}]
        }
      })
    )
  }
}
