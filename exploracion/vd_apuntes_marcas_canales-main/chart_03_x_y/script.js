d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "mision_hs",
        y: "edad_mision",
      }),
    ],
  });
  d3.select("#chart").append(() => chart);
});
