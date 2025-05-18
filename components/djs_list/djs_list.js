function renderDjList(container) {
    let nav = document.createElement("nav");
    let allDjs = document.createElement("div");
    allDjs.setAttribute("id", "allDjs");

    let allDjsP = document.createElement("p");
    allDjsP.textContent = "DJ:s";

    allDjs.appendChild(allDjsP);

    nav.appendChild(allDjs);
    for (let dj of DJs) {
        let div = document.createElement("div");
        let p = document.createElement("p");

        div.setAttribute("data-id", dj.id);
        div.setAttribute("data-name", dj.name);
        p.textContent = dj.name;

        div.appendChild(p);
        nav.appendChild(div);
    }
    container.appendChild(nav);

    let divs = nav.querySelectorAll("div");
    console.log(divs);
    divs.forEach(div => div.addEventListener("click", chosenDj));
}

