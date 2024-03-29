function cargar_plots() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'X');
  data.addColumn('number', 'Arriendo');
  data.addColumn('number', 'Mercados y comidas');
  data.addColumn('number', 'Comidas por fuera');
  data.addColumn('number', 'Transporte');
  data.addColumn('number', 'Antonella');
  data.addColumn('number', 'Servicios, ropa');
  data.addColumn('number', 'Suscripciones');
  data.addColumn('number', 'Cole Antonella');
  data.addColumn('number', 'Gasolina');
  data.addColumn('number', 'Gastos extraordinarios');
  data.addColumn('number', 'Salidas');
  data.addColumn('number', 'compras hogar');
  data.addColumn('number', 'Carro');
  data.addColumn('number', 'leasing');
  data.addColumn('number', 'gastos totales');
  data.addColumn('number', 'da Sil');
  data.addColumn('number', 'Sueldo');
  data.addColumn('number', 'Prima y otros');
  data.addColumn('number', 'Consultas');
  data.addColumn('number', 'ingresos');
  data.addColumn('number', 'gastos');
  data.addColumn('number', 'ahorro');

  data.addRows([
    ['sep 22',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000],
    ['oct 22',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,10.6,0.000,16.390,0.000,0.000,16.390,10.600,5.790],
    ['nov 22',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,1.300,8.85,0.000,12.840,0.000,0.000,12.840,10.150,2.690],
    ['dic 22',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,2.310,5.6,0.000,9.430,11.100,0.000,20.530,7.910,12.620],
    ['ene 23',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,11.300,9.645,0.000,10.945,0.000,0.000,10.945,20.945,-10.000],
    ['feb 23',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,2.300,9.03,0.000,10.330,0.000,1.000,11.330,11.330,0.000],
    ['mar 23',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,2.300,8.86,0.000,11.000,0.000,1.000,12.000,11.160,0.840],
    ['abr 23',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,2.300,7.57,0.000,10.000,0.000,1.000,11.000,9.870,1.130],
    ['may 23',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,2.300,8.1,0.000,10.000,0.000,1.000,11.000,10.400,0.600],
    ['jun 23',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,2.930,8.5,0.000,11.100,0.600,1.000,12.700,11.430,1.270],
    ['jul 23',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,3.000,6.26,0.000,12.050,0.590,1.450,14.090,9.260,4.830],
    ['ago 23',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,13.000,10.8,0.000,9.635,0.650,2.895,13.180,23.800,-10.620],
    ['sep 23',1.990,1.300,0.249,1.163,1.239,1.845,0.027,1.989,0.000,0.383,0.080,0.984,0.000,3.000,11.248,0.525,9.360,0.630,2.890,13.405,14.248,-0.843],
    ['oct 23',1.791,1.450,0.231,1.383,0.533,0.671,0.027,1.347,0.364,12.788,0.186,0.119,0.626,0.000,20.889,0.000,9.700,3.940,1.930,15.570,21.515,-5.945],
    ['nov 23',1.637,2.054,0.566,1.597,1.084,0.476,0.027,1.237,0.433,0.500,0.000,1.673,2.412,0.000,11.285,1.400,12.250,0.000,1.930,15.580,13.697,1.883],
    ['dic 23',1.775,1.357,0.217,0.988,1.330,1.689,0.027,1.297,0.170,5.951,0.100,0.375,4.124,0.000,15.276,2.019,9.580,8.620,1.930,22.149,19.400,2.749],
    ['ene 24',1.188,0.880,0.060,0.030,0.424,0.337,0.027,0.000,0.171,0.000,0.000,0.192,4.124,0.000,3.307,1.383,0.000,0.000,0.000,1.383,7.431,-6.048],
    ['feb 24',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000],
    ['mar 24',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000],
    ['abr 24',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000],
    ['may 24',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000],
    ['jun 24',0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000]
  ]);



  



  
  var options = {
    hAxis: {
      title: 'Mes'
    },
    vAxis: {
      title: 'Gastos'
    },
    colors: ['#555555']
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);

  
}
