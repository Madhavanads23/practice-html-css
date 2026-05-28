function submitData() {

    document.getElementById("message").innerHTML =
    "Submitting...";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {

            method: "POST",

            body: JSON.stringify({

                name: "Madhavan",

                event: "Music Fest"

            }),

            headers: {

                "Content-type":
                "application/json; charset=UTF-8"

            }

        })

        .then(response => response.json())

        .then(data => {

            document.getElementById("message")
            .innerHTML =
            "Registration Successful";

            console.log(data);

        })

        .catch(error => {

            document.getElementById("message")
            .innerHTML =
            "Submission Failed";

        });

    }, 2000);
}