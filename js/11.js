const events = [

    {
        name: "Music Fest",
        date: "10 June"
    },

    {
        name: "Sports Day",
        date: "15 June"
    }

];

function showEvent(eventName = "Default Event") {

    console.log(eventName);

}

const { name, date } = events[0];

console.log(name, date);

const clonedEvents = [...events];

console.log(clonedEvents);

showEvent();