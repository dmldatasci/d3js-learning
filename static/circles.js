let width = 300;
let height = 300;

let svg = d3.select('body').append('svg')
                        .attr('width', width)
                        .attr('height', height)

d3.json('./Resources/data.json').then((data) => {

    console.log(data)

    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', d => d.x * 10)
        .attr('cy', d => d.y * 10)
        .attr('fill', d => d.color)
        .attr('r', d => d.value)
});