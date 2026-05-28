fetch("https://jsonplaceholder.typicode.com/posts")

.then(response => response.json())

.then(data => {

    console.log(data);

    document.getElementById("loading")
    .innerHTML = "Data Loaded";

})

.catch(error => {

    console.log(error);

});

async function loadEvents() {

    try {

        let response =
        await fetch(
        "https://jsonplaceholder.typicode.com/posts"
        );

        let data = await response.json();

        console.log(data);

    }

    catch(error) {

        console.log(error);

    }
}

loadEvents();