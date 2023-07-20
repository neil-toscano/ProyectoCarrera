import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';
@Component({
  selector: 'app-nutrientes',
  templateUrl: './nutrientes.component.html',
  styleUrls: ['./nutrientes.component.css']
})
export class NutrientesComponent implements OnInit {
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
      text:'Concentración de los Nutrientes mg/Kg'
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
        text:'Concentración  [ mg/Kg ]'
      }
    },
    series: [{
      data: [],
      color:'#E74C3C',
      type: 'area',
      name:'Potasio',
      fillOpacity:0.5,
      
      
    },
    {
      data: [],
      color:'#2ECC71',
      type: 'area',
      name:'Fósforo',
      fillOpacity:0.5,
      
      
    },
    {
      data: [],
      color:'#C39BD3',
      type: 'area',
      name:'Nitrógeno',
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
    const starCountRef = ref(database, 'sensores/nutrientes/potasio');
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
    const starCountRef2 = ref(database, 'sensores/nutrientes/fosforo');
    onValue(starCountRef2, (snapshot) => {
      const data = snapshot.val();
      this.fosforo=Object.values(data);
      const newData = Object.values(data).map((item: any) => [
        new Date(item.fecha).getTime(),
        item.valor
      ]);
      console.log("array",data);
     
       this.chartOptions.series[1].data = newData;
       this.chartOptions = { ...this.chartOptions };
       console.log(this.chartOptions.series[1].data)
      
      
      
      
    });
    
    
  }
  
 

}
