function submitForm() {

    console.log("Form Submission Started");

    let user = {

        name: "Madhavan",

        event: "Music Fest"

    };

    console.log(user);

    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",

        body: JSON.stringify(user),

        headers: {

            "Content-type":
            "application/json"

        }

    })

    .then(response => response.json())

    .then(data => {

        console.log("Success:", data);

    });

}