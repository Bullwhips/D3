

function renderGraph1(wrapper) {
let graphContainer = document.createElement("div")
graphContainer.id = "graphContainer"
wrapper.append(graphContainer)
      const wSvg = 925,
        hSvg = 638,
        wPadding = 20,
        hPaddingBottom = 30,
        hPaddingTop = 20,
        wViz = wSvg - 2 * wPadding,
        hViz = hSvg - hPaddingBottom - hPaddingTop
        // antal = dataset.length

        let svg = d3.select(graphContainer)
          .append("svg")
          .attr("width", wSvg)
          .attr("height", hSvg)
          .style("margin-top", "20px")
          .style("margin-left", "20px")
          .style("border-top", "10px solid #E52572")
          .style("border-radius", "4px")
          .style("background-color", "#110f34")
}