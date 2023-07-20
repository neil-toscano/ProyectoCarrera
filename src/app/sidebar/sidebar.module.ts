import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import {MatListModule} from '@angular/material/list';
import { TieredMenuModule } from 'primeng/tieredmenu';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    BarraComponent
  ],
  imports: [
    CommonModule,
    TieredMenuModule,
    MatListModule,
    MatIconModule
    
  ],
  exports:[
    BarraComponent
  ]
})
export class SidebarModule { }
