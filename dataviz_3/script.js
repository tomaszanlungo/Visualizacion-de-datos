let chart
let data
let valuesDomainX
let valuesDomainY
let paisSelected
let yearSelected


let selectElement = d3.select('#input')

selectElement.on('input', event => {
  yearSelected = event.target.value
  changeValueInput(yearSelected)
  createChart(yearSelected, paisSelected)
})

let selectorPaises = d3.select('#paises')

selectorPaises.on('change', event => {
  paisSelected = event.target.value;
  createChart(yearSelected, paisSelected);
});


d3.csv('astronautas.csv', d3.autoType).then(dataChart => {
  data = dataChart
  yearSelected = selectElement.attr('value')
  paisSelected = selectorPaises.property('value')
  valuesDomainX = d3.extent(data, d => d.mision_hs)
  valuesDomainY = [d3.min(data, d => d.edad_mision), d3.max(data, d => d.edad_mision)]
  changeValueInput(yearSelected, paisSelected)
  createChart(yearSelected, paisSelected)


})

function changeValueInput(value) {
  const resultado = document.querySelector('#value-input')
  resultado.textContent = value
}

function createChart(yearSelected, paisSelected) {


  let dataFilter = data.filter(d => d.anio_mision == yearSelected && d.nacionalidad == paisSelected)
  
  chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    zero: true,
    marks: [
      Plot.dot(dataFilter, {
        x: 'mision_hs',
        y: 'edad_mision',
        fill: 'ocupacion',
        fillOpacity: 1,
        title: 'nombre',
      }),
    ],
    color: {
      legend: true,
      className: 'legend-clusters',
      range: ["blue", "red","pink","green"]
    },
    x:{
      domain: valuesDomainX,
    },
    y:{
      domain: valuesDomainY,
      label: "Edad",
    },
    x: {
      ticks: 10,
      label: "Hs mision",
    },

  })

  /* Agrega un título a la leyenda x d3 */
  d3.select(chart)
    .select('.legend-clusters')
    .insert('h4', 'span')
    .attr('class', 'legend-title')
    .text('Astronautas: ')
    .classed('legend-title')

  d3.select('#chart figure').remove()
  d3.select('#chart').append(() => chart)
}
