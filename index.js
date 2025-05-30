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
        
       

function startApp(wrapper) 
{
  renderHeader(wrapper);
  renderDjList(wrapper);
  renderBodyContainer(wrapper);
  const left = document.querySelector("#left")
  const right = document.querySelector("#right")
  renderAttendancePerMonthGraph(left);
  renderDjStats(right);
  renderGraphList(right);
  renderYears(right);
  changeStatText(currentGraph);
}

startApp(wrapper)
