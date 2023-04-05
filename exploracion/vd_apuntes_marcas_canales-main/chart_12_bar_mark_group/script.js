d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(
        data,
        Plot.groupY(
          {
            x1: 'min',
            x2: 'max',
          },
          { x: 'mision_hs', y: 'ocupacion' },
        ),
      ),
    ],
    x: {
      label: 'Min of mision_hs, Max of mision_hs',
    },
    height: 200,
    width: 600,
    grid: true,
    nice: true,
    line: true,
  })
  d3.select('#chart').append(() => chart)
})
