




events.unshift(new Event);

eventName.value = "";

renderEvents()

let dateDiff= (d) => {
    let targetDate = new Date(d);
    let today = new Date()
    let difference = targetDate.getTime() - today.getTime()

    let days = Math.ceil(difference/(1000* 3600* 24))

    return days
}

