
import { Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';
@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit {
  valor:number=0;
  dato:any={}
  chartConstructor: string = 'chart';
   // optional string, defaults to 'chart'
   hora:number[]=[5,6,7,8,9,10,11,12,13,14,15,16];
   temperatura:number[]=[12,12,15,24,22,22,21,18,28,13,12,19];
    datoxy:any[]=this.hora.map((x,index)=>[x,this.temperatura[index]]);
  
    
    Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any= {
    title:{
      text:'Variación de la Temperatura'
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
        text:'Temperatura'
      }
    },
    series: [{
      data: [],
      color:'#E74C3C',
      type: 'area',
      name:'Variacion temperatura',
      fillOpacity:0.5,
      
      
    }
  ]
  };
  
  constructor(){
    

    
    
  }
  ngOnInit(): void {
    const firebaseConfig = {
      databaseURL: "https://projectocarrera-default-rtdb.firebaseio.com/",
    };
    const app = initializeApp(firebaseConfig);//conexion entre firebase y mi aplicacion
    const database = getDatabase(app);//referencia a la base de datos
    const starCountRef = ref(database, 'sensores/temperatura');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.dato=Object.values(data);
      const newData = Object.values(data).map((item: any) => [
        new Date(item.fecha).getTime(),
        item.valor
      ]);
      console.log(newData);
     
       this.chartOptions.series[0].data = newData;
       this.chartOptions = { ...this.chartOptions };
       console.log(this.chartOptions.series[0].data)
      
      
    });
    
  }
  EscribirData(){
    const db = getDatabase();
    const currentDate=new Date().toISOString();
    const newSensor=push(ref(db,'sensores/temperatura'));
    set(newSensor,{
      nombre:"Valor_temp",
      valor:this.valor,
      fecha:currentDate});
  
    
    
  
    
  }
  
  
  
}