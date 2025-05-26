function renderYears(right) {
    
    let yearsContainer = document.createElement("div")
    yearsContainer.id = "yearsContainer"
    right.append(yearsContainer)

    let prevArrow = document.createElement("div")
    prevArrow.id = "prevArrow"
    prevArrow.textContent = "<"
    yearsContainer.append(prevArrow)

    let yearDiv = document.createElement("div")
    yearDiv.id = "yearDiv"
    yearDiv.textContent = years[0]
    yearsContainer.append(yearDiv)

    
     let nextArrow = document.createElement("div")
    nextArrow.id = "nextArrow"
    nextArrow.textContent = ">"
    yearsContainer.append(nextArrow)

    let currentIndex = 0;

    function updateYear() {
        yearDiv.textContent = years[currentIndex];
        updateGraph(years[currentIndex]);
    }

    prevArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + years.length) % years.length;
        updateYear();
    });

    nextArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % years.length;
        updateYear();
    });
}