let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'mision_hs',
        y: 'edad_mision',
        fill: 'ocupacion',
        fillOpacity: 0.6,
        r: 'eva_mision_hs',
        title: 'nombre',
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    zero: true,
    width: 800,
    height: 200,
    r: { range: [3, 15] },
    facet: {
      data: data,
      x: 'ocupacion',
    },
    x: { ticks: 3 },
  })
  d3.select('#chart').append(() => chart)
})
