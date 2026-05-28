class Event {

    constructor(name, seats) {

        this.name = name;
        this.seats = seats;

    }
}

Event.prototype.checkAvailability = function () {

    if(this.seats > 0) {

        return "Seats Available";

    }

    else {

        return "House Full";

    }
};

const event1 = new Event("Music Fest", 20);

document.getElementById("output").innerHTML =
event1.checkAvailability();

console.log(Object.entries(event1));