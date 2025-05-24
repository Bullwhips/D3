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

    let pinkDiv1 = document.createElement("div")
    pinkDiv1.id = "pinkDiv1"
    pinkDiv1.classList.add("pinkDiv")
    graphSelectionContainer.append(pinkDiv1)

    let graphListAttendanceRate = document.createElement("div")
    graphListAttendanceRate.id = "graphListAttendanceRate"
    graphListAttendanceRate.textContent = "ATTENDANCE RATE"
    graphListAttendancePerMonth.classList.add("selectedGraph");
    graphSelectionContainer.append(graphListAttendanceRate)

    let pinkDiv2 = document.createElement("div")
    pinkDiv2.id = "pinkDiv2"
    pinkDiv2.classList.add("pinkDiv")
    graphSelectionContainer.append(pinkDiv2)

    let graphListEarningsPerMonth = document.createElement("div")
    graphListEarningsPerMonth.id = "graphListEarningsPerMonth"
    graphListEarningsPerMonth.textContent = "EARNINGS PER MONTH"
    graphSelectionContainer.append(graphListEarningsPerMonth)

    let pinkDiv3 = document.createElement("div")
    pinkDiv3.id = "pinkDiv3"
    pinkDiv3.classList.add("pinkDiv")
    graphSelectionContainer.append(pinkDiv3)
    
    let graphListFullDataGraph = document.createElement("div")
    graphListFullDataGraph.id = "graphListFullDataGraph"
    graphListFullDataGraph.textContent = "FULL DATA GRAPH"
    graphSelectionContainer.append(graphListFullDataGraph)



    const left = document.querySelector("#left")


graphListAttendancePerMonth.addEventListener("click", () => {
    currentGraph = "AttendancePerMonth"
    selectedDJs.clear(); 
    djDataset = []; 
    clearAllDjBorders();
    clearGraphSelectionColors(); 
    clearActive();
    removeText()
    graphListAttendancePerMonth.classList.add("selectedGraph");
    renderAttendancePerMonthGraph(left)
    changeStatText(currentGraph);
    addDjStatlist();
})

graphListAttendanceRate.addEventListener("click", () => {
    currentGraph = "AttendanceRate"
    selectedDJs.clear(); 
    djDataset = [];
    clearAllDjBorders();
    clearGraphSelectionColors(); 
    clearActive();
    removeText()
    graphListAttendanceRate.classList.add("selectedGraph");
    renderAttendanceRateGraph(left)
    changeStatText(currentGraph);
    addDjStatlist();
})

graphListEarningsPerMonth.addEventListener("click", () => {
    currentGraph = "EarningsPerMonth";
    selectedDJs.clear();
    djDataset = [];
    clearAllDjBorders();
    clearGraphSelectionColors();
    clearActive();
    removeText()
    graphListEarningsPerMonth.classList.add("selectedGraph");
    renderGraphEarningsPerMonth(left);
    changeStatText(currentGraph);
    addDjStatlist();
})

graphListFullDataGraph.addEventListener("click", () => {
    currentGraph = "FullData";
    selectedDJs.clear();
    djDataset = [];
    clearAllDjBorders();
    clearGraphSelectionColors();
    clearActive();
    removeText()
    graphListFullDataGraph.classList.add("selectedGraph");
    renderFullDataGraph(left);
    changeStatText(currentGraph);
    addDjStatlist();
})
}

function clearActive() {
    if (document.getElementById("allDjs").classList.contains("active")) {
        document.getElementById("allDjs").classList.remove("active");
    }
}


