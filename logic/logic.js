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
  drawVisibleDJs();
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

function calculateHighestAttendance(dj, year) {
  //should calculate the given djs highest attendance based on the current year
    switch (currentGraph) {
    case "AttendancePerMonth":
      drawDJsAttendancePerMonth();
      break;
  
    case "AttendanceRate":
      drawDJsAttendanceRate()
      break;
  }
}

function chosenDj(event) {
  const div = event.currentTarget;
  const djID = parseInt(div.getAttribute("data-id"));

  // Handle "All DJs" click (for line chart only)
  if (div.id === "allDjs") {
    if (div.classList.contains("active")) {
      div.classList.remove("active");
      d3.select("svg").selectAll("path.dj-line").remove();
    } else {
      div.classList.add("active");
      drawAllDjsAttendancePerMonth();
    }
    return;
  }

  // Clear previous selection styles from all DJs
if (currentGraph === "AttendanceRate") {
  document.querySelectorAll(".chosenDjBorder").forEach(border => {
    border.style.borderBottom = "none";
  });
}


  if (currentGraph === "AttendanceRate") {
    // SINGLE SELECTION MODE
    selectedDJs.clear();
    selectedDJs.add(djID);
  } else {
    // MULTI-SELECTION MODE
    if (selectedDJs.has(djID)) {
      selectedDJs.delete(djID);
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
      drawDJsAttendancePerMonth();
      break;
    case "AttendanceRate":
      drawDJsAttendanceRate();
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