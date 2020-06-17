
function youRang(event) {
    console.log(event.target.id)
    document.getElementById("main-text").innerHTML += "you rang...";
    console.log("you rang...");
}

window.onload = () => {
    // Obtain a reference to the button element
    let button = document.getElementById("ring-button");
    // Set named function youRang as the click event handler
    button.addEventListener("click", youRang);

    let button2 = document.getElementById("greet-friends-button");
    button2.addEventListener("click", function (event) {
        console.log("event type", event.type);
        console.log("event target", event.target);
        console.log("event target id", event.target.id);
        document.getElementById("main-text").innerHTML += "hello friends...";
        console.log("hello friends...");
    });
}