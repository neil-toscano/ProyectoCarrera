import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-luz',
  templateUrl: './luz.component.html',
  styleUrls: ['./luz.component.css']
})
export class LuzComponent implements OnInit {
  isChecked:boolean=false;
  encen:number=0;
  lucs:any={};
  messages:string="Seleccione el color ";
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any= {
    title:{
      text:'Intensidad Lux'
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
        text:'Lux'
      }
    },
    series: [{
      data: [],
      color:'#8E44AD',
      type: 'area',
      name:'Lux ',
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

    const starCountRef = ref(database, 'sensores/Lucs');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.lucs=Object.values(data);
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

  
   getColorRGB(valor:any,encen:number) {
    
    const valorHex=valor.value;

    let checked:number=0;
    if(this.isChecked){
      checked=1
    }
    else{
      checked=0
    }
    
    console.log("obtenido",valor.value);
   
    const rgb = this.hexToRGB(valorHex);
    console.log("hola",rgb);
    const red = rgb[0];
    const green = rgb[1];
    const blue = rgb[2];
    const data={
      "R":red,
      "G":green,
      "B":blue,
      "E":encen,
      checkbox:checked

    }
    console.log("Color seleccionado: RGB(" + red + ", " + green + ", " + blue + ")");
    const db = getDatabase();
    set(ref(db, 'sensores/luz'), data)
.then(() => {
  console.log("Clave y valor guardados exitosamente en Firebase Realtime Database.");
})
.catch((error) => {
  console.error("Error al guardar la clave y el valor:", error);
});
  }
   hexToRGB(hex:any) {
    // Eliminar el símbolo '#' del valor hexadecimal
    hex = hex.replace("#", "");
    
    // Convertir el valor hexadecimal a valores RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return [r, g, b];
  }
 
  

}
