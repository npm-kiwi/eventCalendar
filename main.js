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

