function renderDjList(container) 
{
  let nav = document.createElement("nav");
  let allDjs = document.createElement("div");
  allDjs.setAttribute("id", "allDjs");

  let allDjsP = document.createElement("p");
  allDjsP.textContent = "All DJ:s";
  allDjs.appendChild(allDjsP);

  nav.appendChild(allDjs);
  for (let dj of DJs) 
  {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let bottomBorder = document.createElement("div");
    div.setAttribute("data-id", dj.id);
    div.setAttribute("data-name", dj.name);
    bottomBorder.classList.add("chosenDjBorder");
    p.textContent = dj.name;
    div.appendChild(p);
    p.appendChild(bottomBorder);
    nav.appendChild(div);
  }
    
  container.appendChild(nav);

  let divs = nav.querySelectorAll("div");
  divs.forEach(div => div.addEventListener("click", chosenDj));
}

