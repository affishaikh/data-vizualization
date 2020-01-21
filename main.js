const numbers = [5, 6, 2, 4, 1, 3];
const colours = "green,blue,red,purple,yellow,orange".split(",");
const main = function() {
  const container = d3.select("#chart-container");
  const svg = container
    .append("svg")
    .attr("width", 800)
    .attr("height", 400);

  svg
    .selectAll("circle")
    .data(numbers)
    .enter()
    .append("circle")
    .attr("r", n => n * 5)
    .attr("cx", (n, i) => 60 * i + 30)
    .attr("cy", 60)
    .attr("fill", (n, i) => colours[i]);
};

window.onload = main;
