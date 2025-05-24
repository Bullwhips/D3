const wrapper = document.createElement("main")
wrapper.id = "wrapper"
document.querySelector("body").append(wrapper)

let currentGraph = "AttendancePerMonth";

  const wSvg = 925,
        hSvg = 638,
        wPadding = 40,
        earningsPerMonthwPadding = 60;
        hPaddingBottom = 30,
        hPaddingTop = 20,
        wViz = wSvg - 2 * wPadding,
        hViz = hSvg - hPaddingBottom - hPaddingTop
        
        // antal = dataset.length

function startApp(wrapper) {
renderHeader(wrapper);
renderDjList(wrapper);
renderBodyContainer(wrapper);
const left = document.querySelector("#left")
const right = document.querySelector("#right")
switch (currentGraph) {
  case "AttendancePerMonth":
    renderAttendancePerMonthGraph(left);
    break;
  case "AttendanceRate":
    renderAttendanceRateGraph(left);
    break;
    case "EarningsPerMonth":
        renderGraphEarningsPerMonth(left);
    break;
  case "FullData":
      renderFullDataGraph(left)
  break;
    
}
renderDjStats(right);
renderGraphList(right);
renderYears(right);
changeStatText(currentGraph);
    
}

startApp(wrapper)
