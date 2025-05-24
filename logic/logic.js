const years = 
[
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    
]

let selectedDJs = new Set(); // stores DJ ids
let currentYear = 2015; // tracks the current year
let djDataset = []; // global djDataset
let xScale, yScale; // global x and y scale

function updateGraph(year) {
  currentYear = year;
  if (currentDj) {
    console.log(currentGraph)
    updateStatNumbers(currentGraph);
  }
  // drawVisibleDJs();
  if (document.getElementById("allDjs").classList.contains("active")) {
 
    if (currentGraph === "AttendancePerMonth") {  
      drawAllDjsAttendancePerMonth();
    } else if (currentGraph === "EarningsPerMonth") {
      drawAllDjsEarningsPerMonth();
    } else if (currentGraph === "FullData") {
      drawAllDjsFullData();
    }
  } else {
    if (currentGraph === "AttendancePerMonth") {  
      drawDJsAttendancePerMonth();
    } else if (currentGraph === "EarningsPerMonth") {
      drawDjsEarningsPerMonth();
    } else if (currentGraph === "AttendanceRate") {
      drawDJsAttendanceRate();
    }
    else if (currentGraph === "FullData") {
      drawDJsFullData() 
    }
  }
}

function returnSelectedDjs () {
  let allSelectedDjs = [];

  for (let selected of selectedDJs) {
    for (let dj of djDataset) {
      if (dj.id === selected) {
        allSelectedDjs.push(dj);
      }
    }
  } 
  return allSelectedDjs;
}



//Attendance Per Month Stat Functions

function calculateHighestAttendance(dj, year) {
  let allYearAttendance = dj.attendance[year];
  let highestAttendance = 0;

  for (let yearAttendance of allYearAttendance) {
    if (yearAttendance.totalAttendance > highestAttendance) highestAttendance = yearAttendance.totalAttendance;
  }

  return highestAttendance;
}

function calculateBestMonth(dj, year) {
  let bestMonthNumber = 0;
  let highestAttendance = 0;

  console.log(dj);
  let allYearAttendance = dj.attendance[year];
  for (let yearAttendance of allYearAttendance) {
    if (yearAttendance.totalAttendance > highestAttendance) {
      highestAttendance = yearAttendance.totalAttendance;
      bestMonthNumber = yearAttendance.month;
    }
  }

  let bestMonth = months[bestMonthNumber];
  return bestMonth;
}



//Attendance Rate Stat Functions

function calculateHighestAverage(dj, year) {
  let highestAverage = 0;

  let allYearAverage = dj.attendance[year];
  for (let avg of allYearAverage) {
    console.log(avg);
    if (avg.attendanceRatePerCent > highestAverage) highestAverage = avg.attendanceRatePerCent;
  }

  return highestAverage;
}

function calculateBestMonthAttendanceRate(dj, year) {
  let bestMonthNumber = 0;
  let highestRate = 0;

  let allYearRate = dj.attendance[year];
  for (let rate of allYearRate) {
    if (rate.attendanceRatePerCent > highestRate) {
      highestRate = rate.attendanceRatePerCent;
      bestMonthNumber = rate.month;
    }
  }

  let bestMonth = months[bestMonthNumber];
  return bestMonth;
}




//Earnings per month stat functions

function calculateHighestEarnings(dj, year) {
  let highest = 0;
  const allYearEarnings = dj.earnings[year];

  for (let month of allYearEarnings) {
    if (month.totalEarnings > highest) highest = month.totalEarnings;
  }

  return highest;
}

function calculateBestEarningsMonth(dj, year) {
  let bestMonthNumber = 0;
  let highestEarnings = 0;

  let allYearEarnings = dj.earnings[year];
  for (let earnings of allYearEarnings) {
    if (earnings.totalEarnings > highestEarnings) {
      highestEarnings = earnings.totalEarnings;
      bestMonthNumber = earnings.month;
    }
  }

  let bestMonth = months[bestMonthNumber];
  return bestMonth;
}

function calculateAverageByGigs(dj, year, graph, type) {
  let totalGigs = calculateTotalYearlyGigs(dj, year, graph);
  let total = calculateTotal(dj, year, graph, type);

  let average = total/totalGigs;
  if (average > 0) {
    return Math.round(average);
  } else {
    return 0;
  }
}


function calculateTotal(dj, year, graph, type) {
  let total = 0;
  
  switch (graph) {
    case "AttendancePerMonth":
      let djYearArray = dj.attendance[year];
      djYearArray.forEach(n => total = total + n.totalAttendance);
      return total;
    case "AttendanceRate":
      let djAttendanceArray = dj.attendance[year];
      djAttendanceArray.forEach(n => total = total + n.attendanceRatePerCent);
      return total;
    case "FullData":
      if (type === "earnings") {
        return dj.data[year].totalEarnings;
      } else if (type === "attendance") {
        return dj.data[year].totalAttendance;
      }
      break;
    case "EarningsPerMonth":
      let djEarningsArray = dj.earnings[year];
      djEarningsArray.forEach(n => total = total + n.totalEarnings);
      return total;
  }
}

function calculateTotalYearlyGigs(dj, year, graph) {
  let totalGigs = 0;
  
  switch (graph) {
    case "AttendancePerMonth":
      dj.attendance[year].forEach(n => totalGigs = totalGigs + n.gigs);
      return totalGigs;
    case "AttendanceRate":
      dj.attendance[year].forEach(n => totalGigs = totalGigs + n.gigs);
      return totalGigs;
    case "EarningsPerMonth": 
      dj.earnings[year].forEach(n => totalGigs = totalGigs + n.gigs);
      return totalGigs;
    case "FullData":
      totalGigs = dj.data[year].gigs;
      console.log("Full Data gigs ", totalGigs);
      return totalGigs;
  }
}


function chosenDj(event) {
  const div = event.currentTarget;
  const djID = parseInt(div.getAttribute("data-id"));

  if (div.id === "allDjs") {
    if (div.classList.contains("active")) {
      div.classList.remove("active");
      djDataset.forEach(dj => selectedDJs.delete(dj.id));

      addDjStatlist(false);
      d3.select("svg").selectAll("path.dj-line").remove();
      d3.select("svg").selectAll("circle.dj-circle").remove();
      return;
    } else {
      div.classList.add("active");
      djDataset.forEach(dj => selectedDJs.add(dj.id));

      addDjStatlist(true);
      if (currentGraph === "AttendancePerMonth") {
        // console.log(currentGraph);
        drawAllDjsAttendancePerMonth();
      } else if (currentGraph === "EarningsPerMonth") {
        drawAllDjsEarningsPerMonth();
      } else if (currentGraph === "FullData") {
        drawAllDjsFullData();
      }
      return;
    }
  }

  // Clear previous selection styles from all DJs
if (currentGraph === "AttendanceRate") {
  document.querySelectorAll(".chosenDjBorder").forEach(border => {
    border.style.borderBottom = "none";
  });
} 


  if (currentGraph === "AttendanceRate") {
    console.log("hej");
    // SINGLE SELECTION MODE
    selectedDJs.clear();
    selectedDJs.add(djID);
  } else {
    // MULTI-SELECTION MODE
    if (selectedDJs.has(djID)) {
      selectedDJs.delete(djID);
      if (selectedDJs.size > 0) {
        removeDj();
      }
    } else {
      selectedDJs.add(djID);
    }
  }

  // Update selection border
  const border = div.querySelector(".chosenDjBorder");
  const color = getColorForDJ(djID);
  if (selectedDJs.has(djID)) {
    border.style.borderBottom = `3px solid ${color}`;
  } else {
    border.style.borderBottom = "none";
  }

  // Redraw graph
  switch (currentGraph) {
    case "AttendancePerMonth":
      addDjStatlist();
      drawDJsAttendancePerMonth();
      break;
    case "AttendanceRate":
        addDjStatlist();
        drawDJsAttendanceRate();
        break;
    case "EarningsPerMonth":
      addDjStatlist();
      drawDjsEarningsPerMonth();
      break;
    case "FullData":
      addDjStatlist();
      drawDJsFullData();
      break;
  }
}


function getColorForDJ(id) 
{
  const entry = djColorArray.find(dj => dj.id === id);
  return entry.color
}

function clearAllDjBorders() {
  document.querySelectorAll(".chosenDjBorder").forEach(border => {
    border.style.borderBottom = "none";
  });
}

function clearGraphSelectionColors() {
  document.querySelectorAll("#graphSelectionContainer > div").forEach(div => {
    div.classList.remove("selectedGraph");
  });
}