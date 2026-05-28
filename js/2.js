const eventName = "Music Fest";

const eventDate = "10 June 2026";

let seats = 50;

document.getElementById("info").innerHTML =
`Event: ${eventName} <br>
Date: ${eventDate} <br>
Seats Available: ${seats}`;

function registerUser() {

    seats--;

    document.getElementById("info").innerHTML =
    `Event: ${eventName} <br>
    Date: ${eventDate} <br>
    Seats Available: ${seats}`;
}