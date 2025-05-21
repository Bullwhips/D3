function renderDjStats (container) {

    const djStatsContainer = document.createElement("div");
    djStatsContainer.setAttribute("id", "djStatsContainer");
    container.appendChild(djStatsContainer);

    let djNameContainer = document.createElement("div");
    djNameContainer.classList.add("djNameContainer");
    djStatsContainer.appendChild(djNameContainer);

    djNameContainer.innerHTML = `
    <p id="leftArrow"><</p>
    <p class="djStatsName">DJ Name</p>
    <p id="rightArrow">></p>
    `;
    // djStatsContainer.appendChild(djName);

    let statsContainer = document.createElement("div");
    djStatsContainer.appendChild(statsContainer);
    statsContainer.innerHTML = `
    <div class="stat">
        <p id="firstStat"></p>
        <p id="firstStatNumber"></p>
    </div>
    <div class="stat">
        <p id="secondStat"></p>
        <p id="secondStatNumber"></p>
    </div>
    <div class="stat">
        <p id="thirdStat"></p>
        <p id="thirdStatNumber"></p>
    </div>
    `

    container.appendChild(djStatsContainer);
    document.getElementById("leftArrow").addEventListener("click", scrollLeftDj);
    document.getElementById("rightArrow").addEventListener("click", scrollRightDj);

}

let djIndex = 0;

function addDjStatlist(allDjs) {
    let djName = document.querySelector(".djStatsName");
    let djs = returnSelectedDjs();

    if (allDjs) {
        djName.textContent = djs[0].name;
        djName.setAttribute("id", "0");
        djName.classList.add(`djId:${djs[0].id}`);
    } 

    if (djs.length === 0) {
        djName.textContent = "";
        djName.removeAttribute("id");
        removeDjIdClass(djName);
    } else if (djs.length === 1) {       
        djName.textContent = djs[0].name;
        djName.setAttribute("id", "0");
        removeDjIdClass(djName);
        djName.classList.add(`djId:${djs[0].id}`);
    }   
}

function changeStatText(graph) {

}

function scrollLeftDj(event) {

    let djs = returnSelectedDjs();
    let djNameElement = document.querySelector(".djStatsName");

    if (djs.length > 1) {
        currentDjIndex = parseInt(djNameElement.id);
        
        if (currentDjIndex < djs.length && currentDjIndex !== 0) {
            console.log("hej");
            currentDjIndex = currentDjIndex - 1;
            djNameElement.id = currentDjIndex;
            
            console.log(currentDjIndex);
            djNameElement.textContent = djs[currentDjIndex].name;
            
            removeDjIdClass(djNameElement);
            djNameElement.classList.add(`djId:${djs[currentDjIndex].id}`);
        }
    }
}

function scrollRightDj(event) {
    
    let djs = returnSelectedDjs();
    let djNameElement = document.querySelector(".djStatsName");

    if (djs.length > 1) {
        currentDjIndex = parseInt(djNameElement.id)
    
        if (currentDjIndex < djs.length - 1) {
            currentDjIndex = currentDjIndex + 1
            djNameElement.id = currentDjIndex;

            djNameElement.textContent = djs[currentDjIndex].name;

            removeDjIdClass(djNameElement);
            djNameElement.classList.add(`djId:${djs[currentDjIndex].id}`);
        }
    }
    //när man klickar ska det gå till nästa dj i djs arrayen
}

function removeDjIdClass(dj) {
    let classes = dj.classList;
    for (let djClass of classes) {
        if (djClass.startsWith("djId:")) {
            dj.classList.remove(djClass);
        }
    }
}