import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { HumedadComponent } from './humedad/humedad.component';
import { HumedadAmbienteComponent } from './humedad-ambiente/humedad-ambiente.component';
import { PHsueloComponent } from './phsuelo/phsuelo.component';

import { sensoresRouting } from './sensores-routing.module';
import { NutrientesComponent } from './nutrientes/nutrientes.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TemperaturaComponent,
    HumedadComponent,
    HumedadAmbienteComponent,
    PHsueloComponent,
    NutrientesComponent,
  
  ],
  imports: [
    CommonModule,
    sensoresRouting,
    HighchartsChartModule,
    FormsModule
  ],
  exports:[
  ]
})
export class SensoresModule { }
