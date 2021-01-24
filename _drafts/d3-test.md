---
title: testing d3
layout: post
category: Mathematics
tags:
- data-visualization
- data-viz
- statistics
- mathematics
- topology
- algebra
- theory
banner: /assets/images/2018/04/12_banner.jpg
---

## Idea

This is a template of how to get responsive graphs in d3.

<script src="https://d3js.org/d3.v3.js"></script>

<div id="chart"></div>
<style>
#chart {
  width: 100%;
}
.bar {
  fill: steelblue;
}

.bar:hover {
  fill: brown;
}

.axis {
  font: 10px sans-serif;
}

.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

.x.axis path {
  display: none;
}
</style>

<script>
var data = [
{% for chart in site.data.bar-chart %}
  {
    "letter": "{{ chart.year }}",
    "frequency": "{{ chart.frequency }}"
  }{% if forloop.last == false %},{% endif %}
{% endfor %}]
var div = document.getElementById("chart");
var svg = d3.select(div).append('svg');

function redraw() {
  var width = div.clientWidth,
    height = width * 0.3;

  svg.attr('width', width).attr('height', height);

  var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
    .range([height, 0]);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Number of Years");

  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.letter); })
    .attr("width", x.rangeBand())
    .attr("y", function(d) { return y(d.frequency); })
    .attr("height", function(d) { return height - y(d.frequency); });
}
redraw();
window.addEventListener("resize", redraw);
</script>
