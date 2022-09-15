// Task 1
let events = [];

const eventName = document.querySelector("#eventName");
const eventDate = document.querySelector("#eventDate");
const bAdd = document.querySelector("#bAdd");

document.querySelector("#tasksContainer").innerHTML = eventsHTML.join("");

document.querySelector("form").addEventListener("submit", (e) => e.preventDefault);

buttonAdd.addEventListener("click", (e) => {
        e.preventDefault;
        addEvent();
})


