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
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LuzComponent } from './luz/luz.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
@NgModule({
  declarations: [
    TemperaturaComponent,
    HumedadComponent,
    HumedadAmbienteComponent,
    PHsueloComponent,
    NutrientesComponent,
    LuzComponent,
  
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    sensoresRouting,
    HighchartsChartModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    ButtonModule,
    CardModule,
    MessagesModule
  ],
  exports:[
    LuzComponent
  ]
})
export class SensoresModule { }
