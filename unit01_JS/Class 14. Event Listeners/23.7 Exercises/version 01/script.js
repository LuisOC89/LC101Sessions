let button = null;
let paragraph = null;
let missionAbort = null;
let customButton;

function init () {
    missionAbort = document.getElementById("abortMission");
    button = document.getElementById("liftoff");
    paragraph = document.querySelector("p");
    customButton = document.getElementsByClassName("customB");

    // Put your code for the exercises here.
    /*
    1. When the "Take off" button is clicked, the text 
    "The shuttle is on the ground" changes to "Houston, 
    we have lift off!". The "Take off" button has an `id` 
    of "liftoff".
    */
    button.addEventListener("click", function () {
        paragraph.innerHTML = "Houston, we have lift off!";
    });
    /*
    2. When the user's mouse goes over the "Abort Mission" 
    button, the button's background turns red. The "Abort Mission" 
    button has an `id` of "abortMission".
    */
    missionAbort.addEventListener("mouseover", function () {
        missionAbort.style.backgroundColor = "red";
    });
    /*
    3. When the user clicks the "Abort Mission" button, 
    make a confirmation window that says "Are you sure 
    you want to abort the mission?".
    */
    missionAbort.addEventListener("click", function (event) {
        console.log(event.target.id); 
        let response = confirm("Are you sure you want to abort the mission?");
        if (response) {
            console.log("Cool!");
        } else {
            console.log("Oh no!");
        }       
    });

}

window.onload = init;
