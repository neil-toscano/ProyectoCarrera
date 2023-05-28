import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes=[
    {
      path:'sensores',
      loadChildren:()=>import('./sensores/sensores.module').then(m=>m.SensoresModule)
    }
  ]
@NgModule({
    imports:[RouterModule.forRoot(routes),],
    exports:[RouterModule]

})
export class appRouting{

}