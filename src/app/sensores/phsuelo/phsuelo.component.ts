import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';
@Component({
  selector: 'app-phsuelo',
  templateUrl: './phsuelo.component.html',
  styleUrls: ['./phsuelo.component.css']
})
export class PHsueloComponent implements OnInit {
  
  fosforo:any={}
  nitrogeno:any={}
  potasio:any={}
  Highcharts: typeof Highcharts = Highcharts;
  hora:number[]=[5,6,7,8,9,10,11,12,13,14,15,16];
   temperatura:number[]=[12,12,15,24,22,22,21,18,28,13,12,19];
    datoxy:any[]=this.hora.map((x,index)=>[x,this.temperatura[index]]);
    datoxyz:any[]=this.hora.map((x,index)=>[x,this.temperatura[index]*2]);
    datoxyzz:any[]=this.hora.map((x,index)=>[x,this.temperatura[index]*3]);
  chartOptions: any= {
    title:{
      text:'PH suelo [0 - 14]'
    },
    xAxis:{
      title:{
        text:'Hora'
      },
      type: 'datetime',
        dateTimeLabelFormats: {
          second: '%H:%M:%S',
          minute: '%H:%M',
          hour: '%H:%M',
          day: '%e %b'
        }
    },
    yAxis:{
      title:{
        text:'PH [0-14]'
      }
    },
    series: [{
      data: [],
      color:'#8E44AD',
      type: 'area',
      name:'ph del suelo',
      fillOpacity:0.5,
      
      
    }
  ]
  };
  ngOnInit(): void {
    const firebaseConfig = {
      databaseURL: "https://projectocarrera-default-rtdb.firebaseio.com/",
    };
    const app = initializeApp(firebaseConfig);//conexion entre firebase y mi aplicacion
    const database = getDatabase(app);//referencia a la base de datos
    const starCountRef = ref(database, 'sensores/PhSuelo');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.potasio=Object.values(data);
      const newData = Object.values(data).map((item: any) => [
        new Date(item.fecha).getTime(),
        item.valor
      ]);
      console.log("array",data);
     
       this.chartOptions.series[0].data = newData;
       this.chartOptions = { ...this.chartOptions };
       console.log(this.chartOptions.series[0].data)
      
      
      
      
    });
    
    
    
  }

}
