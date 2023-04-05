d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(
        data.filter(d => d.nombre == 'Andrei Borisenko'),
        {
          x: 'anio_mision',
          y: 'mision_hs',
          z: 'nombre',
        },
      ),
    ],
    x: {
      // https://github.com/observablehq/plot#formats
      tickFormat: 'd',
    },
    y: {
      nice: true,
      grid: true,
    },
  })
  d3.select('#chart').append(() => chart)
})
