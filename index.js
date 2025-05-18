const wrapper = document.createElement("main")
wrapper.id = "wrapper"
document.querySelector("body").append(wrapper)





function startApp(wrapper) {
renderHeader(wrapper);
renderDjList(wrapper);
renderBodyContainer(wrapper);
const left = document.querySelector("#left")
const right = document.querySelector("#right")
renderGraph1(left)
renderDjStats(right);
renderYears(right)
    
}

startApp(wrapper)
