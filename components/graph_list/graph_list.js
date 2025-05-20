function renderGraphList(right) {
    let graphListContainer = document.createElement("div")
    graphListContainer.id = "graphListContainer"
    right.append(graphListContainer)

    let graphListHeader = document.createElement("p")
    graphListHeader.id = "graphListHeader"
    graphListHeader.textContent = "GRAPH"
    graphListContainer.append(graphListHeader)

    let graphSelectionContainer = document.createElement("div")
    graphSelectionContainer.id = "graphSelectionContainer"
    graphListContainer.append(graphSelectionContainer)

    let graphListAttendancePerMonth = document.createElement("div")
    graphListAttendancePerMonth.id = "graphListAttendancePerMonth"
    graphListAttendancePerMonth.textContent = "ATTENDACE PER MONTH"
    graphSelectionContainer.append(graphListAttendancePerMonth)

    let pinkDiv2 = document.createElement("div")
    pinkDiv2.id = "pinkDiv2"
    graphSelectionContainer.append(pinkDiv2)

    let graphListAttendancePopulation = document.createElement("div")
    graphListAttendancePopulation.id = "graphListAttendancePopulation"
    graphListAttendancePopulation.textContent = "ATTENDANCE/POPULATION"
    graphSelectionContainer.append(graphListAttendancePopulation)

      let pinkDiv3 = document.createElement("div")
    pinkDiv3.id = "pinkDiv3"
    graphSelectionContainer.append(pinkDiv3)

    let graphListEarningsPerMonth = document.createElement("div")
    graphListEarningsPerMonth.id = "graphListEarningsPerMonth"
    graphListEarningsPerMonth.textContent = "EARNINGS PER MONTH"
    graphSelectionContainer.append(graphListEarningsPerMonth)

      let pinkDiv1 = document.createElement("div")
    pinkDiv1.id = "pinkDiv1"
    graphSelectionContainer.append(pinkDiv1)
    
    let graphListFullDataGraph = document.createElement("div")
    graphListFullDataGraph.id = "graphListFullDataGraph"
    graphListFullDataGraph.textContent = "FULL DATA GRAPH"
    graphSelectionContainer.append(graphListFullDataGraph)

}