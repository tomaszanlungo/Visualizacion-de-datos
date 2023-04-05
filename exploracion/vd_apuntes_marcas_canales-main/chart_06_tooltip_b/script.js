let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.table(data)

  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'mision_hs',
        y: 'edad_mision',
        r: 'eva_mision_hs',
        fill: 'ocupacion',
        opacity: 0.5,
        title: d => `${d.nombre}
Edad: ${d.edad_mision} años
Horas de mision: ${d.mision_hs}`,
      }),
    ],
    r: { range: [3, 15] },
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
    },
  })

  d3.select('#chart').append(() => chart)
})
