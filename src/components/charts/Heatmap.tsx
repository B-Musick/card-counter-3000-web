import * as d3 from "d3";
import { useEffect, useRef } from "react";

function Heatmap({
    width = 300,
    height = 300,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 60,
    marginLeft = 60,
    options = {},
    data = [],
    textData = []
}) {
    const svgRef = useRef();

    function cellColorStatus(minimum, maximum, value) {
        return d3.scaleSequential([minimum, maximum],d3.interpolateRdYlBu)(value)
    }

    useEffect(() => {
        const flatMat = data.flat();
        const flatCellData = textData.flat();
        const maxVal = d3.max(flatMat);
        
        // Get x and y scales
        const x = d3.scaleLinear([0, data[0].length], [marginLeft, width - marginRight]);
        const y = d3.scaleLinear([0, data.length], [height - marginBottom, marginTop]);
        var rectw = ((x(1)-x(0))*0.9)
        var recth = rectw;

        const svgElement = d3.select(svgRef.current).attr("width", width).attr("height", height)
        svgElement.selectAll("rect").data(flatMat).enter().append("g").append('rect')
            .attr('x', function(d, i) {return x(i % data[0].length)})
            .attr('y', function(d, i) {return y(Math.floor(i / data[0].length))})
            .attr('width', rectw)
            .attr('height', recth)
            .attr('fill', (d,i)=>cellColorStatus(0, maxVal, d))
            // .attr('opacity', (d)=>d/maxVal)
            .attr('padding', '1px')

        svgElement.selectAll("g").append("text")
            .style("fill", "black")
            .style("font-size", "8px")
            .attr("dy", ".35em")
            .attr("x", function (d,i) { return x(i % data[0].length) + 9 })
            .attr("y", function (d,i) { return y(Math.floor(i / data[0].length)) + 12; })
            .style("style", "label")
            .text((d, i)=>flatCellData[i]);

        const xLabels = Object.keys(options).includes('scales') ? options.scales.x.ticks: ["A,A", "B,B","A,A", "B,B","A,A", "B,B","A,A", "B,B","A,A", "B,B"]
        const yLabels = Object.keys(options).includes('scales') ? options.scales.y.ticks: ["A,A", "B,B","A,A", "B,B","A,A", "B,B","A,A", "B,B","A,A", "B,B"]

        var x_axis = d3.axisBottom(x).ticks(xLabels.length)
            .tickFormat(function (d) {
                return xLabels[d];
            });

        svgElement.append('g')
            .attr("transform", `translate(0,${height-35})`)
            .call(x_axis).selectAll("text")
                .style("text-anchor", "start")
                .attr("transform", `translate(${7}, 0)`);
  
        var y_axis = d3.axisLeft(y)
            .ticks(yLabels.length)
                .tickFormat(function (d) {
                    return yLabels[d];
                }); 
  
        svgElement.append("g") 
            .attr("transform", `translate(${marginLeft-2}, ${25})`) 
            .call(y_axis).selectAll("text")
            .style("text-anchor", "start")
            .attr("transform", "translate(-17, -10)");
        
        svgElement.append('rect')
        .attr('x', marginLeft)
        .attr('y', 0)
        .attr('width', width)
        .attr('height', 20)
        .attr('fill', 'rgb(230, 225, 225)')
        
        svgElement.append('text')
        .attr('class', 'title')
        .attr('x', width/2+10)
        .attr('y', 15)
        .text(options.title);
        

      }, [])
      
    return (
        <svg ref={svgRef} />
    )
}

export default Heatmap;