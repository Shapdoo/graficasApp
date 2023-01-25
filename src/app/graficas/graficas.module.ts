import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DonaComponent } from './pages/dona/dona.component';
import { NgChartsModule } from 'ng2-charts';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonaHttpComponent,
    DonaComponent,
    GraficaBarraComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule,
    HttpClientModule
  ]
})
export class GraficasModule { }
