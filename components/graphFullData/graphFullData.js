
function renderFullDataGraph(wrapper, selectedYear = 2015) {
  let old = document.getElementById("graphContainer");
  
  if (old) { wrapper.removeChild(old); }
  
  let graphContainer = document.createElement("div");
  graphContainer.id = "graphContainer";
  wrapper.append(graphContainer);
  
  let svg = d3.select(graphContainer)
              .append("svg")
              .attr("width", wSvg)
              .attr("height", hSvg)
              .style("margin-top", "20px")
              .style("margin-left", "20px")
              .style("border-top", "10px solid #E52572")
              .style("border-radius", "4px")
              .style("background-color", "#110f34");

  for (let dj of DJs) {
    const djID = dj.id;
    const dataset = {
      id: djID,
      name: dj.name,
      data: {}, 
    };
    
  
    for (let year = 2015; year <= 2024; year++) {
      let totalAttendance = 0;
      let totalEarnings = 0;
      let totalAttendanceRate = 0;
      let monthsCount = 0;
      let totalGigs = 0;
    
      for (let month = 0; month < 12; month++) {
        let djGigs = Gigs.filter(x => x.djID == djID)
                         .filter(x => {
                           let _date = new Date(x.date);
                           let _year = _date.getFullYear();
                           let _month = _date.getMonth();
                           return _year === year && _month === month;
                         });
        
        let djCitiesPopulation = [];
        let currentCityID;
        totalGigs = totalGigs + djGigs.length;               
        
        for (let i = 0; i < djGigs.length; i++) {
          currentCityID = djGigs[i].cityID;
          let currentCity = Cities.find((city) => city.id === currentCityID);
          djCitiesPopulation.push(currentCity.population);
        }
        
        let yearlyEarnings = 0;
        let totalAttendanceForMonth = djGigs.reduce((sum, gig) => sum + (gig.attendance), 0);
        
        for (let djGig of djGigs) {
          yearlyEarnings += djGig.djEarnings;
        }
        
        totalAttendance += totalAttendanceForMonth;
        totalEarnings += yearlyEarnings;

        let totalPopulation = djCitiesPopulation.reduce((sum, pop) => sum + pop, 0);
        let attendanceRate = totalPopulation > 0 ? totalAttendanceForMonth / totalPopulation : 0;
        totalAttendanceRate += attendanceRate;
        
        monthsCount++;
      }

      let attendanceRatePerCent = Math.round((totalAttendanceRate / monthsCount) * 100);
      dataset.data[year] = {
        attendanceRatePerCent: attendanceRatePerCent,
        totalAttendance: totalAttendance,
        totalEarnings: totalEarnings,
        gigs: totalGigs
      };
    }

    djDataset.push(dataset); 
  }

  console.log(djDataset);
  

  let maxAttendancePerCent = 0;
  let maxAttendance = 0;
  let maxEarnings = 0;

  for (let year = 2015; year <= 2024; year++) {
    for (let i = 0; i < djDataset.length; i++) {
      const statsByYear = djDataset[i].data[year];
      if (statsByYear.attendanceRatePerCent > maxAttendancePerCent) {
        maxAttendancePerCent = statsByYear.attendanceRatePerCent;
      }
      if (statsByYear.totalAttendance > maxAttendance) {
        maxAttendance = statsByYear.totalAttendance;
      }
      if (statsByYear.totalEarnings > maxEarnings) {
        maxEarnings = statsByYear.totalEarnings;
      }
    }
  }
  console.log(maxAttendance);
  console.log(maxEarnings);
  console.log(maxAttendancePerCent);

 




              
  // x-Skala
  xScale = d3.scaleLinear([0, maxAttendance], [wPadding, wPadding + wViz]);
          

  // y-Skala
  yScale = d3.scaleLinear([0, maxAttendancePerCent], [hPaddingBottom + hViz, hPaddingBottom]);

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

     fullDataText(wrapper)
}





function drawDJsFullData() 
{
  const svg = d3.select("#graphContainer").select("svg");
  svg.selectAll("circle.dj-circle").remove(); // clear old lines



  for (let djID of selectedDJs) 
  {
    const dj = djDataset.find(d => d.id === djID);
    const yearData = dj.data[currentYear];

        if (yearData) {
        const totalAttendance = yearData.totalAttendance;
        const attendanceRatePerCent = yearData.attendanceRatePerCent;
        const totalEarnings = yearData.totalEarnings;

    const radius = totalEarnings / 10000

    svg.append("circle")
       .attr("class", "dj-circle")
       .attr("cx", xScale(totalAttendance))
       .attr("cy", yScale(attendanceRatePerCent))
       .attr("r", radius)
       .attr("id", `circle_${djID}_${currentYear}`)
       .attr("fill", getColorForDJ(djID))
       .attr("fill-opacity", 0.8)
       .attr("stroke", "white")
       .attr("stroke-width", 1);
  }
}
}

function drawAllDjsFullData() 
{
  const svg = d3.select("#graphContainer").select("svg");
  svg.selectAll("circle.dj-circle").remove();



  svg.selectAll("circle.dj-circle")
     .data(djDataset)
     .enter()
     .append("circle")
       .attr("class", "dj-circle")
       .attr("cx", d => xScale(d.data[currentYear].totalAttendance))
       .attr("cy", d => yScale(d.data[currentYear].attendanceRatePerCent))
       .attr("r", d => d.data[currentYear].totalEarnings / 10000)
       .attr("id", (d) => `circle_${d.id}_${currentYear}`)
       .attr("fill", d => getColorForDJ(d.id))
       .attr("fill-opacity", 0.8)
       .attr("stroke", "white")
       .attr("stroke-width", 1);
}
  


