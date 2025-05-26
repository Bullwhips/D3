function renderBodyContainer(wrapper) 
{
  let bodyContainer = document.createElement("div");
  bodyContainer.setAttribute("id", "bodyContainer");
    
  let containerLeft = document.createElement("div");
  containerLeft.setAttribute("id", "left");

  let containerRight = document.createElement("div");
  containerRight.setAttribute("id", "right");

  bodyContainer.appendChild(containerLeft);
  bodyContainer.appendChild(containerRight);

  wrapper.appendChild(bodyContainer);
}