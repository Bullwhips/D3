function renderDjStats (right) 
{
  const djStatsContainer = document.createElement("div");
  djStatsContainer.setAttribute("id", "djStatsContainer");
  right.appendChild(djStatsContainer);

  let djNameContainer = document.createElement("div");
  djNameContainer.classList.add("djNameContainer");
  djStatsContainer.appendChild(djNameContainer);

  djNameContainer.innerHTML = `
    <p id="leftArrow"><</p>
    <p class="djStatsName"></p>
    <p id="rightArrow">></p>
    `;
  
  let statsContainer = document.createElement("div");
  statsContainer.setAttribute("id", "statsContainer");
  djStatsContainer.appendChild(statsContainer);
  statsContainer.innerHTML = `
    <div class="stat">
        <p id="firstStat"></p>
        <p id="firstStatNumber"></p>
    </div>
    <div class="stat">
        <p id="secondStat"></p>
        <p id="secondStatNumber"></p>
    </div>
    <div class="stat">
        <p id="thirdStat"></p>
        <p id="thirdStatNumber"></p>
    </div>
    <div class="stat">
        <p id="fourthStat"></p>
        <p id="fourthStatNumber"></p>
    </div>
    <div id="fifthStatContainer" class="stat">
        <p id="fifthStat"></p>
        <p id="fifthStatNumber"></p>
    </div>
    `
  right.appendChild(djStatsContainer);
  document.getElementById("leftArrow").addEventListener("click", scrollLeftDj);
  document.getElementById("rightArrow").addEventListener("click", scrollRightDj);

}

let djIndex = 0;
let currentDj;

function addDjStatlist(allDjs) 
{
  let djName = document.querySelector(".djStatsName");
  let djs = returnSelectedDjs();
    

  if (allDjs) 
  {
    djName.textContent = djs[0].name;
    djName.setAttribute("id", "0");
    currentDj = djs[0];
    updateStatNumbers(currentGraph);
  } 

  if (djs.length === 0) 
  {
    djName.textContent = "";
    djName.removeAttribute("id");
    currentDj = null
    
    document.getElementById("firstStatNumber").textContent = "";
    document.getElementById("secondStatNumber").textContent = "";
    document.getElementById("thirdStatNumber").textContent = "";
    document.getElementById("fourthStatNumber").textContent = "";
        
    if (currentGraph !== "AttendanceRate") 
        {
          document.getElementById("fifthStatNumber").textContent = "";
          document.getElementById("fifthStatContainer").style.height = "100%";
        } 
        else 
        {
          document.getElementById("fifthStat").textContent = "";
          document.getElementById("fifthStatNumber").textContent = "";
          document.getElementById("fifthStatContainer").style.height = 0;
        }
  }

  else if (djs.length === 1) 
    {    
      djName.textContent = djs[0].name;
      djName.setAttribute("id", "0");
      currentDj = djs[0];
      updateStatNumbers(currentGraph);
        
    } 
}

function changeStatText(graph) 
{
  let firstStat = document.getElementById("firstStat");
  let secondStat = document.getElementById("secondStat");
  let thirdStat = document.getElementById("thirdStat");
  let fourthStat = document.getElementById("fourthStat");
  let fifthStat = document.getElementById("fifthStat");

  switch (graph) 
  {
    case "AttendancePerMonth":
    firstStat.textContent = "Highest Attendance:";
    secondStat.textContent = "Best Month:";
    thirdStat.textContent = "Avg Attendance Gig:";
    fourthStat.textContent = "Total Attendance";
    fifthStat.textContent = "Total Gigs";
    break;    

    case "AttendanceRate":
    firstStat.textContent = "Highest Average:";
    secondStat.textContent = "Best Month:";
    thirdStat.textContent = "Avg Yearly Rate:";
    fourthStat.textContent = "Total Gigs";
    break;
        
    case "EarningsPerMonth":
    firstStat.textContent = "Highest Earnings:";
    secondStat.textContent = "Best Month:";
    thirdStat.textContent = "Avg Earnings Gig";
    fourthStat.textContent = "Total Earnings";
    fifthStat.textContent = "Total Gigs";
    break;

    case "FullData":
    firstStat.textContent = "Total Attendance";
    secondStat.textContent = "Total Earnings:";
    thirdStat.textContent = "Avg Attendance Gig:";
    fourthStat.textContent = "Avg Earnings Gig";
    fifthStat.textContent = "Total Gigs";
    break;

    default:
    break;
  }
}

function updateStatNumbers(graph) {
    let firstStatNumber = document.getElementById("firstStatNumber");
    let secondStatNumber = document.getElementById("secondStatNumber");
    let thirdStatNumber = document.getElementById("thirdStatNumber");
    let fourthStatNumber = document.getElementById("fourthStatNumber");
    let fifthStatNumber = document.getElementById("fifthStatNumber");

    switch (graph) 
    {
      case "AttendancePerMonth":
      firstStatNumber.textContent = calculateHighestAttendance(currentDj, currentYear);
      secondStatNumber.textContent = calculateBestMonth(currentDj, currentYear);
      thirdStatNumber.textContent = calculateAverageByGigs(currentDj, currentYear, currentGraph);
      fourthStatNumber.textContent = calculateTotal(currentDj, currentYear, currentGraph);
      fifthStatNumber.textContent  = calculateTotalYearlyGigs(currentDj, currentYear, currentGraph);
      break;

      case "AttendanceRate":
      firstStatNumber.textContent = calculateHighestAverage(currentDj, currentYear) + "%";
      secondStatNumber.textContent = calculateBestMonthAttendanceRate(currentDj, currentYear);
      thirdStatNumber.textContent  = calculateAverageByProcent(currentDj, currentYear, currentGraph) + "%";
      fourthStatNumber.textContent  = calculateTotalYearlyGigs(currentDj, currentYear, currentGraph);
      break;

      case "EarningsPerMonth":
      firstStatNumber.textContent = calculateHighestEarnings(currentDj, currentYear) + " kr";
      secondStatNumber.textContent = calculateBestEarningsMonth(currentDj, currentYear);
      thirdStatNumber.textContent = calculateAverageByGigs(currentDj, currentYear, currentGraph) + " kr";
      fourthStatNumber.textContent = calculateTotal(currentDj, currentYear, currentGraph) + " kr";
      fifthStatNumber.textContent  = calculateTotalYearlyGigs(currentDj, currentYear, currentGraph);
      break;

      case "FullData":
      firstStatNumber.textContent = calculateTotal(currentDj, currentYear, currentGraph, "attendance");
      secondStatNumber.textContent = calculateTotal(currentDj, currentYear, currentGraph, "earnings");
      thirdStatNumber.textContent = calculateAverageByGigs(currentDj, currentYear, currentGraph, "attendance");
      fourthStatNumber.textContent = calculateAverageByGigs(currentDj, currentYear, currentGraph, "earnings");
      fifthStatNumber.textContent  = calculateTotalYearlyGigs(currentDj, currentYear, currentGraph);
      break;
    }
}

function scrollLeftDj() 
{
  let djs = returnSelectedDjs();
  let djNameElement = document.querySelector(".djStatsName");
  
  if (djs.length > 1) 
  {
    currentDjIndex = parseInt(djNameElement.id);
    currentDjIndex = (currentDjIndex + 1) % djs.length
    djNameElement.id = currentDjIndex;
    currentDj = djs[currentDjIndex];
    djNameElement.textContent = djs[currentDjIndex].name;
    updateStatNumbers(currentGraph);
  }
}

function scrollRightDj() 
{
  let djs = returnSelectedDjs();
  let djNameElement = document.querySelector(".djStatsName");

  if (djs.length > 1) 
  {
    currentDjIndex = parseInt(djNameElement.id)
    currentDjIndex = (currentDjIndex - 1 + djs.length) % djs.length;
    djNameElement.id = currentDjIndex;
    currentDj = djs[currentDjIndex];
    djNameElement.textContent = djs[currentDjIndex].name;
    updateStatNumbers(currentGraph);
  } 
}


function removeDj() {
    let djs = returnSelectedDjs(); 
    let djNameElement = document.querySelector(".djStatsName");

    if (!selectedDJs.has(currentDj.id)) 
    {
      currentDj = djs[0];
      djNameElement.textContent = djs[0].name;
      updateStatNumbers(currentGraph);
    }
}