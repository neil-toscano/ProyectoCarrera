
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
  isChecked:boolean=false;
  valor:number=0;
  dato:any={}
  aire_frio:number=0;
  aire_caliente:number=0;
  chartConstructor: string = 'chart';
   // optional string, defaults to 'chart'
   hora:number[]=[5,6,7,8,9,10,11,12,13,14,15,16];
   temperatura:number[]=[12,12,15,24,22,22,21,18,28,13,12,19];
    datoxy:any[]=this.hora.map((x,index)=>[x,this.temperatura[index]]);
  
    
    Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any= {
    title:{
      text:'Variación de la Temperatura °C'
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
        text:'Temperatura [°C]'
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
  
  
  airefrio_ca(frio:number,calor:number,apagar:number){
    this.aire_frio=frio;
    const db = getDatabase();
    let checked:number=0;
    if(this.isChecked){
      checked=1
    }
    else{
      checked=0
    }
    const data:{}={
      checBox:checked,
      AireFrio:frio,
      AireCaliente:calor,
      Apagar:apagar

    }
console.log("aire");

set(ref(db, 'sensores/estado_vent'), data)
.then(() => {
  console.log("Clave y valor guardados exitosamente en Firebase Realtime Database.");
})
.catch((error) => {
  console.error("Error al guardar la clave y el valor:", error);
});
     

  }
  EscribirData(){
    const db = getDatabase();
    const currentDate = new Date(); // Obtener la fecha y hora actual

currentDate.setHours(currentDate.getHours() - 5); // Restar 5 horas a la hora actual

const adjustedDate = currentDate.toISOString(); // Convertir la fecha y hora ajustadas a formato ISO

    
    const newSensor=push(ref(db,'sensores/temperatura'));
    set(newSensor,{
      nombre:"Valor_temp",
      valor:this.valor,
      fecha:adjustedDate});
  
    
    
  
    
  }
 
  
  
}