let renderEvents = () => {
  let eventsHTML = events.map((event) => {
    `
    <div class= "event">
    <div class= "days"> 
    <span class= "days-number"> ${dateDiff(event.date)}</span>
    <span class= "days-text>Dias</span>
    </div> 
    
    </div>

    <div class= "event-name">${event.name}</div>
    <div class= "event-date"> ${event.date}</div>
    <div class= "actions">
    <button class= "bDelete" data-id= "${event.id}">Eliminar</button>
    </div>  
    
    `;
  });
};

document.querySelector("#tasksContainer").innerHTML = eventsHTML.join("");

document.querySelectorAll(".bDelete").forEach((button) => {
  document.addEventListener("click");
  let id = button.getAtribute(data - id);

  events = events.filter((event) => event.id !== id);
});
