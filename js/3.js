const events = [

    { name: "Music Fest", seats: 10, status: "upcoming" },

    { name: "Old Workshop", seats: 0, status: "past" },

    { name: "Sports Day", seats: 5, status: "upcoming" }

];

events.forEach(event => {

    if(event.status === "upcoming" && event.seats > 0) {

        document.getElementById("events").innerHTML +=
        `<p>${event.name}</p>`;

    }

});

function register(eventName) {

    try {

        let event = events.find(e => e.name === eventName);

        if(event.seats <= 0) {

            throw "No seats available";

        }

        event.seats--;

        alert("Registration Successful");

    }

    catch(error) {

        alert(error);

    }
}

register("Music Fest");