
// Task 1//
let events = [];

const eventName = document.querySelector("#eventName");
const eventDate = document.querySelector("#eventDate");
const buttonAdd = document.querySelector("#bAdd");

document.querySelector("#tasksContainer").innerHTML = eventsHTML.join("");

document.querySelector("form").addEventListener("submit", (e) => e.preventDefault);

buttonAdd.addEventListener("click", (e) => {
        e.preventDefault;
        addEvent();
})


// Task 2

function addEvent() {
    if(eventName.value === "" || eventDate.value === "") {
        return
    }
    if(dateDiff(eventDate.value) < 0) {
        return
    }
    const newEvent = {
        id: (Math.random() * 100).toString(36).slice(3),
        name: eventName.value,
        date: eventDate.value
    }
}





