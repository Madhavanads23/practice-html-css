let events = [];

function addEvent(name, category) {

    events.push({ name, category });

}

function registerUser(name) {

    return `${name} registered successfully`;

}

function filterEventsByCategory(category, callback) {

    let filtered = events.filter(
        event => event.category === category
    );

    callback(filtered);

}

function registrationTracker() {

    let total = 0;

    return function () {

        total++;

        return total;

    };
}

const trackMusic = registrationTracker();

addEvent("Music Fest", "Music");

addEvent("Dance Show", "Dance");

document.getElementById("result").innerHTML +=
trackMusic();

filterEventsByCategory("Music", function(data) {

    console.log(data);

});