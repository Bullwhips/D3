function renderGraphEarningsPerMonth(wrapper, selectedYear = 2015) {
    let old = document.getElementById("graphContainer");

    if (old) wrapper.removeChild(old);

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

    let maxEarnings = 0;
    
    for (let dj of DJs) 
    {       
        const djID = dj.id;
        const dataset = 
        {
            id: djID,
            name: dj.name,
            earnings: {}

        }

        let djGigs = Gigs.filter(x => x.djID === djID);
        
        for (let monthIndex = 0; monthIndex < 120; monthIndex++) 
        {
            const year = 2015 +  Math.floor(monthIndex / 12);
            const month = monthIndex % 12;

            let djGigs = Gigs.filter(x => x.djID === djID)
                .filter(x => {
                    let _date = new Date(x.date);
                    let _year = _date.getFullYear();
                    let _month = _date.getMonth();
                    return _year === year && _month === month
                });
            
            let totalEarnings = 0;
            for (let djGig of djGigs) {
                totalEarnings = totalEarnings + djGig.djEarnings;
                if (totalEarnings > maxEarnings) maxEarnings = totalEarnings;
            }

            let point = {month: month, totalEarnings: totalEarnings};

            if (!dataset.earnings[year]) dataset.earnings[year] = [];

            dataset.earnings[year].push(point);
        }

        djDataset.push(dataset);
    }
    console.log(djDataset);
    console.log(maxEarnings);

    let xScale = d3.scaleBand(months, [wPadding, wPadding + wViz])
                    .paddingInner(0.2)
                    .paddingOuter(0.2);

    let yScale = d3.scaleLinear([0, maxAttendance], [hPaddingBottom + hViz, hPaddingBottom]);

    let xAxisFunction = d3.AxisBottom(xScale)
    svg.append("g")
        .call(xAxisFunction)
        .attr("transform", `translate(0, ${hPaddingBottom + hViz})`)
} 