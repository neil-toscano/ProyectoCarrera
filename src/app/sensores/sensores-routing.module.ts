import { NgModule } from "@angular/core";
import { PHsueloComponent } from "./phsuelo/phsuelo.component";
import { RouterModule, Routes } from "@angular/router";
import { HumedadAmbienteComponent } from "./humedad-ambiente/humedad-ambiente.component";
import { HumedadComponent } from "./humedad/humedad.component";
import { TemperaturaComponent } from "./temperatura/temperatura.component";
import { NutrientesComponent } from "./nutrientes/nutrientes.component";
import { LuzComponent } from "./luz/luz.component";
const routes:Routes=[
    {
        path:'ph',
        component:PHsueloComponent

    },
    {
        path:'temperatura',
        component:TemperaturaComponent

    },
    {
        path:'humedad',
        component:HumedadComponent

    },
    
    {
        path:'humedad-ambiente',
        component:HumedadAmbienteComponent

    },
    {
        path:'nutrientes',
        component:NutrientesComponent

    },
    {
        path:'luz',
        component:LuzComponent
    },
    {
        path:'**',
        redirectTo:'sensores/ph'
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class sensoresRouting{

}