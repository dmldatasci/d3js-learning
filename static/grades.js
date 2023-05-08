let body = d3.select('body');

let width = 300;
let height = 300;
let svg = body.append('svg')
              .attr('width', width)
              .attr('height', height)

let data = [
    {'name':'john', 'grade':23},
    {'name':'sara', 'grade':30},
    {'name':'layla', 'grade':28},
    {'name':'kat', 'grade':25},
    {'name':'ahmad', 'grade':17}
];

svg.selectAll('rect').data(data)
                     .enter()
                     .append('rect')
                     .attr('x', 0)
                     .attr('y', (d,i) => i * 18 + 10)
                     .attr('width', d => d.grade * 8)
                     .attr('height', 15)
                     .attr('stroke', 'white')
                     .attr('fill', 'orange')

svg.selectAll('text').data(data)
                     .enter()
                     .append('text')
                     .attr('x', 5)
                     .attr('y', (d,i) => i * 18 + 20)
                     .text(d => d.name)
                     .attr('font-size', '10px')
                     .attr('color', 'white')