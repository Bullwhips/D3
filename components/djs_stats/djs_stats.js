function renderDjStats (container, data) {
    const djStatsContainer = document.createElement("div");
    djStatsContainer.setAttribute("id", "djStatsContainer");

    let djName = document.createElement("div");
    djName.classList.add("djName");
    djStatsContainer.appendChild(djName);

    container.appendChild(djStatsContainer);
}