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

        div.setAttribute("id", dj.id);
        p.textContent = dj.name;

        div.appendChild(p);
        nav.appendChild(div);
    }
    container.appendChild(nav);
}