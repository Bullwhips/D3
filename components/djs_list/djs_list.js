function renderDjList(container) {
    let nav = document.createElement("nav");
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