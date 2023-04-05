d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let dataNA = data.filter( d => d.ocupacion)
  let dataPiloto = sumMisionHsPorAnio(dataNA.filter(d => d.ocupacion === "piloto"));
  let dataComandante = sumMisionHsPorAnio(dataNA.filter(d => d.ocupacion === "comandante"));
  let dataIngeniero = sumMisionHsPorAnio(dataNA.filter(d => d.ocupacion === "ingeniero aeroespacial"));
  let dataEspecilista = sumMisionHsPorAnio(dataNA.filter(d => d.ocupacion === "especialista aeroespacial"));

  createChart(dataPiloto, dataComandante, dataIngeniero, dataEspecilista);
});

function sumMisionHsPorAnio(data) {
  const groupedData = d3.group(data, d => d.anio_mision);
  const sumData = Array.from(groupedData, ([anio_mision, datos]) => ({
    anio_mision,
    mision_hs_sum: Math.round(d3.sum(datos, d => d.mision_hs))
  }));
  return sumData;
}

function createChart(dataPiloto, dataComandante, dataIngeniero, dataEspecilista){
  let chart = Plot.plot({
    height: 500,
    width:900,
    marginLeft:100,
    marginBottom:55,
    line:true,
    
    x:{
      ticks: 10, 
      grid : true, 
      label: 'Año',
      labelOffset: 40,
      tickFormat: d3.format("#.0f"),
      

    },
    y:{
      ticks:15,
      grid:true,
      label: 'Horas',
      labelOffset: 30,
      zero: false,
    },
    marks: [


      Plot.lineY(dataPiloto, {
        x: "anio_mision", 
        y: "mision_hs_sum",
        sort: 'mision_hs_sum',
        sort: 'anio_mision',
        name: "Piloto",
        color:{
          legend:true,
          label: "ocupación",
        },
        stroke: "magenta",
        strokeWidth: 2
      }),

      Plot.lineY(dataIngeniero, {
        x: "anio_mision", 
        y: "mision_hs_sum",
        sort: 'mision_hs_sum',
        sort: 'anio_mision',
        name: 'ingeniero aeroespacial',
        color:{
          legend:true,
          label: "ocupación",
        },
        stroke: "blue",
        strokeWidth: 2
        
      }),

      Plot.lineY(dataComandante, {
        x: "anio_mision", 
        y: "mision_hs_sum",
        sort: 'mision_hs_sum',
        sort: 'anio_mision',
        name: "Comandante",
        color:{
          legend:true,
          label: "ocupación",
        },
        stroke: "red",
        strokeWidth: 2
      }),


      Plot.lineY(dataEspecilista, {
        x: "anio_mision", 
        y: "mision_hs_sum",
        sort: 'mision_hs_sum',
        sort: 'anio_mision',
        name: "Especialista aeroespacial",
        color:{
          legend:true,
          label: "ocupación",
        },
        stroke: "green",
        strokeWidth: 2
      }),

      Plot.dot(dataEspecilista, {
        x: "anio_mision",
        y: "mision_hs_sum",
        sort: 'mision_hs_sum',
        sort: 'anio_mision',
        title: 'mision_hs_sum',
        r: 5,
        color:{
          legend:true,
          label: "Ocupación",
        },
        fill: "green",
      }),

      Plot.dot(dataComandante, {
        x: "anio_mision",
        y: "mision_hs_sum",
        sort: 'mision_hs_sum',
        sort: 'anio_mision',
        title: 'mision_hs_sum',
        r: 5,
        color:{
          legend:true,
          label: "ocupación",
        },
        fill: "red",
      }),

      Plot.dot(dataIngeniero, {
        x: "anio_mision",
        y: "mision_hs_sum",
        sort: 'mision_hs_sum',
        sort: 'anio_mision',
        title: 'mision_hs_sum',
        r: 5,
        color:{
          legend:true,
          label: "ocupación",
        },
        fill: "blue",
      }),

      Plot.dot(dataPiloto, {
        x: "anio_mision",
        y: "mision_hs_sum",
        sort: 'mision_hs_sum',
        sort: 'anio_mision',
        title: 'mision_hs_sum',
        r: 5,
        color:{
          legend:true,
          label: "ocupación",
        },
        fill: "magenta",
      }),
      ],
      
  });

  d3.select("#chart")
    .append("div")
    .attr("class", "chart-title")
  
  d3.select("#chart").append(() => chart);

  Plot.dot(dataPiloto, {
        x: "anio_mision",
        y: "mision_hs_sum",
        sort: 'mision_hs_sum',
        sort: 'anio_mision',
        title: 'mision_hs_sum',
        r: 5,
        color:{
          legend:true,
          label: "ocupación",
        },
        fill: "magenta",
      }),
  
  d3.select("#chart")
    .append("div")
    .attr("class", "chart-title")
  
  d3.select("#chart").append(() => chart);


};