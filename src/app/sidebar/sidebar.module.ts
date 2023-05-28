import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';

import { TieredMenuModule } from 'primeng/tieredmenu';

@NgModule({
  declarations: [
    BarraComponent
  ],
  imports: [
    CommonModule,
    TieredMenuModule,
    
  ],
  exports:[
    BarraComponent
  ]
})
export class SidebarModule { }
