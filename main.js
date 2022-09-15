// Task 1
let events = [];

document.querySelector("#eventName");
document.querySelector("#eventDate");
document.querySelector("#bAdd");

document.querySelector("#tasksContainer");

document.querySelector("form").addEventListener("submit", (e) => e.preventDefault);

buttonAdd.addEventListener("keyup", (e) => {
    if(e.key === "Enter") {
        e.preventDefault;
        addEvent();
    }
})


