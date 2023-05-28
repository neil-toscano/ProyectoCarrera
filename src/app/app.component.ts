import { Component ,OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent  {

  constructor(private primengConfig: PrimeNGConfig) { 
    

  }
  ngOnInit() {
    this.primengConfig.ripple = true;
}

  title = 'myapp';
}
