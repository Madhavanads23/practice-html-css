function register() {

    alert("Registered Successfully");

}

document.getElementById("category")
.onchange = function () {

    alert("Category Changed");

};

document.getElementById("search")
.addEventListener("keydown", function () {

    console.log("Searching...");

});