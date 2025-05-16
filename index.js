const wrapper = document.createElement("main")
wrapper.id = "wrapper"
document.querySelector("body").append(wrapper)





function startApp(wrapper) {
renderHeader(wrapper);
renderDjList(wrapper);
renderBodyContainer(wrapper);
const left = document.querySelector("#left")
renderGraph1(left)
renderDjStats(document.getElementById("right"));

    
}

startApp(wrapper)
