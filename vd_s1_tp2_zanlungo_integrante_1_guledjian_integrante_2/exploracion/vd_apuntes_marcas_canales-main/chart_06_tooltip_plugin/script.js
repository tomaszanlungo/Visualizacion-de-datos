import addTooltips from "./addTooltips.js";
let chart;
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  chart = Plot.plot({
    r: { range: [3, 15] },
    grid: true,
    line: true,
    nice: true,
    marks: [
      Plot.dot(data, {
        x: "mision_hs",
        y: "edad_mision",
        fill: "ocupacion",
        fillOpacity: 0.5,
        r: "eva_mision_hs",
        title: (d) => `${d.nombre}`,
      }),
    ],
    color: {
      legend: "ramp",
      
    },
    x: {
      domain: [0, d3.max(data, (d) => d.mision_hs)],
    },
    y: {
      tickFormat: d3.format(".0f"),
      domain: [0, d3.max(data, (d) => d.edad_mision)],
    },
    r: {
      range: [3, 15],
    },
  });
  addTooltips(chart);
  d3.select("#chart").append(() => chart);
});
