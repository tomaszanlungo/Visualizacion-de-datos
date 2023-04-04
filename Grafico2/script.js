import addTooltips from "../Grafico2/addTooltips.js";

d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let datosFiltrados = data.filter(d => d.eva_mision_hs !== 0 && 
  d.ocupacion !== "participante de vuelo espacial" &&
  d.ocupacion !== "piloto")
  console.log(datosFiltrados)

  let chart = Plot.plot({
    marks: [
      Plot.dot(datosFiltrados, {
        x: 'edad_mision', 
        y: 'eva_mision_hs',
        fill: 'ocupacion',
        fillOpacity: 0.6,
        title: 'nacionalidad',
      }),      
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    width: 700,
    height: 400,
    
    facet: {
      data: datosFiltrados,
      x: 'ocupacion',
    },
    
    y:{
      label: "hs eva mision",
    },

    x: { 
      domain: [30,65],
      ticks: 4,
      label: "edad",
    },

    style: {
      fontFamily: 'sans-serif',
      fontSize: 11,
    },

  })
  d3.select('#chart').append(() => chart)
  addTooltips(chart);
})


