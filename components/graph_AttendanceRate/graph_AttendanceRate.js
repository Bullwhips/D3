
function renderAttendanceRateGraph(left, selectedYear = 2015) 
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

      let djCitiesPopulation = []
      let currentCityID

      for (let i = 0; i < djGigs.length; i++) {
        currentCityID = djGigs[i].cityID
       

       let currentCity = Cities.find((city) => city.id === currentCityID);
      djCitiesPopulation.push(currentCity.population);

       
      }

   
   
      let totalAttendance = djGigs.reduce((sum, gig) => sum + (gig.attendance ), 0);
      let totalPopulation = djCitiesPopulation.reduce((sum, pop) => sum + pop, 0);

  

      let attendanceRate = totalPopulation > 0 ? totalAttendance / totalPopulation : 0;

      let attendanceRatePerCent = Math.round(attendanceRate * 100);

      let point = { month: month, attendanceRatePerCent: attendanceRatePerCent, gigs: djGigs.length }; 

      if (!dataset.attendance[year]) {dataset.attendance[year] = [];}

      dataset.attendance[year].push(point); 
    }

    djDataset.push(dataset); 
  

  }

let maxAttendancePerCent = 0

for (let i = 0; i < djDataset.length; i++) { 
  for (let year = 2015; year <= 2024; year++) {  
    const statsByYear = djDataset[i].attendance[year];  
 

    for (let j = 0; j < statsByYear.length; j++) {  
      if (statsByYear[j].attendanceRatePerCent > maxAttendancePerCent) {
        maxAttendancePerCent = statsByYear[j].attendanceRatePerCent;
      }
    }
  }
}

              

  xScale = d3.scaleBand(months, [wPadding, wPadding + wViz])
             .paddingInner(0.2)
             .paddingOuter(0.2)

  yScale = d3.scaleLinear([0, maxAttendancePerCent], [hPaddingBottom + hViz, hPaddingBottom]);

  hScale = d3.scaleLinear ([0, maxAttendancePerCent], [0, hViz])

 


  let xAxisFunction = d3.axisBottom(xScale);
  svg.append("g")
     .call(xAxisFunction)
     .attr("transform", `translate(0, ${hPaddingBottom + hViz})`)
     .style("color", "white");          


  let yAxisFunction = d3.axisLeft(yScale);
  svg.append("g")
     .call(yAxisFunction)
     .attr("transform", `translate(${wPadding}, 0)`)
     .style("color", "white");  

     attendanceRateText(left)
}


function drawDJsAttendanceRate() 
{
  const svg = d3.select("#graphContainer").select("svg");
  svg.selectAll(".dj-bar").remove(); 


  const barWidth = xScale.bandwidth()
  

  for (let djID of selectedDJs) 
  {
    const dj = djDataset.find(d => d.id === djID);
    
    
    const yearData = dj.attendance[currentYear];
   

    

    svg.selectAll(`.dj-bar-${djID}`)
      .data(yearData)
      .enter()
      .append("rect")
      .attr("class", `dj-bar dj-bar-${djID}`)
      .attr("x", d => xScale(months[d.month]))
      .attr("y", d => yScale(d.attendanceRatePerCent))
      .attr("width", barWidth) 
      .attr("height", d => hScale(d.attendanceRatePerCent))
      .attr("fill", getColorForDJ(djID));
  }

}


  


