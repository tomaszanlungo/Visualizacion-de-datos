d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let chart = Plot.plot({
    
    grid: true,
    line: true,
    nice: true,
    
    facet: {
      data: data,
      x: "status",
    },
    
    //height: 600,
    width: 1400,

    y: {
      grid: true
    },

    marks: [
      Plot.barY(data, Plot.groupX({y: "count"}, {x: "ocupacion", fill: "genero", fillOpacity: 0.6,})),
      Plot.ruleY([0])
    ],

    color: {
      legend: "ramp",
      range: ["#a3c4f3", "#ffd670"]

    },
  })
 
  d3.select('#chart').append(() => chart)
})

