import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  items: MenuItem[]=[];

    ngOnInit() {
        this.items = [
            {
                label: 'Temperatura',
                icon: 'bolt',
                routerLink:['/sensores/temperatura']
                
            },
            
            {
                label: 'Nutrientes',
                icon: 'token',
                routerLink: ['/sensores/nutrientes'
                ]
            },

            {
                label: 'Humedad del suelo',
                icon: 'water_drop',
                routerLink:['/sensores/humedad']
                
            },
            {
                label: 'Humedad del ambiente',
                icon: 'foggy',
                routerLink:['/sensores/humedad-ambiente']
                
            },
            {
              label: 'Sensor de PH del suelo',
              icon: 'compost',
              routerLink:['/sensores/ph']
            },
            {
                label:"Intensidad Luz",
                icon:"light",
                routerLink:['/sensores/luz']
            }
        ];
    }

}
