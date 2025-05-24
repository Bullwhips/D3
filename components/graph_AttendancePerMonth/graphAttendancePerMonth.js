
function renderAttendancePerMonthGraph(left, selectedYear = 2015) 
{
  let old = document.getElementById("graphContainer")
  
  if (old) {left.removeChild(old)}

  let graphContainer = document.createElement("div")
  graphContainer.id = "graphContainer"
  left.append(graphContainer)

  let svg = d3.select(graphContainer)
              .append("svg")
              .attr("width", wSvg)
              .attr("height", hSvg)
              .style("margin-top", "20px")
              .style("margin-left", "20px")
              .style("border-top", "10px solid #E52572")
              .style("border-radius", "4px")
              .style("background-color", "#110f34")

  for (let dj of DJs) 
  { 
    const djID = dj.id; 
    const dataset = 
    { 
      id: djID, 
      name: dj.name, 
      attendance: {}, 
    };

    for (let monthIndex = 0; monthIndex < 120; monthIndex++) 
    { 
      const year = 2015 + Math.floor(monthIndex / 12);
      const month = monthIndex % 12;

      let djGigs = Gigs.filter(x => x.djID == djID)
        .filter(x => 
          { 
           let _date = new Date(x.date); 
           let _year = _date.getFullYear(); 
           let _month = _date.getMonth(); 
           return _year === year && _month === month; 
          });
   
      let totalAttendance = djGigs.reduce((sum, gig) => sum + (gig.attendance ), 0);

      let point = { month: month, totalAttendance: totalAttendance }; 

      if (!dataset.attendance[year]) {dataset.attendance[year] = [];}

      dataset.attendance[year].push(point); 
    }

    djDataset.push(dataset); 
  
  }


let maxAttendance = 0;

for (let year = 2015; year <= 2024; year++) {
  for (let i = 0; i < djDataset.length; i++) {
    const statsByYear = djDataset[i].attendance[year];
   
    

    for (let j = 0; j < statsByYear.length; j++) {
      if (statsByYear[j].totalAttendance > maxAttendance) {
        maxAttendance = statsByYear[j].totalAttendance;
      }
    }
  }
}

              
  // x-Skala
  xScale = d3.scaleBand(months, [wPadding, wPadding + wViz])
             .paddingInner(0.2)
             .paddingOuter(0.2)

  // y-Skala
  yScale = d3.scaleLinear([0, maxAttendance], [hPaddingBottom + hViz, hPaddingBottom]);

  // Skapa x-axel i sitt eget <g>
  let xAxisFunction = d3.axisBottom(xScale);
  svg.append("g")
     .call(xAxisFunction)
     .attr("transform", `translate(0, ${hPaddingBottom + hViz})`)
     .style("color", "white");          

  // Skapa y-axel i sitt eget <g>
  let yAxisFunction = d3.axisLeft(yScale);
  svg.append("g")
     .call(yAxisFunction)
     .attr("transform", `translate(${wPadding}, 0)`)
     .style("color", "white");  

     attendancePerMonthText(left)
}





function drawDJsAttendancePerMonth() 
{
  const svg = d3.select("#graphContainer").select("svg");
  svg.selectAll("path.dj-line").remove(); // clear old lines

  const dMaker = d3.line()
    .x(d => xScale(months[d.month]) + xScale.bandwidth() / 2)
    .y(d => yScale(d.totalAttendance));

  for (let djID of selectedDJs) 
  {
    const dj = djDataset.find(d => d.id === djID);
    const yearData = dj.attendance[currentYear];

    svg.append("path")
       .datum(yearData)
       .attr("class", "dj-line")
       .attr("id", `line_${djID}_${currentYear}`)
       .attr("stroke", getColorForDJ(djID))
       .attr("stroke-width", 3)
       .attr("fill", "none")
       .attr("d", dMaker);
  }
}

function drawAllDjsAttendancePerMonth() 
{
  const svg = d3.select("#graphContainer").select("svg");
  svg.selectAll("path.dj-line").remove();

  const dMaker = d3.line()
    .x(d => xScale(months[d.month]) + xScale.bandwidth() / 2)
    .y(d => yScale(d.totalAttendance));

  svg.selectAll("path.dj-line")
     .data(djDataset)
     .enter()
     .append("path")
     .attr("class", "dj-line")
     .attr("id", (d) => `line_${d.id}_${currentYear}`)
     .attr("stroke", (d) => getColorForDJ(d.id))
     .attr("stroke-width", 3)
     .attr("fill", "none")
     .attr("d", (d) => dMaker(d.attendance[currentYear]));
}
  


