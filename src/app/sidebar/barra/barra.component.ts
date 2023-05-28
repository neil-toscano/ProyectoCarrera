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
                icon: 'pi pi-fw pi-file',
                routerLink:['/sensores/temperatura']
                
            },
            {
              separator:true
            },
            {
                label: 'Nutrientes',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Nitrogeno(N)',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink:['/sensores/nitrogeno']
                    },
                    {
                        label: 'Fosforo(P)',
                        icon: 'pi pi-fw pi-align-right',
                        routerLink:['/sensores/fosforo']
                    },
                    {
                        label: 'K(Potasio)',
                        icon: 'pi pi-fw pi-align-center',
                        routerLink:['/sensores/potasio']
                    }
                ]
            },
            {separator:true},

            {
                label: 'Humedad del suelo',
                icon: 'pi pi-fw pi-user',
                routerLink:['/sensores/humedad']
                
            },
            {separator:true},
            {
                label: 'Humedad del ambiente',
                icon: 'pi pi-fw pi-calendar',
                routerLink:['/sensores/humedad-ambiente']
                
            },
            {separator:true},
            {
              label: 'Sensor de PH del suelo',
              icon: 'pi pi-fw pi-calendar',
              routerLink:['/sensores/ph']
            }
        ];
    }

}
