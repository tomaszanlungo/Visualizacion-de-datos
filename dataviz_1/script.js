d3.csv('astronautas.csv', d3.autoType).then(data => {

  console.log(data)

  let chart = Plot.plot({
    
    grid: true,
    nice: true,
    
    facet: {
      data: data,
      x: "status",
      label: "",
    },
    
    height: 500,
    width: 1400,

    marks: [
      Plot.barY(data, Plot.groupX({y: "count"}, {x: "ocupacion", fill: "genero", fillOpacity: 0.6,})),
      Plot.ruleY([0]),

    ],

    color: {
      legend: "ramp",
      range: ["lightpink", "lightblue"]
    },
    
    x: {
      label: "",
    },

    y:{
      label: "cantidad",
    }

  })
 
  d3.select('#chart').append(() => chart)
  addTooltips(chart);

})

