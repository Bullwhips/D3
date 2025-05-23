function renderDjStats (container) {

    const djStatsContainer = document.createElement("div");
    djStatsContainer.setAttribute("id", "djStatsContainer");
    container.appendChild(djStatsContainer);

    let djNameContainer = document.createElement("div");
    djNameContainer.classList.add("djNameContainer");
    djStatsContainer.appendChild(djNameContainer);

    djNameContainer.innerHTML = `
    <p id="leftArrow"><</p>
    <p class="djStatsName"></p>
    <p id="rightArrow">></p>
    `;
    // djStatsContainer.appendChild(djName);

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
    `

    container.appendChild(djStatsContainer);
    document.getElementById("leftArrow").addEventListener("click", scrollLeftDj);
    document.getElementById("rightArrow").addEventListener("click", scrollRightDj);

}

let djIndex = 0;
let currentDj;

function addDjStatlist(allDjs) {
    console.log("nu borde texten för den valda dj:n försvinna?");
    let djName = document.querySelector(".djStatsName");
    let djs = returnSelectedDjs();
    console.log(djs);

    if (allDjs) {
        djName.textContent = djs[0].name;
        djName.setAttribute("id", "0");
        djName.classList.add(`djId:${djs[0].id}`);
        currentDj = djs[0];
        updateStatNumbers(currentGraph);
    } 

    if (djs.length === 0) {
        djName.textContent = "";
        djName.removeAttribute("id");
        removeDjIdClass(djName);
        currentDj = null;

        document.getElementById("firstStatNumber").textContent = "0";
        document.getElementById("secondStatNumber").textContent = "";
        document.getElementById("thirdStatNumber").textContent = "0";
    } else if (djs.length === 1) {    
        console.log(djs[0]);   
        djName.textContent = djs[0].name;
        djName.setAttribute("id", "0");

        removeDjIdClass(djName);
        djName.classList.add(`djId:${djs[0].id}`);
        currentDj = djs[0];

        updateStatNumbers(currentGraph);
        // calculateHighestAttendance(djs[0], currentYear);
    } 
}

function changeStatText(graph) {
    console.log("hej");
    let firstStat = document.getElementById("firstStat");
    let secondStat = document.getElementById("secondStat");
    let thirdStat = document.getElementById("thirdStat");

    switch (graph) {
        case "AttendancePerMonth":
            console.log("hej");
            firstStat.textContent = "Highest Attendance:";
            secondStat.textContent = "Best Month:";
            thirdStat.textContent = "Avg Attendance:";
            break;        
        case "AttendanceRate":
            firstStat.textContent = "Highest Average:";
            secondStat.textContent = "Best Month:";
            thirdStat.textContent = "Avg Attendance Rate:";
            break;
        case "EarningsPerMonth":
            firstStat.textContent = "Highest Earnings:";
            secondStat.textContent = "Best Month:";
            thirdStat.textContent = "Avg Earnings";
            break;
        default:
            break;
    }
}

function updateStatNumbers(graph) {
    let firstStatNumber = document.getElementById("firstStatNumber");
    let secondStatNumber = document.getElementById("secondStatNumber");
    let thirdStatNumber = document.getElementById("thirdStatNumber");

    switch (graph) {
        case "AttendancePerMonth":
            firstStatNumber.textContent = calculateHighestAttendance(currentDj, currentYear);
            secondStatNumber.textContent = calculateBestMonth(currentDj, currentYear);
            thirdStatNumber.textContent = calculateAverageAttendance(currentDj, currentYear);
            break;       
        case "AttendanceRate":
            firstStatNumber.textContent = calculateHighestAverage(currentDj, currentYear) + "%";
            secondStatNumber.textContent = calculateBestMonthAttendanceRate(currentDj, currentYear);
            thirdStatNumber.textContent  = calculateAverageAttendanceRate(currentDj, currentYear) + "%";
            break;
        case "EarningsPerMonth":
            firstStatNumber.textContent = calculateHighestEarnings(currentDj, currentYear) + " kr";
            secondStatNumber.textContent = calculateBestEarningsMonth(currentDj, currentYear);
            thirdStatNumber.textContent = calculateAverageEarnings(currentDj, currentYear) + " kr";
            break;
    }
}

function scrollLeftDj(event) {

    let djs = returnSelectedDjs();
    let djNameElement = document.querySelector(".djStatsName");

    if (djs.length > 1) {
        currentDjIndex = parseInt(djNameElement.id);
         currentDjIndex = (currentDjIndex + 1) % djs.length

        

          
            djNameElement.id = currentDjIndex;
            currentDj = djs[currentDjIndex];
            
            console.log(currentDjIndex);
            djNameElement.textContent = djs[currentDjIndex].name;
            
            removeDjIdClass(djNameElement);
            djNameElement.classList.add(`djId:${djs[currentDjIndex].id}`);
            updateStatNumbers(currentGraph);


        
    }
}

function scrollRightDj(event) {
    
    let djs = returnSelectedDjs();
    let djNameElement = document.querySelector(".djStatsName");

    if (djs.length > 1) {
        currentDjIndex = parseInt(djNameElement.id)
        currentDjIndex = (currentDjIndex - 1 + djs.length) % djs.length;
     
            
            djNameElement.id = currentDjIndex;
            currentDj = djs[currentDjIndex];

            djNameElement.textContent = djs[currentDjIndex].name;

            removeDjIdClass(djNameElement);
            djNameElement.classList.add(`djId:${djs[currentDjIndex].id}`);
            updateStatNumbers(currentGraph);
        
    }
    //när man klickar ska det gå till nästa dj i djs arrayen
}

function removeDjIdClass(dj) {
    let classes = dj.classList;
    for (let djClass of classes) {
        if (djClass.startsWith("djId:")) {
            dj.classList.remove(djClass);
        }
    }
}

function removeDj() {
    let djs = returnSelectedDjs(); 
    let djNameElement = document.querySelector(".djStatsName");

    if (!selectedDJs.has(currentDj.id)) {
        removeDjIdClass(djNameElement);
        
        currentDj = djs[0];
        djNameElement.textContent = djs[0].name;

        updateStatNumbers(currentGraph);
        djNameElement.classList.add(`djId:${currentDj.id}`);
    }
}