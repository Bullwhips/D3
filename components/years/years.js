function renderYears(wrapper) {
    
    let yearsContainer = document.createElement(div)
    yearsContainer.id = "yearsContainer"
    wrapper.append(yearsContainer)

    let prevArrow = document.createElement("div")
    prevArrow.id = "prevArrow"
    prevArrow.textContent = "<"
    yearsContainer.append(prevArrow)

    let yearDiv = document.createElement(div)
    yearDiv.id = "yearDiv"
    yearDiv.textContent = years[0]
    yearsContainer.append(yearDiv)

    
     let nextArrow = document.createElement("div")
    nextArrow.id = "nextArrow"
    nextArrow.textContent = ">"
    yearsContainer.append(nextArrow)

}