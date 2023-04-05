d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "mision_hs",
        y: "edad_mision",
        r: "eva_mision_hs",
        fill: "ocupacion",
        symbol: "ocupacion",
      }),
    ],
    r: { range: [3, 15] },
    grid: true,
    line: true,
    nice: true,
    symbol: {
      legend: "true",
    },
  });

  d3.select("#chart").append(() => chart);
});
