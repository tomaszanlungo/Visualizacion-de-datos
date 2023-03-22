import addTooltips from "../Grafico2/addTooltips.js";

d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let datosFiltrados = data.filter(d => d.eva_mision_hs !== 0 && d.ocupacion !== "participante de vuelo espacial")
  console.log(datosFiltrados)

  let chart = Plot.plot({
    marks: [
      Plot.dot(datosFiltrados, {
        x: 'edad_mision', //como filtrar los x=0
        y: 'eva_mision_hs',
        fill: 'ocupacion',
        fillOpacity: 0.6,
        title: 'nacionalidad',
      }),      
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    zero: true,
    width: 800,
    height: 300,
    
    facet: {
      data: datosFiltrados,
      x: 'ocupacion',
    },
    
    x: { ticks: 4 },
  })
  d3.select('#chart').append(() => chart)
  addTooltips(chart);
})


