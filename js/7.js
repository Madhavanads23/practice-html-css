const container =
document.querySelector("#container");

const events = [

    "Music Fest",

    "Sports Day",

    "Food Carnival"

];

events.forEach(event => {

    let card =
    document.createElement("div");

    card.innerHTML =
    `<h3>${event}</h3>
    <button onclick="register('${event}')">
    Register
    </button>`;

    container.appendChild(card);

});

function register(eventName) {

    alert(`Registered for ${eventName}`);

}