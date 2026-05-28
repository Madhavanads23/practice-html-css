let events = [];

events.push("Music Fest");

events.push("Workshop on Baking");

events.push("Sports Day");

let musicEvents = events.filter(event =>
event.includes("Music"));

let formatted = events.map(event =>
`Event: ${event}`);

formatted.forEach(event => {

    document.getElementById("events").innerHTML +=
    `<p>${event}</p>`;

});