function renderHeader(wrapper) {
    let header = document.createElement("header")
    header.id = "header"
    wrapper.append(header)

    let imgDiv = document.createElement("div")
    imgDiv.id = "imgDiv"
    header.append(imgDiv)
}