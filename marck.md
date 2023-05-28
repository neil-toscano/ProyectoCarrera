Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title:{
      text:'Variación de la Temperatura'
    },
    xAxis:{
      title:{
        text:'Hora'
      }
    },
    yAxis:{
      title:{
        text:'Temperatura'
      }
    },
    series: [{
      data: this.datoxy,
      type: 'line',
      name:'Variacion temperatura'
    }]
  };