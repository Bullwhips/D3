function renderDjStats (container) {

    const djStatsContainer = document.createElement("div");
    djStatsContainer.setAttribute("id", "djStatsContainer");
    container.appendChild(djStatsContainer);

    let djNameContainer = document.createElement("div");
    djNameContainer.classList.add("djNameContainer");
    djStatsContainer.appendChild(djNameContainer);

    djNameContainer.innerHTML = `
    <p><</p>
    <p>DJ Name</p>
    <p>></p>
    `;
    // djStatsContainer.appendChild(djName);

    let statsContainer = document.createElement("div");
    djStatsContainer.appendChild(statsContainer);
    statsContainer.innerHTML = `
    <div id="firstStat">
        <p></p>
        <p></p>
    </div>
    <div id="secondStat">
        <p></p>
        <p></p>
    </div>
    <div id="thirdStat">
        <p></p>
        <p></p>
    </div>
    `

    container.appendChild(djStatsContainer);

}

function changeStats(data) {

}