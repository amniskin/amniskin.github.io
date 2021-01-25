---
title: "Let's garbage it up"
layout: post
excerpt: Let's cover HOMOLOGY! And some of that sweet Betti number goodness.
category: Mathematics
tags:
- data-visualization
- statistics
- mathematics
- topology
- algebra
- theory
banner: /assets/images/2018/04/12_banner.jpg
published: false
---

<script src = "https://d3js.org/d3.v4.min.js"></script>
<svg id="graph_svg" width="1000" height = "500"></svg>

<script>
    var svg = d3.select("svg#graph_svg"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin,
        n = 3, // number of layers
        m = 200, // number of samples per layer
        k = 10, // number of bumps per layer
        offset = 'stackOffsetWiggle',
        order = 'stackOrderNone';

	stack = d3.stack()
        .keys(d3.range(n))
        .offset(d3[offset])
        .order(d3[order])

    // Inspired by Lee Byron’s test data generator.
    function bump(a, n) {
        const x = 1 / (0.1 + Math.random());
        const y = 2 * Math.random() - 0.5;
        const z = 10 / (0.1 + Math.random());
        for (let i = 0; i < n; ++i) {
            const w = (i / n - y) * z;
            a[i] += x * Math.exp(-w * w);
        }
    }
    function bumps(n, m) {
        const a = [];
        for (let i = 0; i < n; ++i) a[i] = 0;
        for (let i = 0; i < m; ++i) bump(a, n);
        return a;
    }
    const x = d3.scaleLinear()
        .domain([0, m - 1])
        .range([0, width]);

    const y = d3.scaleLinear()
        .range([height, 0]);

    const z = d3.interpolateCool;

    const area = d3.area()
        .x((d, i) => x(i))
        .y0(d => y(d[0]))
        .y1(d => y(d[1]));

    function randomize() {
        const layers = stack(d3.transpose(Array.from({length: n}, () => bumps(m, k))));
        y.domain([
            d3.min(layers, l => d3.min(l, d => d[0])),
            d3.max(layers, l => d3.max(l, d => d[1]))
        ]);
        return layers;
    }

    const path = svg.selectAll("path")
        .data(randomize)
        .enter().append("path")
        .attr("d", area)
        .attr("fill", () => z(Math.random()));

    const interval = d3.interval(() => {
        path.data(randomize)
            .transition()
            .duration(1500)
            .attr("d", area);
    }, 2500);
</script>
