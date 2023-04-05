let chart;
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  chart = Plot.plot({
    r: { range: [3, 15] },
    grid: true,
    nice: true,
    zero: true,
    color: {
      legend: true,
    },
    facet: {
      data: data,
      x: "ocupacion",
    },
    marks: [
      Plot.dot(data, {
        x: "mision_hs",
        y: "edad_mision",
        fill: "ocupacion",
        fillOpacity: 0.6,
        r: "eva_mision_hs",
        title: "nombre",
      }),
    ],
  });
  d3.select("#chart").append(() => chart);
});
