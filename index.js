const wrapper = document.createElement("main")
wrapper.id = "wrapper"
document.querySelector("body").append(wrapper)

function startApp(wrapper) {
// renderHeader(wrapper)
renderHeader(wrapper);
renderDjList(wrapper);
renderBodyContainer(wrapper);
renderDjStats(document.getElementById("right"), testData);

    
}

let testData = [1, 2, 3];
startApp(wrapper)
