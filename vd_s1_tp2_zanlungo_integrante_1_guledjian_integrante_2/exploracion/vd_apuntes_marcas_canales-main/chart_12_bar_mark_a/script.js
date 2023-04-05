d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'nombre',
      }),
    ],
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.nombre),
    },
    x: {
      grid: true,
    },
    height: 1500,
    marginLeft: 100,
  })
  d3.select('#chart').append(() => chart)
})


